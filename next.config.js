/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a.storyblok.com"],
  },
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
};

module.exports = nextConfig;
