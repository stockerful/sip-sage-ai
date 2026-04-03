/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force skip Turborepo interference
  experimental: {
    turbotrace: {
      logLevel: 'error',
    },
  },
};

export default nextConfig;
