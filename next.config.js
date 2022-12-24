/** @type {import ('next') .NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/spring/:path*",
        destination: "https://joeri-dev.herokuapp.com/api/:path*"
      }
    ]
  },
}
module.exports = nextConfig;
