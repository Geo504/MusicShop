/** @type {import('next').NextConfig} */
import cors from 'cors';

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.FRONTEND_URL,
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },
}

export default nextConfig
