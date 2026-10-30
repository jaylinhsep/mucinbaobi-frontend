import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mucinbaobi.com",
      },
      {
        protocol: "http",
        hostname: "mucinbaobi.com",
      },
      {
        protocol: "https",
        hostname: "admin.mucinbaobi.com",
      },
      {
        protocol: "https",
        hostname: "cms.mucinbaobi.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "/:slug",
        permanent: true, // HTTP 301 permanent redirect for SEO preservation
      },
    ];
  },
};

export default nextConfig;
