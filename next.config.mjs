const isVercel = process.env.VERCEL === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/webp"],
    // Optimised images are content-addressed by URL+width, so they can be cached for a year.
    minimumCacheTTL: 31536000,
  },

  compiler: {
    // Keep console.error / console.warn, strip debug logging from production bundles.
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      // Upgrades any stray http:// sub-resource to https:// (mixed-content safety net).
      // Only on Vercel (HTTPS) deployments so plain-http local `next start` testing keeps working.
      ...(isVercel ? [{ key: "Content-Security-Policy", value: "upgrade-insecure-requests" }] : []),
    ];

    return [
      { source: "/:path*", headers: security },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  async redirects() {
    return [
      // Domain canonicalization: redirect apex to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "astrosiddi.com",
          },
        ],
        destination: "https://www.astrosiddi.com/:path*",
        permanent: true,
      },

      // Pages-router leftovers that used to be exposed as public routes (src/pages/*.jsx).
      { source: "/BlogList", destination: "/blog", permanent: true },
      { source: "/BlogPost", destination: "/blog", permanent: true },

      // Images that were replaced by optimised WebP versions under /images (kept so old links/Google Images don't 404).
      { source: "/profileImage.jpeg", destination: "/images/profile.webp", permanent: true },
      { source: "/hero-coastal-bg.jpg", destination: "/images/hero-coastal.webp", permanent: true },
      { source: "/jupiter-planet.jpg", destination: "/images/jupiter.webp", permanent: true },
      { source: "/vedic-zodiac-wheel.jpg", destination: "/images/zodiac-wheel.webp", permanent: true },
      { source: "/sri-raghavendra-banner-en.jpg", destination: "/images/sri-raghavendra-banner-en.webp", permanent: true },
      { source: "/sri-raghavendra-banner-te.jpg", destination: "/images/sri-raghavendra-banner-te.webp", permanent: true },
      { source: "/English%20design_page-0001.jpg", destination: "/images/sri-raghavendra-banner-en.webp", permanent: true },
      { source: "/100__20260911_234216_0000_page-0001.jpg", destination: "/images/sri-raghavendra-banner-te.webp", permanent: true },
      { source: "/Untitled%20design_20260909_011322_0000_page-0001.jpg", destination: "/images/texture-poster.webp", permanent: true },
    ];
  },
};

export default nextConfig;
