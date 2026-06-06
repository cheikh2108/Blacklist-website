/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compression gzip/brotli des assets
  compress: true,

  // Headers de sécurité + cache
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache long terme pour les assets statiques (images, fonts, vidéos)
        source: "/(.*)\\.(mp4|webm|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  images: {
    // Formats modernes auto
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Supprime les logs inutiles en prod
  logging: {
    fetches: { fullUrl: false },
  },
};

export default nextConfig;
