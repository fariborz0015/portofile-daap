import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */

const withPwa = nextPWA({
  dest: "public",
  register: true,
  scope: "/",
  disable: false,
});
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default withPwa(nextConfig);
