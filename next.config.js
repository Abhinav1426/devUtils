/** @type {import('next').NextConfig} */
const nextConfig = {reactStrictMode: true,
    async redirects() {
      return [
        {
          source: "/",
          destination: "/utilities",
          permanent: true,
        },
      ];
    }}

module.exports = nextConfig
