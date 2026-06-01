import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this project directory.
  // Prevents Next.js from walking up to /Users/mw/ and picking up
  // unrelated lockfiles (puppeteer-core) that would otherwise be
  // mistaken for the workspace root.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
