/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.trustpilot.net",
        pathname: "/brand-assets/**",
      },
    ],
  },
   typescript: {
    ignoreBuildErrors: true, // ❗ Ignore TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ❗ Ignore ESLint errors during build
  },
};

export default nextConfig;
