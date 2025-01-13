import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'via.assets.so',
      },
      {
        protocol: 'https',
        hostname: 'www.flaticon.com',
      },
    ],
  },
}

export default nextConfig
