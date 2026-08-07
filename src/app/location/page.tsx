import Link from "next/link";
import type { Metadata } from "next";
import { business, futureAddressConfirmed, isMoving } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import { images } from "@/data/images";
import { SchemaScript } from "@/components/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { FaqList, SectionHeading, Tbc, TrialCta } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Find Us in Blackheath Village, London SE3 | KD",
  description:
    "KD Personal Training, 1st Floor, 5 Lee Road, Blackheath SE3 9RQ — two minutes from the station. Serving Greenwich, Lewisham, Lee and beyond.",
  path: "/location/",
});

const locationFaqs = [
  {
    q: "Where exactly is the studio?",
    a: "We're on the first floor of 5 Lee Road, Blackheath, London SE3 9RQ — in the heart of Blackheath village, about a two-minute walk from Blackheath station (trains to London Bridge, Charing Cross and Cannon Street).",
  },
  {
    q: "Which areas do you cover?",
    a: "Most clients are local to Blackheath, and many travel from the surrounding areas — Lewisham, Greenwich, Lee, Kidbrooke, Hither Green and Charlton are all a short journey by train, bus or car.",
  },
  {
    q: "Is there parking near the studio?",
    a: "There is on-street parking in the streets around Blackheath village; most drivers find a space within a few minutes' walk. The station is the easiest option at peak times.",
  },
  {
    q: "Can I see the gym before committing?",
    a: "Of course — every new client starts with a free 30-minute introductory session, which includes a look around the gym, a chat about your goals and a gentle movement check. No pressure, no obligation.",
  },
];

export default function LocationPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: "Find Us", path: "/location/" }]} />
          <p className="eyebrow mb-4 text-gold">Blackheath, London SE3</p>
          <h1 className="display max-w-3xl text-3xl text-paper sm:text-[2.6rem]">Find us</h1>
          {isMoving() && (
            <p className="mt-5 max-w-2xl text-lg text-mist">
              One business, one area — and during our expansion, two addresses to know about.
              Here&apos;s exactly what happens where.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Current location */}
          <div className="border border-line bg-white p-8">
            <p className="eyebrow text-brass">
              {isMoving() ? "Now — where your sessions happen" : "Our studio"}
            </p>
            <h2 className="display mt-2 text-2xl text-ink">The studio</h2>
            <address className="mt-4 not-italic text-ink-soft">
              {business.currentAddress.display}
            </address>
            <ul className="mt-5 space-y-2.5 text-stone">
              <li className="flex gap-3">
                <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-brass" />
                {business.nearestStation} — trains to London Bridge, Charing Cross and Cannon Street
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-brass" />
                In the heart of Blackheath village — cafés and the heath on the doorstep
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-brass" />
                First-floor studio; on-street parking nearby
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-primary">
                Directions
              </a>
              <a href={`tel:${business.phone}`} className="btn btn-outline">
                Call {business.phoneDisplay}
              </a>
            </div>
            {isMoving() && (
              <p className="mt-5 text-sm text-stone">
                All current appointments take place here until the move completes.
              </p>
            )}
          </div>

          {/* Future location */}
          {isMoving() && (
            <div className="border border-line bg-sand p-8">
              <p className="eyebrow text-euca">From {business.openingDateLabel} — our new home</p>
              <h2 className="display mt-2 text-2xl text-ink">The new Blackheath premises</h2>
              <p className="mt-4 text-ink-soft">
                {futureAddressConfirmed() ? (
                  business.futureAddress.display
                ) : (
                  <>
                    Blackheath, London — <Tbc>full address announced closer to opening</Tbc>
                  </>
                )}
              </p>
              <ul className="mt-5 space-y-2.5 text-stone">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-euca" />A larger
                  private gym with upgraded equipment
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-euca" />
                  Professional treatment and office rooms to rent
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-euca" />
                  Same local area — staying in Blackheath
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/gym/" className="btn btn-outline">
                  Preview the gym
                </Link>
                <Link href="/rooms-to-rent/" className="btn btn-euca">
                  Rooms to rent
                </Link>
              </div>
              <p className="mt-5 text-sm text-stone">
                Want to know the moment we open?{" "}
                <Link href="/contact-us/" className="underline">
                  Register your interest
                </Link>
                .
              </p>
            </div>
          )}
        </div>

        {/* Areas we cover — genuine reach, no doorway pages */}
        <div className="mt-14">
          <SectionHeading eyebrow="Areas we cover" title="Training clients across south-east London" />
          <p className="max-w-3xl text-stone">
            The studio sits in the heart of Blackheath village, and our clients travel from
            right across south-east London — everywhere within five or six miles of the
            village. With Blackheath station two minutes away and good bus links, most people
            reach us within a quarter of an hour — before work, after the school run or on a
            lunch break.
          </p>
          <ul className="mt-6 flex max-w-4xl flex-wrap gap-2.5">
            {business.serviceAreas.map((area) => (
              <li
                key={area}
                className="border border-line bg-white px-3.5 py-1.5 text-sm text-ink-soft"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="mt-10">
          <SectionHeading eyebrow="Map" title="Getting here" />
          <div className="overflow-hidden border border-line">
            <iframe
              title="Map showing KD Personal Training at 5 Lee Road, Blackheath"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "KD Personal Training, 5 Lee Road, Blackheath, London SE3 9RQ",
              )}&output=embed`}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-sm text-stone">
            Travelling from further afield? Blackheath is 15–20 minutes by train from central
            London; buses stop throughout the village.
          </p>
        </div>

        {/* Local FAQ */}
        <div className="mt-14">
          <SchemaScript schema={faqSchema(locationFaqs)} />
          <SectionHeading eyebrow="FAQ" title="Finding us — common questions" />
          <FaqList faqs={locationFaqs} />
        </div>
      </section>

      <div className="relative h-44 w-full overflow-hidden sm:h-64">
        <Image
          src={images.heroStudio.src}
          alt={images.heroStudio.alt}
          fill
          sizes="100vw"
          className="photo object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/30" />
      </div>
      <TrialCta />
    </>
  );
}
