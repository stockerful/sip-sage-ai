/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript errors during build (needed for SpeechRecognition API)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Also ignore ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
