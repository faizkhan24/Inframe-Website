/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com'
      },
      {
        protocol: 'https',
        hostname: 's3files.core77.com'
      },
      {
        protocol: 'https',
        hostname: 'buffer.com'
      },
      {
        protocol: 'https',
        hostname: 'weandthecolor.com'
      },
      {
        protocol: 'https',
        hostname: 'image.cnbcfm.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'inframecollege.org'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com'
      }
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig