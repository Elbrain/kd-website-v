import Link from "next/link";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { amenities, roomFaqs, rooms, roomsIndexable } from "@/data/rooms";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/SchemaScript";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { BlueprintPanel, FaqList, SectionHeading, Tbc } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = pageMetadata({
  title: "Treatment & Professional Rooms to Rent in Blackheath | KD",
  description:
    "Private treatment, therapy and office rooms to rent in Blackheath, London — inside a modern fitness and professional building anchored by KD Personal Training. Enquire about availability and arrange a viewing.",
  path: "/rooms-to-rent/",
  noindex: !roomsIndexable,
});

const idealTenants = [
  "Physiotherapists & sports therapists",
  "Massage therapists",
  "Osteopaths & chiropractors",
  "Nutritionists & dietitians",
  "Counsellors & psychotherapists",
  "Coaches & consultants",
  "Beauty & wellness practitioners (room-spec dependent)",
  "Small professional businesses & independent professionals",
];

export default function RoomsToRentPage() {
  const answered = roomFaqs.filter((f): f is { q: string; a: string } => f.a !== null);
  const askUs = roomFaqs.filter((f) => f.a === null);
  const confirmedAmenities = amenities.filter((a) => a.confirmed);
  const plannedAmenities = amenities.filter((a) => !a.confirmed);

  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Treatment and Professional Rooms to Rent",
            serviceType: "Room rental",
            description:
              "Private treatment, therapy and office rooms to rent in Blackheath, London for independent practitioners and professional users.",
            path: "/rooms-to-rent/",
          }),
          faqSchema(answered),
        ]}
      />

      {/* Hero — calm, architectural mood */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs crumbs={[{ name: "Rooms to Rent", path: "/rooms-to-rent/" }]} />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-2 text-euca">For practitioners &amp; professionals · Blackheath</p>
              <h1 className="display max-w-2xl text-5xl text-ink sm:text-6xl">
                Treatment &amp; professional rooms to rent in Blackheath
              </h1>
              <p className="mt-5 text-lg text-stone">
                Our building brings together a private gym and a selection of clean,
                private professional rooms — for independent practitioners and selected office
                users who want a credible base in Blackheath, moments from the station.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a href="#rooms-enquiry" className="btn btn-euca">
                  Check availability / book a viewing
                </a>
                <Link href="/rooms-to-rent/treatment-rooms/" className="btn btn-outline">
                  Treatment rooms
                </Link>
                <Link href="/rooms-to-rent/office-rooms/" className="btn btn-outline">
                  Office rooms
                </Link>
              </div>
            </div>
            <Reveal delay={140}>
              <BlueprintPanel
                label="Architectural plan sketch of a professional room — our rooms will be photographed on completion"
                caption="Plan sketch — real photography after fit-out"
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* The building */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The building" title="A professional home, anchored by KD" />
            <p className="text-stone">
              The rooms sit inside a modern fitness and professional services building anchored by
              KD Personal Training — an established Blackheath business since{" "}
              {business.foundingYear}. That means a cared-for, professional environment with an
              active, health-minded audience passing through, and the option for aligned
              practitioners to build natural working relationships alongside the gym.
            </p>
            <p className="mt-4 text-stone">
              Location: Blackheath, London — full address provided when you enquire.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Private, lockable rooms — not shared floors or hot desks",
                "Clean, modern finish throughout",
                "Privacy appropriate to client-facing professional work",
                "Convenient Blackheath location near the station",
                "Alongside — but operated separately from — the private gym",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-0.5 w-4 shrink-0 bg-euca" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Who they suit" title="Ideal tenants" />
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {idealTenants.map((t) => (
                <li key={t} className="border border-line bg-white px-4 py-3">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l-2 border-euca pl-4 text-sm text-stone">
              Suitability is subject to approval and depends on the nature of your business.
              We&apos;re building a considered, complementary community of professionals rather
              than filling rooms — tell us what you do and we&apos;ll have an honest
              conversation. Being based here puts you alongside an aligned client base, though we
              never promise referrals or guaranteed clients.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-y border-line px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="The rooms" title="Room types" />
          <p className="-mt-4 mb-8 max-w-3xl text-stone">
            Final room count, sizes and specifications are being confirmed as fit-out progresses —
            the listings below are indicative. Enquire to check current availability and arrange
            a viewing.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Facilities" title="Building amenities" />
        {confirmedAmenities.length > 0 && (
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {confirmedAmenities.map((a) => (
              <li key={a.id} className="border border-line bg-white px-4 py-3">
                {a.label}
              </li>
            ))}
          </ul>
        )}
        {plannedAmenities.length > 0 && (
          <>
            <p className="mb-3 mt-8 flex items-center gap-3 font-medium text-ink">
              Planned <Tbc>being confirmed</Tbc>
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {plannedAmenities.map((a) => (
                <li key={a.id} className="border border-dashed border-line bg-paper px-4 py-3 text-stone">
                  {a.label}
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-6 max-w-3xl text-sm text-stone">
          We publish amenities only once they are confirmed for the final building specification —
          anything listed as planned is under review, not promised.
        </p>
      </section>

      {/* Rental options */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Flexibility" title="Rental options" />
          <p className="max-w-3xl text-stone">
            We expect to support a range of arrangements — hourly and half-day use for
            practitioners with a visiting caseload, fixed weekly slots for regular clinics, and
            part-time or full-time rooms (including office licences) for those who want a
            permanent base. Exactly which models are offered, and at what rates, depends on the
            room: <strong className="text-ink">pricing is on application</strong> — we confirm
            options and rates directly when you enquire.
          </p>
          <div className="mt-6">
            <a href="#rooms-enquiry" className="btn btn-euca">
              Ask about pricing &amp; availability
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Room rental questions" />
        <FaqList faqs={answered} />
        {askUs.length > 0 && (
          <div className="mt-8">
            <p className="font-medium text-ink">
              Also on your mind? These depend on the final building specification — ask and
              we&apos;ll give you a straight answer as details are confirmed:
            </p>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 text-stone sm:grid-cols-2">
              {askUs.map((f) => (
                <li key={f.q} className="flex gap-2.5">
                  <span aria-hidden className="mt-2.5 h-0.5 w-3 shrink-0 bg-euca" />
                  {f.q}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Enquiry */}
      <section id="rooms-enquiry" className="bg-white">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeading eyebrow="Next step" title="Enquire about a room" />
              <p className="text-stone">
                Tell us your profession, how often you&apos;d use a room and when you&apos;d like
                to start. We&apos;ll come back within one working day with availability, pricing
                details and viewing options.
              </p>
              <p className="mt-4 text-stone">
                Prefer to talk?{" "}
                <a href={`tel:${business.phone}`} className="text-euca underline">
                  {business.phoneDisplay}
                </a>{" "}
                or{" "}
                <a href={business.whatsapp} target="_blank" rel="noopener" className="text-euca underline">
                  WhatsApp
                </a>
                .
              </p>
            </div>
            <EnquiryForm mode="rooms" />
          </div>
        </div>
      </section>
    </>
  );
}
