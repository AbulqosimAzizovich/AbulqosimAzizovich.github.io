import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["your-image-domain.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: true, // Static export uchun rasm optimallashtirishni o‘chiradi
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
