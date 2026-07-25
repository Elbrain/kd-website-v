/**
 * Rooms-to-rent data — the single source for the rooms section.
 *
 * IMPORTANT: room specifics for the new premises are NOT yet confirmed.
 * Every room below is a representative template with confirmed: false.
 * Unconfirmed rooms render with a "specification to be confirmed" badge,
 * never show invented sizes/prices, and are excluded from structured data.
 *
 * When the owner confirms details (TODO_CONFIRM_ROOM_COUNT,
 * TODO_CONFIRM_ROOM_SPECS, TODO_CONFIRM_ROOM_PRICING), replace the templates
 * with real rooms and set confirmed: true.
 */

export type RoomType = "treatment" | "office" | "flex";
export type RoomStatus = "available" | "waitlist" | "occupied" | "tbc";

export type RentalModel =
  | "hourly"
  | "half-day"
  | "full-day"
  | "fixed-weekly"
  | "part-time-monthly"
  | "full-time"
  | "office-licence";

export const rentalModelLabels: Record<RentalModel, string> = {
  hourly: "By the hour",
  "half-day": "Half-day",
  "full-day": "Full day",
  "fixed-weekly": "Fixed weekly slot",
  "part-time-monthly": "Part-time monthly",
  "full-time": "Full-time",
  "office-licence": "Office licence",
};

/** Which models the business will actually offer — TODO_CONFIRM_RENTAL_MODELS. */
export const rentalModelsConfirmed = false;

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  status: RoomStatus;
  summary: string;
  /** null = TODO_CONFIRM_ROOM_SPECS — renders as "to be confirmed" */
  sizeSqm: number | null;
  floor: string | null;
  capacity: string | null;
  furniture: string[];
  facilities: string[];
  naturalLight: string | null;
  accessibility: string | null;
  availabilityNote: string;
  rentalModels: RentalModel[];
  /** null = TODO_CONFIRM_ROOM_PRICING — renders as "pricing on application" */
  priceNote: string | null;
  images: string[]; // filenames under /public/images/rooms/ once real photos exist
  confirmed: boolean;
}

export const rooms: Room[] = [
  {
    id: "treatment-a",
    name: "Treatment Room A",
    type: "treatment",
    status: "waitlist",
    summary:
      "A private treatment room suited to hands-on practitioners — physiotherapy, sports therapy, massage and similar disciplines.",
    sizeSqm: null,
    floor: null,
    capacity: "Practitioner + 1–2 clients",
    furniture: ["Treatment couch (planned — to be confirmed)"],
    facilities: ["Wi-Fi (planned — to be confirmed)"],
    naturalLight: null,
    accessibility: null,
    availabilityNote: "Enquire for current availability and to arrange a viewing.",
    rentalModels: ["hourly", "half-day", "fixed-weekly", "part-time-monthly", "full-time"],
    priceNote: null,
    images: [],
    confirmed: false,
  },
  {
    id: "consultation-b",
    name: "Consultation Room B",
    type: "treatment",
    status: "waitlist",
    summary:
      "A quieter consultation-style room suited to talking therapies, nutrition consultations and coaching.",
    sizeSqm: null,
    floor: null,
    capacity: "Practitioner + 1–2 clients",
    furniture: ["Desk and chairs (planned — to be confirmed)"],
    facilities: ["Wi-Fi (planned — to be confirmed)"],
    naturalLight: null,
    accessibility: null,
    availabilityNote: "Enquire for current availability and to arrange a viewing.",
    rentalModels: ["hourly", "half-day", "fixed-weekly", "part-time-monthly"],
    priceNote: null,
    images: [],
    confirmed: false,
  },
  {
    id: "office-c",
    name: "Office Room C",
    type: "office",
    status: "waitlist",
    summary:
      "A private office room for an independent professional or small business that needs a quiet, presentable base.",
    sizeSqm: null,
    floor: null,
    capacity: "1–3 desks (to be confirmed)",
    furniture: ["Desk and chairs (planned — to be confirmed)"],
    facilities: ["Wi-Fi (planned — to be confirmed)"],
    naturalLight: null,
    accessibility: null,
    availabilityNote: "Enquire for current availability and terms.",
    rentalModels: ["part-time-monthly", "full-time", "office-licence"],
    priceNote: null,
    images: [],
    confirmed: false,
  },
];

export interface Amenity {
  id: string;
  label: string;
  confirmed: boolean; // false → shown under "Planned — to be confirmed"
}

/**
 * Building amenities — ALL unconfirmed until TODO_CONFIRM_BUILDING_AMENITIES
 * resolves. The UI separates confirmed facts from planned features; nothing
 * unconfirmed is presented as fact.
 */
export const amenities: Amenity[] = [
  { id: "waiting", label: "Reception / waiting area", confirmed: false },
  { id: "wifi", label: "Wi-Fi", confirmed: false },
  { id: "utilities", label: "Utilities included", confirmed: false },
  { id: "toilets", label: "Toilets", confirmed: false },
  { id: "kitchen", label: "Kitchen access", confirmed: false },
  { id: "cleaning", label: "Cleaning of shared areas", confirmed: false },
  { id: "storage", label: "Storage options", confirmed: false },
  { id: "climate", label: "Heating / air conditioning", confirmed: false },
  { id: "security", label: "Secure building access", confirmed: false },
  { id: "parking", label: "Parking", confirmed: false },
  { id: "transport", label: "Close to public transport (Blackheath)", confirmed: true },
  { id: "signage", label: "Signage opportunities", confirmed: false },
  { id: "mailing", label: "Business mailing address", confirmed: false },
];

export interface RoomFaq {
  q: string;
  a: string | null; // null → rendered in the "ask us" list, not as an answered FAQ
}

export const roomFaqs: RoomFaq[] = [
  {
    q: "Which professionals can rent a room?",
    a: "Rooms are aimed at independent practitioners — for example physiotherapists, sports and massage therapists, osteopaths, nutritionists, counsellors and coaches — and at selected professional office users. Suitability is assessed individually for every applicant and depends on the nature of your business, so please tell us what you do when you enquire.",
  },
  {
    q: "Are rooms available by the hour?",
    a: "We offer flexible arrangements, from regular weekly slots through to part-time and full-time use. Which rental models suit which room — and pricing — are confirmed directly when you enquire.",
  },
  {
    q: "How do I arrange a viewing?",
    a: "Use the enquiry form on this page and tick 'I'd like to view' — we'll come back within one working day with available viewing slots.",
  },
  {
    q: "Can I use the address for my business?",
    a: null,
  },
  { q: "Are utilities and Wi-Fi included?", a: null },
  { q: "Is there a waiting area for my clients?", a: null },
  { q: "Can I leave equipment in the room?", a: null },
  { q: "Is there parking at the building?", a: null },
  { q: "Can I place signage in the building?", a: null },
  { q: "Are the rooms furnished?", a: null },
  { q: "What licence or agreement is required?", a: null },
  { q: "Can clients access the building outside gym hours?", a: null },
];

/** Flip to false to noindex the rooms section (see docs/seo-strategy.md §7). */
export const roomsIndexable = true;
