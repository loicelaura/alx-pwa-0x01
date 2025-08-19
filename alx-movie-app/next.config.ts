import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // allow loading from Amazon
  },
};

export default withPWA({
     ...nextConfig
})
    
