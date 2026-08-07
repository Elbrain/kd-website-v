import type { Metadata } from "next";
import { business } from "@/data/business";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading, TrialCta } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Results & Reviews — KD Personal Training, Blackheath",
  description:
    "Real results from Blackheath clients — genuine Google reviews covering fat loss, strength, post-injury comebacks and midlife wins since 2016.",
  path: "/results/",
});

export default function ResultsPage() {
  const approved = testimonials.filter((t) => t.approved);
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "Results & Reviews", path: "/results/" }]} />
          <p className="eyebrow mb-4 text-gold">Proof, not promises</p>
          <h1 className="display max-w-3xl text-3xl text-paper sm:text-[2.6rem]">
            Results speak for themselves
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Since {business.foundingYear}, KD has coached Blackheath locals through fat loss,
            strength building, post-injury comebacks and the training realities of midlife — one
            client at a time.
          </p>
        </div>
      </section>

      {/* Google reviews — the genuine source of proof */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Genuine reviews" title="Read them on Google" />
            <p className="text-stone">
              Our reviews live where they can&apos;t be edited or cherry-picked: on our Google
              Business Profile. Every review is from a real client — read them all, including
              anything critical, before you decide.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={business.googleReviewsUrl} target="_blank" rel="noopener" className="btn btn-primary">
                Read our Google reviews
              </a>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-outline">
                Find us on Maps
              </a>
            </div>
          </div>
          <div className="border border-line bg-white p-8">
            <h2 className="display text-2xl text-ink">Trained with us?</h2>
            <p className="mt-3 text-stone">
              A short, honest review helps local people find a trainer they can trust — and it
              means a great deal to a small independent business. Thank you.
            </p>
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-outline mt-5"
            >
              Leave a review
            </a>
          </div>
        </div>
      </section>

      {/* On-site testimonials — only with explicit approval (none fabricated) */}
      {approved.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl border-y border-line px-4 py-16 sm:px-6">
            <SectionHeading eyebrow="Client stories" title="In their words" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {approved.map((t) => (
                <figure key={t.name + t.context} className="border border-line bg-paper p-6">
                  <blockquote className="text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm text-stone">
                    <strong className="text-ink">{t.name}</strong> — {t.context}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What results look like — honest, no fabricated numbers */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <SectionHeading eyebrow="What to expect" title="What progress looks like here" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Strength you can measure",
              c: "Loads, reps and movement quality tracked session to session — progress you can see in numbers, not vibes.",
            },
            {
              t: "Habits that survive real life",
              c: "Programmes built around your week, so consistency doesn't depend on motivation.",
            },
            {
              t: "Confidence in your body",
              c: "Moving well, without pain or apprehension — often the change clients value most.",
            },
            {
              t: "A coach who tells the truth",
              c: "If something isn't working, we change it. No generic plans, no empty promises.",
            },
          ].map((i) => (
            <div key={i.t} className="border border-line bg-white p-6">
              <h3 className="display text-2xl text-ink">{i.t}</h3>
              <p className="mt-2 text-stone">{i.c}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-stone">
          Everyone&apos;s starting point, consistency and physiology differ — we never promise
          specific outcomes or timescales. What we promise is an honest, personal programme and
          coaching that adapts until it works for you.
        </p>
      </section>

      <TrialCta title="Start your own result" />
    </>
  );
}
