const tailwind = require('tailwind')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['image.tmdb.org', 'rb.gy']
  }
}

module.exports = nextConfig