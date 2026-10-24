/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'astrosiddi.com',
          },
        ],
        destination: 'https://www.astrosiddi.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
