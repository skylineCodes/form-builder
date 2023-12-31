/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseURL: 'http://localhost:3001',
  },
  experimental: {
    // serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig
