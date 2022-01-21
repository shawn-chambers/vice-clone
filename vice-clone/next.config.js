/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});

// module.exports = nextConfig
