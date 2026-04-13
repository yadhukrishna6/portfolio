import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enable React strict mode for better development experience */
  reactStrictMode: true,

  /* Enable Turbopack for faster builds */
  experimental: {
    turbo: true,
  },
};

export default nextConfig;
