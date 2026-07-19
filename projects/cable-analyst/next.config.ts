import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 produces a fully static site in `out/` (npm run build:static)
 * suitable for any static host: upload the folder contents as-is.
 * Without the flag, the app builds for a Node server (npm run build + start).
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isStaticExport
    ? { output: "export" as const, images: { unoptimized: true } }
    : { images: { formats: ["image/avif", "image/webp"] as const } }),
};

export default nextConfig;
