import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { roomsIndexable } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "/", priority: 1.0 },
    { path: "/personal-training/", priority: 0.9 },
    { path: "/gym/", priority: 0.8 },
    { path: "/gym-rent/", priority: 0.7 },
    { path: "/pricing-plans/", priority: 0.8 },
    { path: "/results/", priority: 0.6 },
    { path: "/about-us/", priority: 0.7 },
    { path: "/location/", priority: 0.6 },
    { path: "/contact-us/", priority: 0.8 },
    { path: "/blog/", priority: 0.6 },
    { path: "/privacy-policy/", priority: 0.2 },
    { path: "/terms/", priority: 0.2 },
    { path: "/cookie-policy/", priority: 0.2 },
  ];

  const roomsPaths = roomsIndexable
    ? [
        { path: "/rooms-to-rent/", priority: 0.9 },
        { path: "/rooms-to-rent/treatment-rooms/", priority: 0.8 },
        { path: "/rooms-to-rent/office-rooms/", priority: 0.8 },
      ]
    : [];

  return [
    ...staticPaths.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...roomsPaths.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/${s.slug}/`,
      lastModified: now,
      priority: 0.9,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/${p.slug}/`,
      lastModified: new Date(p.dateModified),
      priority: 0.5,
    })),
  ];
}
