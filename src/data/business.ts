/**
 * Central business configuration — the single source of truth for every
 * business fact rendered anywhere on the site (copy, footer, contact page,
 * structured data, map links, Open Graph text).
 *
 * DO NOT hardcode addresses, phone numbers, dates or the move status in
 * components or page copy. Import from here.
 *
 * Placeholders follow the TODO_CONFIRM_* convention from /docs — they render
 * as clearly-labelled "to be confirmed" UI and are excluded from structured
 * data until replaced with verified values.
 */

export type MoveStatus = "CURRENT_LOCATION" | "MOVING_SOON" | "NEW_LOCATION_OPEN";

export interface Address {
  line1: string;
  locality: string;
  region: string;
  postcode: string;
  country: string;
  /** Human-readable single line */
  display: string;
}

export const TODO = {
  NEW_ADDRESS: "TODO_CONFIRM_NEW_ADDRESS",
  OPENING_DATE: "TODO_CONFIRM_OPENING_DATE",
  OPENING_HOURS: "TODO_CONFIRM_OPENING_HOURS",
  NEW_COORDS: "TODO_CONFIRM_NEW_COORDS",
} as const;

export const business = {
  name: "KD Personal Training",
  legalName: "KD Personal Training LTD",
  domain: "https://kdpersonaltraining.co.uk",
  foundingYear: 2016,
  tagline: "Private personal training in Blackheath, London",

  /**
   * Move state — drives the announcement banner, the location page,
   * contact page, footer and all structured data.
   *
   * CURRENT_LOCATION → no move messaging
   * MOVING_SOON      → currentAddress is operational; new premises announced
   * NEW_LOCATION_OPEN→ new premises becomes the NAP everywhere
   *
   * July 2026, client decision: present the gym as simply established —
   * no relocation narrative anywhere on the site.
   * November 2026: client confirmed the final address, 35 Montpelier Vale —
   * published as the one and only NAP (no mention of the old premises).
   */
  moveStatus: "CURRENT_LOCATION" as MoveStatus,

  /** Verified operating address — the published NAP. Keep identical to the Google Business Profile. */
  currentAddress: {
    line1: "35 Montpelier Vale",
    locality: "Blackheath",
    region: "London",
    postcode: "SE3 0TJ",
    country: "GB",
    display: "35 Montpelier Vale, Blackheath, London SE3 0TJ",
  } satisfies Address,

  /**
   * Future address — unconfirmed. While any field contains a TODO_ value the
   * new address is never rendered as an operating address and never enters
   * structured data.
   */
  futureAddress: {
    line1: "TODO_CONFIRM_NEW_ADDRESS",
    locality: "Blackheath",
    region: "London",
    postcode: "TODO_CONFIRM_NEW_ADDRESS",
    country: "GB",
    display: "New premises in Blackheath — full address to be announced",
  } satisfies Address,

  /** Expected opening — month is stated by the owner; exact date TBC. */
  openingDateLabel: "September 2026",
  openingDateConfirmed: false, // flip when TODO_CONFIRM_OPENING_DATE resolves

  phone: "+447772923803",
  phoneDisplay: "07772 923803",
  whatsapp: "https://wa.me/447772923803",
  email: "info@kdpersonaltraining.co.uk",

  /** Coordinates of the 35 Montpelier Vale building (OpenStreetMap building footprint). */
  geo: { lat: 51.4673443, lng: 0.0081179 },

  /** Google Business Profile by its place ID (cid) — stays valid when the profile's address changes. */
  googleMapsUrl: "https://www.google.com/maps?cid=8324179159954874247",
  /** Turn-by-turn directions to the street address itself. */
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=35+Montpelier+Vale%2C+Blackheath%2C+London+SE3+0TJ",
  /** The reviews panel of the Google Business Profile (resolved by the place ID in `1s…`). */
  googleReviewsUrl:
    "https://www.google.com/maps/place/KD+PERSONAL+TRAINING/@51.4673443,0.0081179,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x73856cd7b3d1df87!8m2!3d51.4673443!4d0.0081179!9m1!1b1",

  /** ~180 m from the station entrance as the crow flies — about a 3-minute walk. */
  nearestStation: "Blackheath station (3-minute walk)",

  /**
   * Genuine service area — where clients actually travel from (adjacent
   * SE London areas). Used in LocalBusiness schema and in natural copy on
   * the location page. NOT used to generate doorway pages (see
   * docs/seo-strategy.md — thin location pages are deliberately avoided).
   */
  serviceAreas: [
    "Blackheath",
    "Lewisham",
    "Greenwich",
    "Lee",
    "Kidbrooke",
    "Hither Green",
    "Charlton",
    "Eltham",
    "Catford",
    "Brockley",
    "Deptford",
    "New Cross",
    "Woolwich",
    "North Greenwich",
    "Grove Park",
    "Forest Hill",
    "Sydenham",
    "Canary Wharf",
    "Dulwich",
  ],
  parkingInfo: "On-street parking in the streets around Blackheath Village",
  accessibilityInfo: "TODO_CONFIRM_ACCESSIBILITY (floor / step-free access at 35 Montpelier Vale)",

  /** Never published on the old site — confirm before rendering as fact. */
  openingHours: null as null | { day: string; opens: string; closes: string }[],
  openingHoursNote: "Sessions by appointment — contact us for current availability.",

  social: {
    facebook: "https://www.facebook.com/people/kd_personal_training_/100063583114677/",
    instagram: "https://www.instagram.com/kd_personal_training_/",
    linkedin: "https://www.linkedin.com/in/karolina-desiatnikova-06373112a/",
  },

  trainer: {
    name: "Karolina",
    fullName: "Karolina Desiatnikova",
    role: "Founder & Head Coach",
    /**
     * External profiles reference a Sport Rehabilitation degree and an
     * ex-gymnast background — TODO_CONFIRM_TRAINER_BIO before stating
     * qualifications as fact. Until then the copy stays qualification-neutral.
     */
    bioConfirmed: false,
  },

  /** The strongest existing conversion asset — preserved from the old site. */
  offer: {
    headline: "Your first 30 minutes are free",
    detail:
      "Book a free 30-minute introductory session — we'll talk through your goals, check how you move and show you the studio. No pressure, no obligation.",
  },
} as const;

/** The address to publish as the operational NAP for the current move state. */
export function operationalAddress(): Address {
  return business.moveStatus === "NEW_LOCATION_OPEN"
    ? business.futureAddress
    : business.currentAddress;
}

export function isMoving(): boolean {
  return business.moveStatus === "MOVING_SOON";
}

/** True once the future address is a real, confirmed address. */
export function futureAddressConfirmed(): boolean {
  return !Object.values(business.futureAddress).some(
    (v) => typeof v === "string" && v.startsWith("TODO_CONFIRM"),
  );
}
