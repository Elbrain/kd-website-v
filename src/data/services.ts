/** Personal training services — drives service pages, cards, nav and schema. */

export interface Service {
  slug: string; // URL path segment, preserved from the existing site
  name: string;
  shortName: string;
  card: string; // one-liner for cards/grids
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  audience: string[];
  goals?: string[];
  related: string[]; // slugs
}

export const services: Service[] = [
  {
    slug: "1-to-1-training",
    name: "1 to 1 Personal Training",
    shortName: "1 to 1 Training",
    card: "Fully personalised one-to-one coaching in a private studio — your goals, your pace, our full attention.",
    metaTitle: "1 to 1 Personal Training in Blackheath | KD Personal Training",
    metaDescription:
      "Private one-to-one personal training in Blackheath, London. Fully personalised programmes for fat loss, strength and muscle in a private studio. Free 30-minute intro session.",
    h1: "1 to 1 Personal Training in Blackheath",
    intro:
      "Our most popular service. One-to-one training gives you our full attention in a completely private studio — no crowds, no queues for equipment, no one watching. Every programme is written for you: your goals, your starting point, your lifestyle.",
    audience: [
      "People who want expert guidance and accountability",
      "Anyone who dislikes crowded commercial gyms",
      "Complete beginners — most of our clients started as one",
      "Experienced lifters who want sharper technique and programming",
    ],
    goals: [
      "Weight loss",
      "Toning",
      "Muscle gain",
      "Strength and conditioning",
      "Flexibility and mobility",
      "Posture correction",
      "Pre and post natal",
      "Post-injury rehabilitation",
    ],
    related: ["couples-training", "fitness-for-50"],
  },
  {
    slug: "couples-training",
    name: "Couples Personal Training",
    shortName: "Couples Training",
    card: "Train with your partner or a friend — shared sessions, shared motivation, at a lower cost per person.",
    metaTitle: "Couples Personal Training in Blackheath | KD Personal Training",
    metaDescription:
      "Couples personal training in Blackheath, London. Train with your partner or a friend in a private studio — individual coaching for both of you, at a lower cost per person.",
    h1: "Couples Personal Training in Blackheath",
    intro:
      "Want to train, but not on your own? Bring your partner or a friend. Couples training lets you both pursue your goals together — and at a lower cost per person than training alone. You don't need to be at the same fitness level: we run bespoke plans for each of you inside the same session.",
    audience: [
      "Couples who want a shared routine that actually sticks",
      "Friends who train better with company",
      "Mixed fitness levels — programmes are individual within the shared session",
      "Anyone who finds accountability easier as a two",
    ],
    related: ["1-to-1-training", "sport-rehabilitation"],
  },
  {
    slug: "sport-rehabilitation",
    name: "Sport Rehabilitation Training",
    shortName: "Sport Rehabilitation",
    card: "Structured post-injury training to bring you back to your best — sometimes better than before.",
    metaTitle: "Sport Rehabilitation in Blackheath | Post-Injury Training",
    metaDescription:
      "Post-injury fitness training in Blackheath, London. Individually tailored rehabilitation programmes to rebuild strength and confidence after injury. Free 30-minute intro session.",
    h1: "Sport Rehabilitation in Blackheath",
    intro:
      "Injuries happen — what matters is the route back. We build individually tailored rehabilitation programmes using specific, progressive exercises, with the aim of returning you to your optimal level of fitness — sometimes at a better level than before. We work alongside the advice of your GP, physiotherapist or consultant, never instead of it.",
    audience: [
      "People returning to exercise after an injury",
      "Anyone stuck in the gap between physiotherapy discharge and full training",
      "Athletes rebuilding towards their sport",
      "People training around a long-standing niggle",
    ],
    related: ["1-to-1-training", "fitness-for-50"],
  },
  {
    slug: "fitness-for-50",
    name: "Personal Training for Over 50s",
    shortName: "Fitness for 50+",
    card: "Strength, mobility and confidence for your 50s, 60s and beyond — every exercise adapted to you.",
    metaTitle: "Personal Training for Over 50s in Blackheath | Fitness for 50+",
    metaDescription:
      "Over-50s personal training in Blackheath, London. Build strength, protect your joints and move with confidence — private sessions adapted to your level. Free 30-minute assessment.",
    h1: "Fitness for 50+: Strength, Mobility & Confidence",
    intro:
      "As we get older, the way we train matters more than ever. The 50+ programme is designed to help you build strength, improve mobility, protect your joints and feel confident in everyday movement — without pain, pressure or intimidation. Age is not a barrier: you can start at any fitness level, and every exercise is adapted to your abilities.",
    audience: [
      "Adults in their 50s, 60s and beyond — beginners always welcome",
      "People who want to stay strong, capable and independent",
      "Anyone advised to build bone density and balance",
      "Returning exercisers who want a safe, structured restart",
    ],
    goals: [
      "Improve mobility and flexibility",
      "Strengthen joints and reduce aches",
      "Increase balance and stability",
      "Maintain a healthy weight",
      "Boost bone density",
      "Support heart health",
      "Increase daily energy",
      "Improve confidence and independence",
    ],
    related: ["perimenopause-training", "sport-rehabilitation"],
  },
  {
    slug: "perimenopause-training",
    name: "Perimenopause Personal Training",
    shortName: "Perimenopause Training",
    card: "Strength • Balance • Confidence — training designed for every stage of perimenopause.",
    metaTitle: "Perimenopause Personal Training in Blackheath | KD Personal Training",
    metaDescription:
      "Perimenopause personal training in Blackheath, London. Strength-led private coaching designed for women in midlife — feel strong, energised and in control again.",
    h1: "Perimenopause Training in Blackheath",
    intro:
      "Perimenopause usually begins between 35 and 50 and can bring unexpected changes: tiredness, weight gain around the middle, mood swings, poor sleep, or simply feeling not yourself. You are not doing anything wrong — your hormones are shifting, and the right training can completely change how you feel. This programme is designed specifically for women in midlife who want to feel strong, balanced and confident again.",
    audience: [
      "Women in their late 30s, 40s and 50s noticing their old routine no longer works",
      "Anyone told to 'just do more cardio' who suspects there's a better way",
      "Women who want a private, judgement-free space to train",
      "Beginners and returners alike",
    ],
    goals: [
      "Builds muscle and supports your metabolism",
      "The right intensity to manage stress rather than add to it",
      "Strengthens core and pelvic floor",
      "Protects bone health with progressive resistance training",
      "Supports better sleep and steadier energy",
      "Sustainable fat loss without burnout",
    ],
    related: ["fitness-for-50", "1-to-1-training"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
