import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "storage.googleapis.com",
      "upload.wikimedia.org",
      "images-of-elements.com",
    ],
  },
};

export default nextConfig;
