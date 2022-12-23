/** @type {import ('next') .NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/spring/:path*",
        destination: "http://192.168.68.126:8080/api/:path*"
      }
    ]
  },
}
module.exports = nextConfig;
