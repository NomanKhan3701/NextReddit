/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.reddit.com', 'b.thumbs.redditmedia.com', 'a.thumbs.redditmedia.com', 'preview.redd.it', 'external-preview.redd.it'],
  }
}

module.exports = nextConfig
