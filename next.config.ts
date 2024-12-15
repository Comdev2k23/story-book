import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const withVideos = require('next-videos')

module.exports = withVideos()

export default nextConfig;
