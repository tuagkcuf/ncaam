/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'a.espncdn.com',
            port: '',
            pathname: '/i/teamlogos/ncaa/**',
        },
    ],
    formats: ['image/avif', 'image/webp']
  },
    experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
