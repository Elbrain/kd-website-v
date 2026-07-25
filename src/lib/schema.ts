/**
 * JSON-LD builders. All structured data is generated from src/data — nothing
 * hand-written in pages. Rules (docs/seo-strategy.md §6):
 *  - only verified facts enter schema; TODO_CONFIRM values are omitted
 *  - no Article markup on static pages; Article on blog posts only
 *  - no Hotel/Lodging/Product/AggregateRating markup anywhere
 *  - FAQPage only for FAQs visibly rendered on that page
 */
import { business, operationalAddress } from "@/data/business";
import { SITE_URL } from "@/lib/seo";
import type { Post } from "@/data/posts";

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;

function postalAddress() {
  const a = operationalAddress();
  return {
    "@type": "PostalAddress",
    streetAddress: a.line1,
    addressLocality: a.locality,
    addressRegion: a.region,
    postalCode: a.postcode,
    addressCountry: a.country,
  };
}

/** ExerciseGym (LocalBusiness) — emitted once, in the root layout. */
export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    email: business.email,
    telephone: business.phone,
    foundingDate: String(business.foundingYear),
    description:
      "KD Personal Training is a private personal training studio in Blackheath, London, offering 1-to-1 personal training, couples training, sport rehabilitation, fitness for over 50s and perimenopause training. Free 30-minute introductory session for new clients.",
    image: `${SITE_URL}/og-default.png`,
    logo: `${SITE_URL}/logo-kd.png`,
    address: postalAddress(),
    geo:
      business.moveStatus === "NEW_LOCATION_OPEN"
        ? undefined // TODO_CONFIRM_NEW_COORDS — omitted until confirmed
        : {
            "@type": "GeoCoordinates",
            latitude: business.geo.lat,
            longitude: business.geo.lng,
          },
    hasMap: business.googleMapsUrl,
    priceRange: "££",
    currenciesAccepted: "GBP",
    areaServed: business.serviceAreas.map((name) => ({
      "@type": "Place",
      name: `${name}, London`,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "en",
    },
    sameAs: [
      business.social.facebook,
      business.social.instagram,
      business.social.linkedin,
    ],
    // openingHoursSpecification intentionally omitted: hours unconfirmed
    // (TODO_CONFIRM_OPENING_HOURS). Never fabricate.
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType ?? opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Blackheath, London" },
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/** Only call with FAQs that are visibly rendered on the same page. */
export function faqSchema(faqs: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post: Post): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en-GB",
    author: { "@type": "Organization", "@id": ORG_ID, name: business.name },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE_URL}/${post.slug}/`,
  };
}

/** Trainer — only confirmed facts (bio details gated on bioConfirmed). */
export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: business.trainer.fullName,
    jobTitle: business.trainer.role,
    worksFor: { "@id": ORG_ID },
    sameAs: [business.social.linkedin],
  };
}
