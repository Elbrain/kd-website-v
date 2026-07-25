import Link from "next/link";
import type { Metadata } from "next";
import { currency, pricePlans, pricingNotes } from "@/data/pricing";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading, TrialCta } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Pricing Plans — Personal Training Prices in Blackheath",
  description:
    "Clear personal training prices at KD Personal Training, Blackheath: 1-to-1 from £70 per session on a block, couples from £45 each. Free 30-minute introductory session for every new client.",
  path: "/pricing-plans/",
});

export default function PricingPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "Pricing", path: "/pricing-plans/" }]} />
          <p className="eyebrow mb-4 text-gold">Transparent pricing</p>
          <h1 className="display max-w-3xl text-4xl text-paper sm:text-6xl">Pricing plans</h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Simple session pricing with block discounts — and a free 30-minute introductory
            session before you commit to anything.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Price list" title="Find the plan that fits" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricePlans.map((p) => (
            <div key={p.serviceSlug} className="flex flex-col border border-line bg-white">
              <div className="border-b border-line bg-ink p-6">
                <h2 className="display text-2xl text-paper">{p.serviceName}</h2>
                <p className="mt-2">
                  <span className="display text-4xl text-gold">
                    {currency}
                    {p.single}
                  </span>{" "}
                  <span className="text-mist">single · {p.unitLabel}</span>
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <table className="w-full text-left">
                  <caption className="sr-only">{p.serviceName} block pricing</caption>
                  <thead>
                    <tr className="text-sm text-stone">
                      <th scope="col" className="pb-2 font-medium">
                        Block
                      </th>
                      <th scope="col" className="pb-2 font-medium">
                        Price
                      </th>
                      <th scope="col" className="pb-2 font-medium">
                        Per session
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.blocks.map((b) => (
                      <tr key={b.sessions} className="border-t border-line">
                        <td className="py-2.5">{b.sessions} sessions</td>
                        <td className="py-2.5 font-medium text-ink">
                          {currency}
                          {b.price}
                        </td>
                        <td className="py-2.5 text-stone">
                          {currency}
                          {Math.round(b.price / b.sessions)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {p.note && <p className="mt-3 text-sm text-stone">{p.note}</p>}
                <div className="mt-auto pt-5">
                  <Link href={`/${p.serviceSlug}/`} className="btn btn-outline w-full">
                    About {p.serviceName}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl space-y-2">
          {pricingNotes.map((n) => (
            <p key={n} className="flex gap-3 text-stone">
              <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-brass" />
              {n}
            </p>
          ))}
        </div>
      </section>

      <TrialCta title="Try before you decide" />
    </>
  );
}
