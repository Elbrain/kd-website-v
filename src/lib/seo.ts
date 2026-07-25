import type { Metadata } from "next";
import { business } from "@/data/business";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || business.domain;

interface PageMeta {
  title: string;
  description: string;
  path: string; // with leading + trailing slash, e.g. "/1-to-1-training/"
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function pageMetadata({
  title,
  description,
  path,
  ogImage = "/og-default.png",
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    // absolute: page titles are complete — don't apply the layout template
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_GB",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: business.name }],
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
