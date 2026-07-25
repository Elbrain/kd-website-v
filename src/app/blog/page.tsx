import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrialCta } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Blog — Training Advice from KD Personal Training",
  description:
    "Practical training and health advice from KD Personal Training in Blackheath — perimenopause training, habits, motivation and getting better at fitness.",
  path: "/blog/",
});

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "Blog", path: "/blog/" }]} />
          <p className="eyebrow mb-4 text-gold">Useful information</p>
          <h1 className="display max-w-3xl text-4xl text-paper sm:text-6xl">The KD blog</h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Practical advice on training, habits and health — written from the studio floor, not
            a content farm.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((p) => (
            <article key={p.slug} className="flex flex-col border border-line bg-white p-7">
              <p className="text-sm text-stone">
                <time dateTime={p.datePublished}>{dateFmt.format(new Date(p.datePublished))}</time>{" "}
                · {p.readingMinutes} min read
              </p>
              <h2 className="display mt-2 text-2xl text-ink">
                <Link href={`/${p.slug}/`} className="transition-colors hover:text-brass">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-stone">{p.excerpt}</p>
              <Link href={`/${p.slug}/`} className="eyebrow mt-5 text-[0.72rem] text-brass">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <TrialCta />
    </>
  );
}
