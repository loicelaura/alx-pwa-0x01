import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // allow loading from Amazon
  },
};

export default nextConfig;
