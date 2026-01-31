/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'yaoi.tech Registry',
    description: ':3.',
    icon: '/img/logo.svg',
    listUrl: 'https://snowflake6413.github.io/someregistry/',
    contactUrl: 'https://parakeet.yaoi.tech/dino.mp4',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
