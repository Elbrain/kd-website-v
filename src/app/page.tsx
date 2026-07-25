import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { images, serviceImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { BlueprintPanel, SectionHeading, TrialCta } from "@/components/ui";
import { HeroSlider } from "@/components/HeroSlider";
import { Reveal } from "@/components/Reveal";
import { ServicesShowcase } from "@/components/ServicesShowcase";

export const metadata: Metadata = pageMetadata({
  title: "Blackheath Personal Training | Private Fitness Studio in Blackheath, London",
  description:
    "KD Personal Training is an established private gym in Blackheath, London SE3 — 1-to-1 coaching, couples training, over-50s and perimenopause programmes, plus professional treatment and office rooms. Free 30-minute intro session.",
  path: "/",
});

const stats = [
  { n: "2018", label: "coaching in Blackheath since" },
  { n: "1:1", label: "one client at a time — always" },
  { n: "5", label: "specialist programmes" },
  { n: "30′", label: "free intro session, every client" },
];

const highlights = [
  { label: "Private studio", href: "/gym/" },
  { label: "1-to-1 coaching", href: "/1-to-1-training/" },
  { label: "Couples training", href: "/couples-training/" },
  { label: "Over-50s strength", href: "/fitness-for-50/" },
  { label: "Perimenopause training", href: "/perimenopause-training/" },
  { label: "Post-injury comebacks", href: "/sport-rehabilitation/" },
  { label: "Blackheath village", href: "/location/" },
  { label: "Free intro session", href: "/contact-us/" },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO — full-bleed noir ============ */}
      <HeroSlider />

      {/* ============ Highlights — quiet index strip ============ */}
      <nav aria-label="Highlights" className="border-b border-line bg-paper">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1.5 px-4 py-4 sm:px-6">
          {highlights.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[0.7rem] uppercase tracking-[0.22em] text-stone transition-colors hover:text-brass"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ============ Stats — serif numerals on cream ============ */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="border-ink/10 px-6 py-6 odd:border-r lg:border-r lg:last:border-r-0"
            >
              <p className="num-serif select-none">{s.n}</p>
              <p className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ The gym — noir editorial ============ */}
      <section className="grain relative overflow-hidden bg-ink">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow eyebrow-rule mb-5 text-gold">The gym</p>
              <h2 className="display text-4xl text-paper sm:text-5xl lg:text-[3.4rem]">
                A private gym built around one client at a time
              </h2>
              <p className="mt-6 text-lg text-mist">
                No members, no crowds, no queues for equipment. When you train at KD, the whole
                floor is yours: a fully kitted-out private gym in Blackheath, with professional
                treatment and office rooms alongside it.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/gym/" className="btn btn-primary">
                  See the gym
                </Link>
                <Link href="/contact-us/" className="btn btn-outline-light">
                  Book a free session
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className="card-img relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={images.heroStudio.src}
                    alt={images.heroStudio.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="photo object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className="absolute -bottom-3 -right-3 -z-[1] h-full w-full border border-gold/30"
                />
                <p className="absolute -bottom-4 left-5 border border-gold/40 bg-ink px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                  Est. {business.foundingYear}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Services — editorial index ============ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <SectionHeading eyebrow="Our services" title="Built to bring the best results" />
          <Reveal>
            <ServicesShowcase
              items={[
                ...services.map((s) => ({
                  href: `/${s.slug}/`,
                  title: s.shortName,
                  tag: s.card,
                  img: { src: serviceImages[s.slug].src, alt: serviceImages[s.slug].alt },
                })),
                {
                  href: "/gym-rent/",
                  title: "Studio Hire for PTs",
                  tag: "Pay-as-you-go private studio for independent trainers — keep 100% of what you earn.",
                  img: { src: images.studioDark.src, alt: images.studioDark.alt },
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ============ Why KD — espresso panel ============ */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow="Why KD" title="What makes KD different?" tone="dark" />
              <p className="text-mist">
                The studio is in the heart of Blackheath, a stone&apos;s throw from the station,
                and it&apos;s completely private: one client (or two), one coach, and a fully
                kitted-out floor — assault bike, rower, squat rack, cable pulley system, smith
                machine and the Monster G9 rig.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-paper">
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
              <div className="mt-9">
                <Link href="/about-us/" className="btn btn-outline-light">
                  About the studio
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
                    className="photo object-cover"
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

      {/* ============ Rooms teaser — calm sand ============ */}
      <section className="relative overflow-hidden bg-sand">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="order-last lg:order-first">
              <div className="relative">
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
              <p className="eyebrow eyebrow-rule mb-5 text-euca">
                For practitioners &amp; professionals
              </p>
              <h2 className="display text-4xl text-ink sm:text-5xl">
                Looking for a professional treatment or office room?
              </h2>
              <p className="mt-6 text-lg text-stone">
                Alongside the gym, our building offers private treatment, therapy and office
                rooms to rent — a clean, professional base in Blackheath for independent
                practitioners and selected professional users.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/rooms-to-rent/" className="btn btn-euca">
                  Rooms to rent
                </Link>
                <Link href="/rooms-to-rent/treatment-rooms/" className="btn btn-outline">
                  Treatment rooms
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Trainer — ivory portrait ============ */}
      <section className="relative overflow-hidden bg-paper">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
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
                <p className="absolute -bottom-4 left-5 border border-brass/40 bg-paper px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-brass">
                  Est. {business.foundingYear}
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <SectionHeading eyebrow="Your coach" title={`Meet ${business.trainer.name}`} />
              <p className="text-lg text-stone">
                KD is {business.trainer.fullName} — {business.trainer.role.toLowerCase()} and the
                reason clients stay for years, not weeks. Since {business.foundingYear} Karolina
                has coached Blackheath locals through fat loss, strength building, post-injury
                comebacks and the training realities of midlife — always one client at a time, in
                a completely private studio.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about-us/" className="btn btn-outline">
                  Karolina&apos;s story
                </Link>
                <Link href="/results/" className="btn btn-primary">
                  Results &amp; reviews
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Social proof — noir band ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20">
          <Reveal>
            <p aria-hidden className="text-xl tracking-[0.35em] text-gold">
              ★★★★★
            </p>
            <h2 className="display mt-4 text-4xl text-paper sm:text-5xl">
              Rated by real clients on Google
            </h2>
            <p className="mt-4 text-lg text-mist">
              Don&apos;t take our word for it — read genuine reviews from Blackheath clients.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-outline-light shrink-0"
            >
              Read our Google reviews
            </a>
          </Reveal>
        </div>
      </section>

      <TrialCta />
    </>
  );
}
