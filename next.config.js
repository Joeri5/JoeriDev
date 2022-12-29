/** @type {import ('next') .NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/spring/:path*",
        destination: process.env.SPRING_URL
      }
    ]
  },
}
module.exports = nextConfig;
