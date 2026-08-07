import type { Metadata } from "next";
import Link from "next/link";
import { business, isMoving, operationalAddress } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — KD Personal Training, Blackheath",
  description:
    "Contact KD Personal Training in Blackheath SE3 — book your free 30-minute intro session or ask about studio hire and rooms. Call 07772 923803.",
  path: "/contact-us/",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ enquiry?: string }>;
}) {
  const { enquiry } = await searchParams;
  const mode = enquiry === "rooms" ? "rooms" : "pt";
  const address = operationalAddress();

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "Contact", path: "/contact-us/" }]} />
          <p className="eyebrow mb-4 text-gold">{business.offer.headline}</p>
          <h1 className="display max-w-3xl text-3xl text-paper sm:text-[2.6rem]">Let&apos;s talk</h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Tell us a bit about your goals — or your practice, if you&apos;re here about a room —
            and we&apos;ll come back within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact details */}
          <div>
            <SectionHeading eyebrow="Reach us directly" title="Contact details" />
            <dl className="space-y-5">
              <div>
                <dt className="eyebrow text-[0.72rem] text-brass">Address</dt>
                <dd className="mt-1">
                  <address className="not-italic">{address.display}</address>
                  {isMoving() && (
                    <p className="mt-1 text-sm text-stone">
                      Moving to a larger Blackheath premises in {business.openingDateLabel} —{" "}
                      <Link href="/location/" className="underline">
                        details
                      </Link>
                      .
                    </p>
                  )}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.72rem] text-brass">Phone / WhatsApp</dt>
                <dd className="mt-1">
                  <a href={`tel:${business.phone}`} className="text-ink underline">
                    {business.phoneDisplay}
                  </a>{" "}
                  ·{" "}
                  <a href={business.whatsapp} target="_blank" rel="noopener" className="text-ink underline">
                    Message on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.72rem] text-brass">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${business.email}`} className="text-ink underline">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.72rem] text-brass">Hours</dt>
                <dd className="mt-1 text-stone">{business.openingHoursNote}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.72rem] text-brass">Connect</dt>
                <dd className="mt-1 flex gap-4">
                  <a href={business.social.facebook} target="_blank" rel="noopener" className="underline">
                    Facebook
                  </a>
                  <a href={business.social.instagram} target="_blank" rel="noopener" className="underline">
                    Instagram
                  </a>
                  <a href={business.googleReviewsUrl} target="_blank" rel="noopener" className="underline">
                    Google
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 border-l border-brass pl-4 text-sm text-stone">
              <p>
                New to KD? Every personal training journey starts with a{" "}
                <strong className="text-ink">free 30-minute introductory session</strong> — use
                the form and we&apos;ll arrange yours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <EnquiryForm mode={mode} />
          </div>
        </div>
      </section>
    </>
  );
}
