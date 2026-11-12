const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the real TypeScript modules without a production database or secrets.
function loadModule(file, dependencies, env = {}, sharedGlobal = {}) {
  const source = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  });
  const module = { exports: {} };
  vm.runInNewContext(outputText, {
    module, exports: module.exports, Error, Promise,
    process: { env }, global: sharedGlobal,
    require(name) {
      assert.ok(name in dependencies, `Unexpected dependency: ${name}`);
      return dependencies[name];
    },
  }, { filename: file });
  return module.exports.default;
}

const logger = { info() {}, error() {} };
const uri = 'mongodb://127.0.0.1:1/test';
function loadConnection(connect, env = { MONGODB_URI: uri }) {
  const cache = {};
  const dbConnect = loadModule('lib/mongoose.ts', {
    mongoose: { connect }, '@/lib/logger': logger, '@/database': {},
  }, env, cache);
  return { dbConnect, cache };
}

test('missing configuration is caught at connection time, not module import', async () => {
  const { dbConnect } = loadConnection(() => assert.fail('must not connect'), {});
  await assert.rejects(dbConnect(), /MONGODB_URI is not defined/);
});

test('a failed connection can recover on the very next request', async () => {
  let attempts = 0;
  const connection = { connection: { readyState: 1 } };
  const { dbConnect, cache } = loadConnection(async () => {
    if (++attempts === 1) throw new Error('querySrv ENOTFOUND');
    return connection;
  });
  await assert.rejects(dbConnect(), /ENOTFOUND/);
  assert.equal(cache.mongoose.promise, null);
  assert.equal(await dbConnect(), connection);
  assert.equal(await dbConnect(), connection);
  assert.equal(attempts, 2);
});

test('concurrent requests share one connection attempt', async () => {
  let attempts = 0;
  let finish;
  const pending = new Promise(resolve => { finish = resolve; });
  const { dbConnect } = loadConnection(() => { attempts++; return pending; });
  const first = dbConnect();
  const second = dbConnect();
  const connection = { connection: { readyState: 1 } };
  finish(connection);
  assert.deepEqual(await Promise.all([first, second]), [connection, connection]);
  assert.equal(attempts, 1);
});

test('a stale disconnected connection is re-established', async () => {
  let attempts = 0;
  const old = { connection: { readyState: 1 } };
  const replacement = { connection: { readyState: 1 } };
  const { dbConnect } = loadConnection(async () => ++attempts === 1 ? old : replacement);
  assert.equal(await dbConnect(), old);
  old.connection.readyState = 0;
  assert.equal(await dbConnect(), replacement);
  assert.equal(attempts, 2);
});

test('action returns a safe 503 instead of throwing a database failure into the page', async () => {
  class RequestError extends Error {
    constructor(statusCode, message) { super(message); this.statusCode = statusCode; }
  }
  const action = loadModule('lib/handlers/action.ts', {
    zod: { ZodError: class extends Error {} },
    '@/auth': { auth: async () => null },
    '@/lib/http-errors': { RequestError, UnauthorizedError: Error, ValidationError: Error },
    '@/lib/mongoose': async () => { throw new Error('private database address'); },
  });
  const result = await action({ params: { page: 1 } });
  assert.equal(result.statusCode, 503);
  assert.match(result.message, /try again shortly/);
  assert.ok(!result.message.includes('private database address'));
});
