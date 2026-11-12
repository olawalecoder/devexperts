import mongoose, { Mongoose } from "mongoose";

import logger from "@/lib/logger";
import "@/database";

interface MongooseCache {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
    if (cached.conn && cached.conn.connection.readyState === 1) {
        logger.info("Using existing mongoose connection");
        return cached.conn;
    }

    // A disconnected cached connection must not keep returning a resolved promise.
    if (cached.conn) {
        cached.conn = null;
        cached.promise = null;
    }

    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined");
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                dbName: "devxperts",
                serverSelectionTimeoutMS: 5000,
            })
            .then((result) => {
                logger.info("Connected to MongoDB");
                return result;
            })
            .catch((error) => {
                // Allow a later request to retry after Atlas recovers.
                cached.promise = null;
                cached.conn = null;
                logger.error({ err: error }, "Error connecting to MongoDB");
                throw error;
            });
    }

    cached.conn = await cached.promise;

    return cached.conn;
};

export default dbConnect;
