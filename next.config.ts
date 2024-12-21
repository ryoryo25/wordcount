import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV == 'development' ? undefined : 'export',
  basePath: process.env.GITHUB_ACTIONS ? undefined : '',
  trailingSlash: true,
};

export default nextConfig;
