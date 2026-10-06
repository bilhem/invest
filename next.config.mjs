/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  reactStrictMode: true,
  // Districts that left the selection (Business Bay, Dubai South, Dubai Marina): their old URLs go to the district index instead of a 404.
  async redirects() {
    return [
      { source: '/quartiers/business-bay', destination: '/quartiers', permanent: true },
      { source: '/quartiers/dubai-south', destination: '/quartiers', permanent: true },
      { source: '/quartiers/dubai-marina', destination: '/quartiers', permanent: true },
    ];
  },
};
export default nextConfig;
