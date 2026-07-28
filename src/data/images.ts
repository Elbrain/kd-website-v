/**
 * Image manifest — every photo shipped with the site, with provenance.
 *
 * "studio" provenance = genuinely the KD Lee Road studio (verifiable:
 * Monster G9 rig, red/black tiles, fireplace, mirror wall). Alt text may say
 * "the KD studio" only for these.
 *
 * "owner-published" provenance = imagery published on the owner's current
 * website whose licence the owner holds; used as illustrative training
 * imagery with generic alt text — never presented as the KD premises.
 * (TODO_CONFIRM licence paperwork with the owner — docs/image-sources.md.)
 */

export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  /**
   * "concept" = owner-supplied visualisation of the future premises — always
   * captioned as a concept, never presented as a photograph of the building.
   */
  provenance: "studio" | "owner-published" | "concept";
}

export const images = {
  /** Original site's hero slider cut-out (transparent PNG) — the light hero. */
  heroCutout: {
    src: "/images/hero-girl2.png",
    width: 1309,
    height: 872,
    alt: "Woman in a red sports top performing a V-sit core exercise",
    provenance: "owner-published",
  },
  /** Owner-supplied concept visualisation of the new gym (Sept 2026). */
  newGym: {
    src: "/images/new-gym.png",
    width: 1672,
    height: 941,
    alt: "Concept visualisation of the new KD gym — dark equipment, warm accent lighting, mirror wall and dumbbell rack",
    provenance: "concept",
  },
  heroStudio: {
    src: "/images/studio-4.jpg",
    width: 1100,
    height: 743,
    alt: "Inside the KD Personal Training private studio — power rack, smith machine and red and black gym flooring",
    provenance: "studio",
  },
  studioDark: {
    src: "/images/studio-1.jpg",
    width: 988,
    height: 755,
    alt: "The KD private studio with the Monster G9 rig, assault bike and free weights",
    provenance: "studio",
  },
  studioVertical: {
    src: "/images/about-studio.jpg",
    width: 415,
    height: 500,
    alt: "The KD Personal Training studio floor with equipment ready for a session",
    provenance: "studio",
  },
  trainerBarbell: {
    src: "/images/offer.jpg",
    width: 650,
    height: 433,
    alt: "Coach with a barbell across the shoulders at the smith machine in the KD studio",
    provenance: "studio",
  },
  oneToOne: {
    src: "/images/training-1to1.jpg",
    width: 750,
    height: 576,
    alt: "Client training at the smith machine in the KD private studio",
    provenance: "studio",
  },
  couples: {
    src: "/images/info-2.jpg",
    width: 650,
    height: 500,
    alt: "Coach guiding a client through press-up technique while training together",
    provenance: "owner-published",
  },
  rehab: {
    src: "/images/info-3.jpg",
    width: 650,
    height: 500,
    alt: "Hands-on guided rehabilitation exercise on a reformer bench",
    provenance: "owner-published",
  },
  fifties: {
    src: "/images/studio-3.jpg",
    width: 1820,
    height: 1280,
    alt: "Two women in their fifties smiling mid-workout on cross-trainers",
    provenance: "owner-published",
  },
  perimenopause: {
    src: "/images/studio-2.jpg",
    width: 1280,
    height: 845,
    alt: "Woman in her forties doing core work with a dumbbell alongside her coach",
    provenance: "owner-published",
  },
  /** Owner-supplied render of a premium private gym interior — used as an
   *  illustrative studio image, not a photograph of the Lee Road studio. */
  gymVisual: {
    src: "/images/gym-visual.jpg",
    width: 1448,
    height: 1086,
    alt: "Visualisation of a private gym interior — power rack, bench and dumbbell and kettlebell racks under warm low lighting",
    provenance: "concept",
  },
  /** Trainer portrait for the About coach section. */
  coachPortrait: {
    src: "/images/coach-portrait.jpg",
    width: 1280,
    height: 853,
    alt: "KD personal trainer standing in a private studio with arms folded",
    provenance: "owner-published",
  },
  /** Bright private studio, two clients training together — illustrative. */
  wellnessStudio: {
    src: "/images/wellness-studio.jpg",
    width: 1280,
    height: 720,
    alt: "Two women doing bodyweight squats together in a bright private training studio",
    provenance: "owner-published",
  },
  /** Personal trainer taking notes during a movement & pain consultation. */
  movementConsult: {
    src: "/images/movement-consultation.jpg",
    width: 1600,
    height: 1200,
    alt: "Personal trainer taking notes on a clipboard during a movement and pain consultation with a client in a private studio",
    provenance: "owner-published",
  },
} satisfies Record<string, SiteImage>;

/** Photo per service page hero. */
export const serviceImages: Record<string, SiteImage> = {
  "1-to-1-training": images.oneToOne,
  "couples-training": images.couples,
  "sport-rehabilitation": images.rehab,
  "movement-pain-consultation": images.movementConsult,
  "fitness-for-50": images.fifties,
  "perimenopause-training": images.perimenopause,
};
