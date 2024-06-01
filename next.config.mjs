import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration
};

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA(nextConfig);
