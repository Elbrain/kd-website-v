import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { HeroSlider } from "@/components/HeroSlider";
import { Reveal } from "@/components/Reveal";
import { BlueprintPanel, SectionHeading } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Blackheath Personal Training | Private Fitness Studio in Blackheath, London",
  description:
    "KD Personal Training is an established private gym in Blackheath, London SE3 — 1-to-1 coaching, couples training, over-50s and perimenopause programmes, plus professional treatment and office rooms. Free 30-minute intro session.",
  path: "/",
});

/* Thin-line icons for the feature strip — 24px grid, hairline strokes. */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function IconCalendar() {
  return (
    <svg {...iconProps} aria-hidden className="h-6 w-6">
      <rect x="3.5" y="5" width="17" height="15.5" rx="1" />
      <path d="M3.5 9.5h17M8 2.75V6.5M16 2.75V6.5" />
    </svg>
  );
}
function IconPerson() {
  return (
    <svg {...iconProps} aria-hidden className="h-6 w-6">
      <circle cx="12" cy="7.5" r="3.25" />
      <path d="M5.25 20.5c.7-3.9 3.4-6 6.75-6s6.05 2.1 6.75 6" />
    </svg>
  );
}
function IconDumbbell() {
  return (
    <svg {...iconProps} aria-hidden className="h-6 w-6">
      <path d="M8.75 12h6.5" />
      <rect x="4.75" y="8.75" width="2.5" height="6.5" rx="0.5" />
      <rect x="16.75" y="8.75" width="2.5" height="6.5" rx="0.5" />
      <path d="M2.5 10.5v3M21.5 10.5v3" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg {...iconProps} aria-hidden className="h-6 w-6">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

const stats = [
  { n: "2018", label: "coaching in Blackheath since", icon: <IconCalendar /> },
  { n: "1:1", label: "one client at a time — always", icon: <IconPerson /> },
  { n: "5", label: "specialist programmes", icon: <IconDumbbell /> },
  { n: "30′", label: "free intro session, every client", icon: <IconClock /> },
];

const miniServices = [
  { slug: "1-to-1-training", name: "1 to 1 Training", img: images.oneToOne },
  { slug: "couples-training", name: "Couples Training", img: images.couples },
  { slug: "perimenopause-training", name: "Perimenopause Training", img: images.perimenopause },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO — quiet noir ============ */}
      <HeroSlider />

      {/* ============ Feature strip — icons on cream, hairline dividers ============ */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-9 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:gap-0 lg:py-11">
          <ul className="grid flex-1 grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-ink/10">
            {stats.map((s) => (
              <li
                key={s.label}
                className="flex flex-col items-center px-3 text-center text-ink sm:px-6"
              >
                {s.icon}
                <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.22em]">
                  {s.n}
                </p>
                <p className="mt-1 max-w-[11rem] text-[0.8rem] leading-snug text-stone">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
          <div className="border-ink/10 text-center lg:ml-10 lg:max-w-xs lg:border-l lg:pl-10">
            <p aria-hidden className="tracking-[0.35em] text-ink">
              ★★★★★
            </p>
            <p className="quote-display mt-2 text-lg text-ink">
              Rated by real clients on Google.
            </p>
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-block border-b border-ink/30 pb-0.5 text-[0.68rem] uppercase tracking-[0.22em] text-stone transition-colors hover:border-brass hover:text-brass"
            >
              Read the reviews
            </a>
          </div>
        </div>
      </section>

      {/* ============ Editorial band — full-bleed mosaic: photo · about · services · consultation ============
          One shared height, photo and cream panel flush to the band edges,
          text cells vertically centred — reads as a single composed strip. */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1600px] items-stretch lg:min-h-[480px] lg:grid-cols-[0.95fr_1.15fr_1fr_1.05fr] xl:grid-cols-[0.85fr_1.1fr_0.95fr_1fr_0.5fr]">
          {/* Studio photo — flush, no frame */}
          <Reveal className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-0">
            <Image
              src={images.studioDark.src}
              alt={images.studioDark.alt}
              fill
              sizes="(min-width: 1024px) 24vw, 100vw"
              className="photo-noir object-cover"
            />
          </Reveal>

          {/* About the gym */}
          <Reveal
            delay={90}
            className="flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
          >
            <p className="eyebrow eyebrow-rule mb-4 text-gold">The gym</p>
            <h2 className="display text-2xl leading-snug text-paper">
              A private gym built around one client at a time
            </h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-mist">
              No members, no crowds, no queues for equipment. When you train at KD, the whole
              floor is yours: a fully kitted-out private gym in Blackheath, with professional
              treatment and office rooms alongside it.
            </p>
            <div className="mt-6">
              <Link href="/gym/" className="btn btn-outline-light">
                See the gym
              </Link>
            </div>
          </Reveal>

          {/* Services mini-index */}
          <Reveal
            delay={180}
            className="flex flex-col justify-center px-6 pb-10 sm:px-8 lg:py-14 lg:pl-2 lg:pr-8"
          >
            <p className="eyebrow eyebrow-rule mb-5 text-gold">Our services</p>
            <div className="grid grid-cols-3 gap-2.5">
              {miniServices.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/`} className="group block">
                  <span className="relative block aspect-[4/5] overflow-hidden">
                    <Image
                      src={s.img.src}
                      alt={s.img.alt}
                      fill
                      sizes="(min-width: 1024px) 8vw, 30vw"
                      className="photo-noir object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-2.5 block text-[0.66rem] font-medium uppercase leading-[1.5] tracking-[0.14em] text-paper/80 transition-colors group-hover:text-gold">
                    {s.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/personal-training/"
                className="inline-flex items-center gap-2 border-b border-paper/30 pb-0.5 text-[0.66rem] uppercase tracking-[0.2em] text-paper/80 transition-colors hover:border-gold hover:text-gold"
              >
                View all services <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          {/* Consultation — cream inset card framed by the dark band */}
          <Reveal delay={270} className="flex items-center px-6 pb-10 sm:px-8 lg:p-6">
            <div className="w-full bg-cream px-7 py-9 sm:px-8">
              <p className="eyebrow mb-4 text-brass">{business.offer.headline}</p>
              <h2 className="display text-2xl text-ink">First timers are welcome</h2>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-stone">
                {business.offer.detail}
              </p>
              <div className="mt-7">
                <Link href="/contact-us/" className="btn btn-ink">
                  Book your free session
                </Link>
              </div>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-block border-b border-ink/30 pb-0.5 text-[0.66rem] uppercase tracking-[0.2em] text-stone transition-colors hover:border-brass hover:text-brass"
              >
                WhatsApp us
              </a>
            </div>
          </Reveal>

          {/* Closing photo — bookends the band on wide screens */}
          <Reveal delay={330} className="relative hidden xl:block">
            <Image
              src={images.studioVertical.src}
              alt={images.studioVertical.alt}
              fill
              sizes="12vw"
              className="photo-noir object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ Rooms teaser — calm sand ============ */}
      <section className="relative overflow-hidden bg-sand">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-last lg:order-first">
              <div className="relative max-w-lg">
                <BlueprintPanel
                  label="Architectural plan sketch of a professional room — our rooms will be photographed on completion"
                  caption="Plan sketch — real photography after fit-out"
                  className="relative aspect-[4/3] w-full border border-euca/20"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-3 -left-3 -z-[1] h-full w-full border border-euca/30"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow eyebrow-rule mb-4 text-euca">
                For practitioners &amp; professionals
              </p>
              <h2 className="display text-2xl text-ink sm:text-3xl">
                Looking for a professional treatment or office room?
              </h2>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-stone">
                Alongside the gym, our building offers private treatment, therapy and office
                rooms to rent — a clean, professional base in Blackheath for independent
                practitioners and selected professional users.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <Link href="/rooms-to-rent/" className="btn btn-euca">
                  Rooms to rent
                </Link>
                <Link
                  href="/rooms-to-rent/treatment-rooms/"
                  className="border-b border-ink/30 pb-0.5 text-[0.66rem] uppercase tracking-[0.2em] text-stone transition-colors hover:border-euca hover:text-euca"
                >
                  Treatment rooms
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Why KD — espresso, compact ============ */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow="Why KD" title="What makes KD different?" tone="dark" />
              <p className="text-[0.92rem] leading-relaxed text-mist">
                The studio is in the heart of Blackheath, a stone&apos;s throw from the station,
                and it&apos;s completely private: one client (or two), one coach, and a fully
                kitted-out floor — assault bike, rower, squat rack, cable pulley system, smith
                machine and the Monster G9 rig.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.92rem] text-paper">
                {[
                  "Weight loss",
                  "Toning",
                  "Muscle gain",
                  "Strength & conditioning",
                  "Flexibility & mobility",
                  "Posture correction",
                  "Pre & post natal",
                  "Post-injury rehabilitation",
                ].map((g) => (
                  <li key={g} className="flex items-center gap-2.5">
                    <span aria-hidden className="h-px w-3.5 shrink-0 bg-gold" />
                    {g}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link href="/about-us/" className="btn btn-outline-light">
                  About the studio
                </Link>
                <Link
                  href="/results/"
                  className="border-b border-paper/30 pb-0.5 text-[0.66rem] uppercase tracking-[0.2em] text-paper/80 transition-colors hover:border-gold hover:text-gold"
                >
                  Results &amp; reviews
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className="card-img relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={images.oneToOne.src}
                    alt={images.oneToOne.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="photo-noir object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className="absolute -bottom-3 -left-3 -z-[1] h-full w-full border border-gold/30"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Trainer — ivory portrait ============ */}
      <section className="relative overflow-hidden bg-paper">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="relative max-w-xl">
                <div className="card-img relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={images.trainerBarbell.src}
                    alt={images.trainerBarbell.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="photo object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className="absolute -bottom-3 -right-3 -z-[1] h-full w-full border border-brass/30"
                />
                <p className="absolute -bottom-3.5 left-5 border border-brass/40 bg-paper px-3.5 py-1.5 text-[0.62rem] uppercase tracking-[0.25em] text-brass">
                  Est. {business.foundingYear}
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <SectionHeading eyebrow="Your coach" title={`Meet ${business.trainer.name}`} />
              <p className="text-[0.95rem] leading-relaxed text-stone">
                KD is {business.trainer.fullName} — {business.trainer.role.toLowerCase()} and the
                reason clients stay for years, not weeks. Since {business.foundingYear} Karolina
                has coached Blackheath locals through fat loss, strength building, post-injury
                comebacks and the training realities of midlife — always one client at a time, in
                a completely private studio.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <Link href="/results/" className="btn btn-primary">
                  Results &amp; reviews
                </Link>
                <Link
                  href="/about-us/"
                  className="border-b border-ink/30 pb-0.5 text-[0.66rem] uppercase tracking-[0.2em] text-stone transition-colors hover:border-brass hover:text-brass"
                >
                  Karolina&apos;s story
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
