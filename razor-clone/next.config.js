const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  i18n,
  images: {
            domains: [
              "127.0.0.1",
              "localhost"
            ],
            
          },
  typescript: {
        ignoreBuildErrors: true,
         },
   eslint: {
           ignoreDuringBuilds: true,
          },    
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
  register: true,
});

module.exports = withPWA(nextConfig);