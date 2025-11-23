/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next.js 15 optimizations
  experimental: {
    optimizePackageImports: ['aos'],
  },
  // Ensure proper image handling
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
  },
}

module.exports = nextConfig

