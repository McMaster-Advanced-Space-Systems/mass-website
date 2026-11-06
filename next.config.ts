import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/competitions",
        destination: "/projects",
        permanent: true,
      },
      // Project pages that were replaced by the current three projects.
      { source: "/projects/can-sbx", destination: "/projects/solaris", permanent: true },
      { source: "/projects/can-arx", destination: "/projects/stellarscope", permanent: true },
      { source: "/projects/comp-3", destination: "/projects", permanent: true },
      { source: "/projects/comp-4", destination: "/projects", permanent: true },
      {
        source: "/competitions/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;