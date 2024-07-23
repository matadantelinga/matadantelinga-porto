/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_BASE: process.env.URL_BASE,
    URL_API: process.env.URL_API,
    URL_MEDIA: process.env.URL_MEDIA,
    KEY_API: process.env.KEY_API,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL

  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "superadmin.planetdekor.id",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
