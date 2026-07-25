import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { gymRentFaqs } from "@/data/faqs";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/SchemaScript";
import { Reveal } from "@/components/Reveal";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { FaqList, SectionHeading } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Private Gym Hire for Personal Trainers in Blackheath | Studio Rental",
  description:
    "Rent a private, fully equipped personal training studio in Blackheath, London by the hour. No contracts, pay as you go, keep 100% of what you earn — ideal for new and growing PTs.",
  path: "/gym-rent/",
});

const points = [
  {
    t: "Pay-as-you-go flexibility",
    c: "No monthly membership. No contracts. No risk. Book hourly slots whenever you need them — freedom without high overheads.",
  },
  {
    t: "Private, professional space",
    c: "A modern, clean, fully equipped personal training studio. Perfect for 1-to-1 sessions, pairs or small groups.",
  },
  {
    t: "Keep 100% of what you earn",
    c: "You charge your clients your normal rate and pay only a small hourly fee for the space.",
  },
  {
    t: "Ideal for new & growing PTs",
    c: "Building a client base or going full-time? This is the low-risk setup: professional premises without the lease.",
  },
];

export default function GymRentPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Private Gym Hire for Personal Trainers",
            serviceType: "Gym studio rental",
            description:
              "Hourly, pay-as-you-go rental of a private personal training studio in Blackheath, London for independent personal trainers.",
            path: "/gym-rent/",
          }),
          faqSchema(gymRentFaqs),
        ]}
      />

      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src={images.heroStudio.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="photo object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
          <div className="grain absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "Studio Hire for PTs", path: "/gym-rent/" }]} />
          <p className="eyebrow eyebrow-rule mb-3 text-red-bright">For independent trainers</p>
          <h1 className="display max-w-3xl text-5xl text-white sm:text-7xl">
            Private gym hire in Blackheath
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Whether you&apos;re newly qualified or an experienced coach, our private Blackheath
            studio gives you a premium, fully equipped space to train your clients with complete
            flexibility. No long-term contracts — book by the hour and pay only for the time you
            use.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact-us/" className="btn btn-primary">
              Check availability
            </Link>
            <a href={business.whatsapp} target="_blank" rel="noopener" className="btn btn-outline-light">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="How it works" title="Your space. Your business." />
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 110}>
              <div className="card-lift h-full border border-line bg-white p-7">
                <h2 className="display text-2xl text-ink">{p.t}</h2>
                <p className="mt-2 text-stone">{p.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-y border-line px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="card-img relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={images.studioDark.src}
                  alt={images.studioDark.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="photo object-cover"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading eyebrow="The space" title="A professional training environment" />
              <p className="text-stone">
                A clean, well-equipped studio suitable for individual workouts and coached
                sessions alike: squat rack, Monster G9 rig, cable system, assault bike, rower,
                full free-weight range. Two minutes from Blackheath station — easy for you, easy
                for your clients.
              </p>
              <p className="mt-4 text-stone">
                Are you a therapist or practitioner rather than a PT? Our building also offers dedicated{" "}
                <Link href="/rooms-to-rent/" className="text-red underline">
                  treatment and office rooms to rent
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Studio hire questions" />
        <FaqList faqs={gymRentFaqs} />
        <div className="mt-8">
          <Link href="/contact-us/" className="btn btn-primary">
            Enquire about studio hire
          </Link>
        </div>
      </section>
    </>
  );
}
