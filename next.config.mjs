/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Liberamos o domínio dos avatares do GitHub para usar com <next/image>.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
