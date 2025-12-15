import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/SaaS-Dashboard',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
