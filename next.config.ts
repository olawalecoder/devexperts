import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    server: ['pino', 'pino-pretty' ],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.vecteezy.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "cdn-icons-png.flaticon.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;