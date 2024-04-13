// import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: "export",
  generateEtags: true,
  poweredByHeader: false,
  experimental: {
    windowHistorySupport: true,
  },
};
export default nextConfig;
// export default withNextVideo(nextConfig);
