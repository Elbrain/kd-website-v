/**
 * Published pricing — carried over from the live site (pricing page,
 * last modified April 2026). Re-verify with the owner before launch and
 * again before the new premises opens (TODO_CONFIRM_PRICING_AT_NEW_SITE).
 */

export interface PricePlan {
  serviceSlug: string;
  serviceName: string;
  unitLabel: string; // "per session"
  single: number;
  blocks: { sessions: number; price: number }[];
  note?: string;
}

export const currency = "£";

export const pricePlans: PricePlan[] = [
  {
    serviceSlug: "1-to-1-training",
    serviceName: "1 to 1 Training",
    unitLabel: "per session",
    single: 80,
    blocks: [
      { sessions: 5, price: 400 },
      { sessions: 8, price: 600 },
      { sessions: 10, price: 700 },
    ],
  },
  {
    serviceSlug: "couples-training",
    serviceName: "Couples Training",
    unitLabel: "per session (for two)",
    single: 100,
    blocks: [
      { sessions: 5, price: 500 },
      { sessions: 8, price: 760 },
      { sessions: 10, price: 900 },
    ],
    note: "Price covers both of you — from £45 each per session on a 10-session block.",
  },
  {
    serviceSlug: "sport-rehabilitation",
    serviceName: "Sport Rehabilitation",
    unitLabel: "per session",
    single: 80,
    blocks: [
      { sessions: 5, price: 400 },
      { sessions: 8, price: 600 },
      { sessions: 10, price: 700 },
    ],
  },
  {
    serviceSlug: "fitness-for-50",
    serviceName: "Fitness for 50+",
    unitLabel: "per session",
    single: 80,
    blocks: [
      { sessions: 5, price: 400 },
      { sessions: 8, price: 600 },
      { sessions: 10, price: 700 },
    ],
  },
  {
    serviceSlug: "perimenopause-training",
    serviceName: "Perimenopause Training",
    unitLabel: "per session",
    single: 80,
    blocks: [
      { sessions: 5, price: 400 },
      { sessions: 8, price: 600 },
      { sessions: 10, price: 700 },
    ],
  },
];

/** Details never published on the old site — rendered as "ask us" not fact. */
export const pricingNotes = [
  "Every new client starts with a free 30-minute introductory session.",
  "Session length, block validity and payment options: contact us and we'll talk you through it.", // TODO_CONFIRM_SESSION_TERMS
];
