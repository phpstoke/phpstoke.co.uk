/** @type {import('next').NextConfig} */
const nextConfig = {
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
