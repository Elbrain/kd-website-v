import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { SectionHeading, TrialCta } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "The Private Gym in Blackheath | KD Personal Training",
  description:
    "Inside KD's private Blackheath gym — power rack, smith machine, cable system, assault bike and a full free-weight range, with professional treatment and office rooms alongside. One client at a time.",
  path: "/gym/",
});

const equipment = [
  "Force USA Monster G9 (power rack, smith machine, cable pulley, chin-up, dip, leg press, low row)",
  "Squat rack and Olympic bars",
  "Full dumbbell and kettlebell range",
  "Assault bike",
  "Rowing machine",
  "Cable pulley system",
  "Smith machine",
  "Free weights, mats and mobility kit",
];

export default function GymPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src={images.newGym.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="grain absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "The Gym", path: "/gym/" }]} />
          <p className="eyebrow eyebrow-rule rise mb-3 text-red-bright" style={{ ["--rise-delay" as string]: "60ms" }}>
            Private · fully equipped · yours for the hour
          </p>
          <h1 className="display rise max-w-3xl text-5xl text-white sm:text-7xl" style={{ ["--rise-delay" as string]: "160ms" }}>
            A private gym in the heart of Blackheath
          </h1>
          <p className="rise mt-5 max-w-2xl text-lg text-white/85" style={{ ["--rise-delay" as string]: "270ms" }}>
            No members. No crowds. When you train at KD, the whole gym is yours — one client,
            one coach, and everything you need within arm&apos;s reach.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-4" style={{ ["--rise-delay" as string]: "380ms" }}>
            <Link href="/contact-us/" className="btn btn-primary">
              Book a free intro session
            </Link>
            <Link href="/personal-training/" className="btn btn-outline-light">
              Training programmes
            </Link>
          </div>
        </div>
      </section>

      {/* The space */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="The space" title="Built for serious, private training" />
            <p className="text-stone">
              The gym is in Blackheath, minutes from the station — a dedicated private training
              floor with natural light, a professional finish and none of the noise of a
              commercial gym. Sessions run one client (or one couple) at a time, so every rack,
              bar and metre of floor is yours.
            </p>
            <ul className="mt-5 space-y-2.5">
              {equipment.map((e) => (
                <li key={e} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-0.5 w-4 shrink-0 bg-red" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div className="card-img relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={images.newGym.src}
                  alt={images.newGym.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="display absolute -bottom-5 left-4 bg-red px-4 pb-1.5 pt-2.5 text-2xl text-white">
                Est. {business.foundingYear}
              </p>
              <p className="absolute right-3 top-3 bg-ink/70 px-2.5 py-1 text-xs text-white/90">
                Interior visualisation
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Training in action */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-y border-line px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="In session" title="One coach. One client. Full focus." />
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-img relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={images.oneToOne.src}
                  alt={images.oneToOne.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="photo object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-center">
              <p className="text-stone">
                Every session is coached one-to-one: technique corrected in real time, loads
                matched to how you&apos;re moving today, and a programme that adapts week on
                week. Beginners, returners and experienced lifters all train here — the room
                simply removes everything that gets in the way.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/1-to-1-training/" className="btn btn-outline">
                  1 to 1 training
                </Link>
                <Link href="/gym-rent/" className="btn btn-outline">
                  Studio hire for PTs
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rooms cross-link */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <Reveal>
              <p className="eyebrow eyebrow-rule mb-2 text-euca">Also in the building</p>
              <h2 className="display text-4xl text-ink sm:text-5xl">
                Treatment &amp; office rooms for professionals
              </h2>
              <p className="mt-3 max-w-2xl text-stone">
                Private, presentable rooms for practitioners and independent professionals —
                operated alongside the gym, with the same standards.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/rooms-to-rent/" className="btn btn-euca shrink-0">
                Rooms to rent
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <TrialCta title="Train here" />
    </>
  );
}
