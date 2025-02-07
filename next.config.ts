/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // This helps with deployment
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows images from any HTTPS domain
      },
    ],
  },
};

module.exports =  nextConfig;
