import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    domains: [
      "lh3.googleusercontent.com",      // Google
      "avatars.githubusercontent.com",  // GitHub
    ],
  },
};

export default nextConfig;
