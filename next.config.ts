import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["sharpness-easeful-ripping.ngrok-free.dev"],
};

export default nextConfig;
