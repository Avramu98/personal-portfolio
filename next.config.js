/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizeCss: true,
    fontLoaders: [
      {loader: '@next/font/google', options: {subsets: ['latin']}}
    ]
  }
}

module.exports = nextConfig
