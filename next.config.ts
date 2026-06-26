import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "img.recraft.ai"
      }
    ]
  },
  allowedDevOrigins: ['192.168.1.154'],
};

export default nextConfig;
