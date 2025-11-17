/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"],
  },
   typescript: {
    ignoreBuildErrors: true, // ❗ Ignore TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ❗ Ignore ESLint errors during build
  },
};

export default nextConfig;
