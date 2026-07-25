import Link from "next/link";
import Image from "next/image";
import { getService, services } from "@/data/services";
import { serviceFaqs } from "@/data/faqs";
import { pricePlans, currency } from "@/data/pricing";
import { business, isMoving } from "@/data/business";
import { serviceImages } from "@/data/images";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/SchemaScript";
import { Reveal } from "@/components/Reveal";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { FaqList, SectionHeading, TrialCta } from "@/components/ui";

/**
 * Shared layout for the five personal-training service pages.
 * Each page keeps its established URL; content, metadata and FAQs are unique
 * per service (docs/seo-strategy.md §2).
 */
export function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  const img = serviceImages[slug];
  const faqs = serviceFaqs[slug] ?? [];
  const plan = pricePlans.find((p) => p.serviceSlug === slug);
  const related = service.related
    .map((r) => services.find((s) => s.slug === r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/${service.slug}/`,
          }),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />

      {/* Header */}
      <section className="kd-watermark bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6">
          <Breadcrumbs
            tone="dark"
            crumbs={[
              { name: "Personal Training", path: "/personal-training/" },
              { name: service.shortName, path: `/${service.slug}/` },
            ]}
          />
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p
                className="eyebrow eyebrow-rule rise mb-5 text-gold"
                style={{ ["--rise-delay" as string]: "60ms" }}
              >
                Personal training · Blackheath
              </p>
              <h1
                className="display rise text-4xl text-paper sm:text-5xl lg:text-[3.4rem]"
                style={{ ["--rise-delay" as string]: "150ms" }}
              >
                {service.h1}
              </h1>
              <p
                className="rise mt-6 text-lg text-mist"
                style={{ ["--rise-delay" as string]: "260ms" }}
              >
                {service.intro}
              </p>
              <div
                className="rise mt-9 flex flex-wrap gap-4"
                style={{ ["--rise-delay" as string]: "370ms" }}
              >
                <Link href="/contact-us/" className="btn btn-primary">
                  Book a free intro session
                </Link>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline-light"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
            {img && (
              <div className="rise hidden lg:block" style={{ ["--rise-delay" as string]: "300ms" }}>
                <div className="relative">
                  <div className="card-img relative aspect-[4/3] w-full overflow-hidden border border-paper/10">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority
                      sizes="45vw"
                      className="photo object-cover"
                    />
                  </div>
                  <span
                    aria-hidden
                    className="absolute -bottom-3 -right-3 -z-[1] h-full w-full border border-gold/30"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Who it's for" title="Is this you?" />
            <ul className="space-y-3">
              {service.audience.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-brass" />
                  <span className="text-ink-soft">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          {service.goals && (
            <Reveal delay={120}>
              <SectionHeading eyebrow="What we work on" title="Goals we train for" />
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {service.goals.map((g) => (
                  <li
                    key={g}
                    className="border border-line bg-white px-4 py-3 text-ink transition-colors hover:border-brass"
                  >
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-y border-line px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="How it works" title="From first session to results" />
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Free 30-minute intro",
                c: "We talk through your goals and history, check how you move, and show you the studio. No pressure, no obligation.",
              },
              {
                n: "02",
                t: "Your personal programme",
                c: "A fully personalised plan built around your goals, starting point and lifestyle — reviewed and adjusted as you progress.",
              },
              {
                n: "03",
                t: "Private coached sessions",
                c: "Every session is coached one-to-one in a private studio — technique, progression and accountability, with no crowds and no queues.",
              },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 110}>
                <p aria-hidden className="num-serif">
                  {s.n}
                </p>
                <h3 className="display mt-4 text-2xl text-ink">{s.t}</h3>
                <p className="mt-2 text-stone">{s.c}</p>
              </Reveal>
            ))}
          </div>
          {isMoving() && (
            <p className="mt-10 border-l border-brass pl-4 text-stone">
              From {business.openingDateLabel}, sessions move to our new, larger Blackheath gym —
              more space, more equipment and even greater privacy.{" "}
              <Link href="/gym/" className="text-brass underline">
                See what&apos;s coming
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* Pricing */}
      {plan && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Pricing" title={`${service.shortName} prices`} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="h-full">
              <div className="card-lift flex h-full flex-col border border-ink bg-ink p-6 text-paper">
                <p className="eyebrow text-gold">Pay as you go</p>
                <p className="display mt-3 text-4xl text-paper">
                  {currency}
                  {plan.single}
                  <span className="ml-1.5 text-lg text-mist">/ session</span>
                </p>
                <p className="mt-2 text-sm text-mist">{plan.unitLabel} · no commitment</p>
              </div>
            </Reveal>
            {plan.blocks.map((b, i) => {
              const perSession = Math.round(b.price / b.sessions);
              const saving = plan.single * b.sessions - b.price;
              const best = i === plan.blocks.length - 1;
              return (
                <Reveal key={b.sessions} delay={(i + 1) * 90} className="h-full">
                  <div
                    className={`card-lift relative flex h-full flex-col border p-6 ${
                      best ? "border-brass bg-white" : "border-line bg-white"
                    }`}
                  >
                    {best && (
                      <p className="eyebrow absolute -top-3 left-4 bg-brass px-2.5 py-1 text-[0.62rem] text-paper">
                        Best value
                      </p>
                    )}
                    <p className="eyebrow text-brass">Block of {b.sessions} sessions</p>
                    <p className="display mt-3 text-4xl text-ink">
                      {currency}
                      {perSession}
                      <span className="ml-1.5 text-lg text-stone">/ session</span>
                    </p>
                    <p className="mt-2 text-sm text-stone">
                      {currency}
                      {b.price} total for {b.sessions} sessions
                    </p>
                    {saving > 0 ? (
                      <p className="mt-auto pt-3">
                        <span className="inline-block bg-brass/10 px-2 py-1 text-sm font-medium text-brass">
                          Save {currency}
                          {saving} vs pay as you go
                        </span>
                      </p>
                    ) : (
                      <p className="mt-auto pt-3 text-sm text-stone">Same rate, easier planning</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
          {plan.note && <p className="mt-4 text-stone">{plan.note}</p>}
          <div className="mt-6">
            <Link href="/pricing-plans/" className="btn btn-outline">
              Full price list
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <FaqList faqs={faqs} />
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <SectionHeading eyebrow="Related" title="You might also be looking for" />
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((r, i) => {
              const rImg = serviceImages[r.slug];
              return (
                <Reveal key={r.slug} delay={i * 110}>
                  <Link
                    href={`/${r.slug}/`}
                    className="card-lift group flex h-full border border-line bg-white"
                  >
                    {rImg && (
                      <div className="card-img relative hidden w-36 shrink-0 sm:block">
                        <Image src={rImg.src} alt="" fill sizes="9rem" className="photo object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="display text-2xl text-ink transition-colors group-hover:text-brass">
                        {r.shortName} <span className="card-arrow text-brass">→</span>
                      </h3>
                      <p className="mt-2 text-stone">{r.card}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <TrialCta />
    </>
  );
}
