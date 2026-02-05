import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["lh3.googleusercontent.com"], // autorise les images Google
  },
};

export default nextConfig;
