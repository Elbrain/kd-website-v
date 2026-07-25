import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { images, serviceImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { BlueprintPanel, SectionHeading, TrialCta } from "@/components/ui";
import { HeroSlider } from "@/components/HeroSlider";
import { Marquee } from "@/components/Marquee";
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

export default function HomePage() {
  return (
    <>
      {/* ============ HERO — poster slider ============ */}
      <HeroSlider />

      {/* ============ Ticker — clickable ============ */}
      <Marquee
        items={[
          { label: "Private studio", href: "/gym/" },
          { label: "1-to-1 coaching", href: "/1-to-1-training/" },
          { label: "Couples training", href: "/couples-training/" },
          { label: "Over-50s strength", href: "/fitness-for-50/" },
          { label: "Perimenopause training", href: "/perimenopause-training/" },
          { label: "Post-injury comebacks", href: "/sport-rehabilitation/" },
          { label: "Blackheath village", href: "/location/" },
          { label: "Free intro session", href: "/contact-us/" },
        ]}
      />

      {/* ============ Stats — solid poster numerals ============ */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="border-line px-6 py-6 odd:border-r lg:border-r lg:last:border-r-0"
            >
              <p className="ghost-num select-none">{s.n}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wider text-ink">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ The gym — red poster section ============ */}
      <section className="grain relative overflow-hidden bg-red">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow eyebrow-rule mb-3 text-white/90">The gym</p>
              <h2 className="display text-5xl text-white sm:text-7xl">
                A private gym built around one client at a time
              </h2>
              <p className="mt-5 text-lg text-white/90">
                No members, no crowds, no queues for equipment. When you train at KD, the whole
                floor is yours: a fully kitted-out private gym in Blackheath, with professional
                treatment and office rooms alongside it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/gym/" className="btn btn-white">
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
                    src={images.newGym.src}
                    alt={images.newGym.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="display absolute -bottom-5 left-4 bg-ink px-4 pb-1.5 pt-2.5 text-2xl text-white">
                  Est. {business.foundingYear}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Services — interactive editorial index ============ */}
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

      {/* ============ Why KD — dark poster ============ */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow="Why KD" title="What makes KD different?" tone="dark" />
              <p className="text-mist">
                The studio is in the heart of Blackheath, a stone&apos;s throw from the station,
                and it&apos;s completely private: one client (or two), one coach, and a fully
                kitted-out floor — assault bike, rower, squat rack, cable pulley system, smith
                machine and the Monster G9 rig.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2.5 text-white">
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
                    <span aria-hidden className="h-0.5 w-3 shrink-0 bg-red-bright" />
                    {g}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about-us/" className="btn btn-outline-light">
                  About the studio
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="card-img relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={images.oneToOne.src}
                  alt={images.oneToOne.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="photo object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Rooms teaser — calm poster, euca disc ============ */}
      <section className="relative overflow-hidden bg-sand">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-last lg:order-first">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-euca/20 sm:h-56 sm:w-56"
                />
                <BlueprintPanel
                  label="Architectural plan sketch of a professional room — our rooms will be photographed on completion"
                  caption="Plan sketch — real photography after fit-out"
                  className="relative aspect-[4/3] w-full border border-euca/20"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow eyebrow-rule mb-3 text-euca">
                For practitioners &amp; professionals
              </p>
              <h2 className="display text-5xl text-ink sm:text-6xl">
                Looking for a professional treatment or office room?
              </h2>
              <p className="mt-5 text-lg text-stone">
                Alongside the gym, our building offers private treatment, therapy and office
                rooms to rent — a clean, professional base in Blackheath for independent
                practitioners and selected professional users.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
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

      {/* ============ Trainer — poster portrait ============ */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="relative max-w-xl">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 hidden h-56 w-56 rounded-full bg-red/10 lg:block"
                />
                <div className="card-img relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={images.trainerBarbell.src}
                    alt={images.trainerBarbell.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="photo object-cover"
                  />
                </div>
                <p className="display absolute -bottom-5 left-4 bg-ink px-4 pb-1.5 pt-2.5 text-2xl text-white">
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
              <div className="mt-7 flex flex-wrap gap-4">
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

      {/* ============ Social proof — bold strip ============ */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
          <Reveal>
            <p className="display text-3xl text-red">★★★★★</p>
            <h2 className="display mt-2 text-5xl text-ink sm:text-6xl">
              Rated by real clients on Google
            </h2>
            <p className="mt-3 text-lg text-stone">
              Don&apos;t take our word for it — read genuine reviews from Blackheath clients.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-outline shrink-0 text-xl"
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
