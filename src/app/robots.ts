import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Open to all crawlers, with the major AI/search agents explicitly welcomed —
 * being visible in AI assistants and generative search is part of the SEO
 * strategy (see /llms.txt for the structured business summary they consume).
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "cohere-ai",
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
