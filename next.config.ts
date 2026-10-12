import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog cover photos request 90/92 for extra sharpness; Next 16 only allows
    // qualities explicitly listed here.
    qualities: [75, 90, 92],
  },
};

export default nextConfig;
