import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/competitions",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/competitions/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;