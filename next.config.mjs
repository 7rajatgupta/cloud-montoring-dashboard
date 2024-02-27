/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "montycloud.com",
      },
    ],
  },
};

export default nextConfig;
