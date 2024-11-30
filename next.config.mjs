/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ljwwnxkazjghekxhjvic.supabase.co',
      },
    ],
  },
};

export default nextConfig;
