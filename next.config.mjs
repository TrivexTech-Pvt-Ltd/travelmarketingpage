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
      {
        protocol: "https",
        hostname: "resources.travelnationsl.com",
        pathname: "/**",
      },
    ],
  },
   typescript: {
    ignoreBuildErrors: true, // ❗ Ignore TS errors during build
  },
};

export default nextConfig;
