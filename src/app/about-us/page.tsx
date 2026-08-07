import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business, isMoving } from "@/data/business";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/SchemaScript";
import { Reveal } from "@/components/Reveal";
import { personSchema } from "@/lib/schema";
import { SectionHeading, TrialCta } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "About Us — KD Personal Training, Blackheath",
  description:
    "A completely private studio in Blackheath, one coach, and programmes built around each client since 2016. Meet Karolina and the KD studio.",
  path: "/about-us/",
});

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={personSchema()} />

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "About", path: "/about-us/" }]} />
          <p className="eyebrow mb-4 text-gold">Est. {business.foundingYear} · Blackheath</p>
          <h1 className="display max-w-3xl text-3xl text-paper sm:text-[2.6rem]">
            Private personal training in Blackheath
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Located near Blackheath station, our fully private studio offers exclusive one-to-one
            and couples personal training — no crowds, distractions or waiting for equipment.
          </p>
          <p className="mt-4 max-w-2xl text-mist">
            Every programme is tailored to your goals, from fat loss and muscle gain to strength,
            fitness and mobility. If pain or restricted movement is holding you back, targeted
            exercise may help reduce discomfort, improve movement and support lasting relief.
          </p>
        </div>
      </section>

      {/* Your coach — first, on the cream page background (unchanged rhythm) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="relative">
            <div className="card-img relative aspect-[4/5] w-full max-w-md overflow-hidden">
              <Image
                src={images.coachPortrait.src}
                alt={images.coachPortrait.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="photo object-cover"
              />
            </div>
            <span aria-hidden className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full max-w-md border border-brass/40 lg:block" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Your coach" title={`Karolina — the K and D in KD`} />
            <p className="text-stone">
              KD Personal Training is founded and led by {business.trainer.fullName}. Since{" "}
              {business.foundingYear}, Karolina has coached Blackheath locals one client at a
              time — beginners taking a first step, professionals who want training that fits
              around work, adults over 50 rebuilding strength, women navigating perimenopause,
              and athletes returning from injury.
            </p>
            <p className="mt-4 text-stone">
              The approach is simple: fully personalised programmes, honest coaching, and a
              private space where nobody is watching. Results speak for themselves —{" "}
              <a href={business.googleReviewsUrl} target="_blank" rel="noopener" className="text-brass underline">
                read what clients say on Google
              </a>
              .
            </p>
            {/* TODO_CONFIRM_TRAINER_BIO: qualifications (Sport Rehabilitation degree,
                gymnastics background per external profiles) to be confirmed by the
                owner before being published as fact. */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/results/" className="btn btn-primary">
                Results &amp; reviews
              </Link>
              <a href={business.social.instagram} target="_blank" rel="noopener" className="btn btn-outline">
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The studio — second, on the white band (unchanged rhythm) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-y border-line px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow="The studio" title="Private, by design" />
              <p className="text-stone">
                The studio is situated in the heart of Blackheath, a stone&apos;s throw from the
                train station, and it works differently from a commercial gym: there are no
                members and no crowds. Every session is one client — or one couple — and one
                coach, with the whole floor to yourselves.
              </p>
              <p className="mt-4 text-stone">
                The space is kitted out with up-to-date equipment including an assault bike, rowing
                machine, squat rack, cable pulley system, smith machine and the Monster G9 rig —
                plus free weights, kettlebells and mobility kit. Whether you want to lose fat, gain
                muscle, get stronger or rebuild after injury, the tools are here.
              </p>
              <div className="mt-6">
                <Link href="/gym/" className="btn btn-outline">
                  Tour the gym
                </Link>
              </div>
            </Reveal>
            <Reveal delay={130}>
              <div className="card-img relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={images.wellnessStudio.src}
                  alt={images.wellnessStudio.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="photo object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Why choose us" title="Why train with KD" />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Degree-qualified personal trainer",
            "Over 10 years' experience helping Blackheath clients",
            "Fully private, well-equipped studio",
            "Personalised one-to-one and couples training",
            "Mobility, pain-management and injury-prevention support",
            "Focused coaching for safe, lasting results",
          ].map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-3 border border-line bg-white px-5 py-4 text-ink transition-colors hover:border-brass"
            >
              <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-brass" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Expansion note */}
      {isMoving() && (
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4 text-euca">The next chapter</p>
              <h2 className="display text-2xl text-ink sm:text-3xl">
                Same business. Same area. Bigger home.
              </h2>
              <p className="mt-4 text-stone">
                In {business.openingDateLabel}, KD moves to a new, larger premises in Blackheath —
                a bigger training floor, upgraded equipment, and professional treatment and
                office rooms alongside the gym. Everything clients value about the studio stays;
                everything about the space gets better.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/gym/" className="btn btn-outline">
                  See the new gym
                </Link>
                <Link href="/rooms-to-rent/" className="btn btn-euca">
                  Rooms for practitioners
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <TrialCta />
    </>
  );
}
