import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration
};

const withPWA = nextPWA({
  dest: "public",
});

export default withPWA(nextConfig);
