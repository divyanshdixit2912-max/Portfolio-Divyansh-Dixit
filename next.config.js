/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "placehold.co"],
    // Disable Next.js built-in image optimization so the site can be exported
    // as static HTML and deployed to platforms like Cloudflare Pages.
    unoptimized: true,
  },
}

module.exports = nextConfig
