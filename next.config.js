/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['northplugins.com', 'store.northplugins.com'],
  },
}

module.exports = nextConfig
