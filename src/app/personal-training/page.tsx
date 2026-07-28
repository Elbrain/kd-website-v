import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { business } from "@/data/business";
import { serviceImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/SchemaScript";
import { Reveal } from "@/components/Reveal";
import { serviceSchema } from "@/lib/schema";
import { SectionHeading, TrialCta } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Personal Training in Blackheath | Private 1-to-1 Coaching",
  description:
    "Private personal training in Blackheath, London — 1-to-1 coaching, couples training, sport rehabilitation, over-50s and perimenopause programmes in a completely private studio. Free 30-minute intro session.",
  path: "/personal-training/",
});

export default function PersonalTrainingHub() {
  return (
    <>
      <SchemaScript
        schema={serviceSchema({
          name: "Personal Training",
          description:
            "Private personal training in Blackheath, London, in a completely private studio.",
          path: "/personal-training/",
        })}
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "Personal Training", path: "/personal-training/" }]} />
          <p className="eyebrow mb-4 text-gold">Established {business.foundingYear} · Blackheath</p>
          <h1 className="display max-w-3xl text-3xl text-paper sm:text-[2.6rem]">
            Personal training in Blackheath
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Every KD programme is delivered one-to-one (or two-to-one) in a completely private
            studio — no crowds, no queues, no judgement. Choose the service that fits where you
            are right now; every one of them starts with a free 30-minute introductory session.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Choose your path" title="Ways to train with KD" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const img = serviceImages[s.slug];
            return (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/${s.slug}/`}
                  className="card-lift group flex h-full flex-col border border-line bg-white"
                >
                  <div className="card-img relative aspect-[16/10]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="photo object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <h2 className="display absolute bottom-3 left-4 right-4 text-2xl text-paper">
                      {s.shortName}
                    </h2>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-stone">{s.card}</p>
                    <span className="eyebrow mt-4 text-[0.72rem] text-brass">
                      Explore <span className="card-arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
          <div className="flex flex-col justify-center border border-dashed border-line bg-paper p-7">
            <h2 className="display text-2xl text-ink">Not sure which fits?</h2>
            <p className="mt-3 text-stone">
              Book the free intro session and we&apos;ll recommend the right starting point — no
              obligation either way.
            </p>
            <Link href="/contact-us/" className="btn btn-primary mt-5 self-start">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <TrialCta />
    </>
  );
}
