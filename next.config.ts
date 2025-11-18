import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Performance optimizations for SEO
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  // Image optimization is already enabled by default in Next.js
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
