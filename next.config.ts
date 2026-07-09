import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: isProduction ? "https://andy-zheng-portfolio.pages.dev" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
