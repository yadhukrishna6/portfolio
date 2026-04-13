import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enable React strict mode for better development experience */
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
