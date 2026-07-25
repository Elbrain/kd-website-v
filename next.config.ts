import type { NextConfig } from "next";

/**
 * Redirects implement docs/redirect-map.md exactly:
 *  §1 content move (mis-slugged perimenopause article)
 *  §2 WordPress archives → /blog/
 *  §3 legacy redirects preserved from the current site
 * All permanent (301).
 */
const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // §1 — content move
      {
        source: "/how-to-increase-mental-toughness-and-stay-strong-2",
        destination: "/perimenopause-training-guide/",
        permanent: true,
      },
      // §2 — WordPress archives
      { source: "/category/:slug*", destination: "/blog/", permanent: true },
      { source: "/tag/:slug*", destination: "/blog/", permanent: true },
      {
        source: "/:year(\\d{4})/:month(\\d{2})",
        destination: "/blog/",
        permanent: true,
      },
      { source: "/feed", destination: "/blog/", permanent: true },
      { source: "/comments/feed", destination: "/blog/", permanent: true },
      // §3 — preserved legacy redirects
      { source: "/couple-training", destination: "/couples-training/", permanent: true },
      { source: "/author/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
