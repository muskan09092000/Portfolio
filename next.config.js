/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure our site works on GitHub Pages or any static host
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig 