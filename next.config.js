/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unavatar.io',
        pathname: '/twitter/*',
      }, {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ]
  },
}

module.exports = nextConfig
