import Link from "next/link";
import type { Metadata } from "next";

import { rooms, roomsIndexable } from "@/data/rooms";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/SchemaScript";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { BlueprintPanel, FaqList, SectionHeading, Tbc } from "@/components/ui";
import { RoomCard } from "@/components/RoomCard";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = pageMetadata({
  title: "Small Office Rooms to Rent in Blackheath | Private & Flexible",
  description:
    "Private office rooms to rent in Blackheath, London — quiet, presentable rooms for independent professionals and small businesses. Not coworking: your own lockable room. Enquire about availability.",
  path: "/rooms-to-rent/office-rooms/",
  noindex: !roomsIndexable,
});

const answeredFaqs = [
  {
    q: "Is this a coworking space?",
    a: "No. These are private, lockable office rooms — your own door, your own space. We don't offer shared desks or hot-desking, and we don't describe the building as a serviced office: you rent a room, with shared building facilities confirmed in your agreement.",
  },
  {
    q: "Can I meet clients in the room?",
    a: "The rooms are intended to be presentable enough for client meetings, subject to the final specification and your agreement terms. Tell us how often you'd host visitors and we'll advise which room suits.",
  },
  {
    q: "What's included in the rent?",
    a: "Inclusions (utilities, internet, cleaning of shared areas and so on) are being finalised alongside the building specification. We'll set out exactly what's included, in writing, before you commit.",
  },
  {
    q: "What agreement will I sign?",
    a: "Office rooms are expected to be offered on a simple licence agreement rather than a commercial lease — the final form is shared with you when you enquire.",
  },
];

export default function OfficeRoomsPage() {
  const officeRooms = rooms.filter((r) => r.type === "office");
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Office Rooms to Rent",
            serviceType: "Office room rental",
            description:
              "Private small office rooms to rent in Blackheath, London for independent professionals and small businesses.",
            path: "/rooms-to-rent/office-rooms/",
          }),
          faqSchema(answeredFaqs),
        ]}
      />

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs
            crumbs={[
              { name: "Rooms to Rent", path: "/rooms-to-rent/" },
              { name: "Office Rooms", path: "/rooms-to-rent/office-rooms/" },
            ]}
          />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4 text-euca">Private offices · Blackheath</p>
              <h1 className="display max-w-2xl text-3xl text-ink sm:text-[2.4rem]">
                Small office rooms to rent in Blackheath
              </h1>
              <p className="mt-5 text-lg text-stone">
                A quiet, presentable base for an independent professional or small business —
                your own private, lockable room in a modern Blackheath building, minutes from the
                station. Not a coworking floor; not a corporate serviced office. Just a good room
                to work from.
              </p>
              <div className="mt-7">
                <a href="#rooms-enquiry" className="btn btn-euca">
                  Register interest
                </a>
              </div>
            </div>
            <BlueprintPanel
              label="Architectural plan sketch of a private office room — our rooms will be photographed once the premises is complete"
              caption="Plan sketch — real photography after fit-out"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Suitability" title="Who the offices suit" />
            <ul className="space-y-3">
              {[
                "Independent professionals who've outgrown the kitchen table",
                "Consultants and coaches who meet clients occasionally",
                "Small teams of one to three who value privacy over buzz",
                "Practitioners who need an admin base alongside clinic work",
              ].map((s) => (
                <li key={s} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-euca" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l border-euca pl-4 text-sm text-stone">
              Suitability is subject to approval and the nature of your business — quiet,
              professional uses fit best. High-footfall or noisy uses won&apos;t suit the
              building, and we&apos;ll say so honestly.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Being confirmed" title="Practical details" />
            <p className="text-stone">
              Specifics are confirmed as the building completes — ask about any of these in your
              enquiry:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Furnished or unfurnished",
                "Internet provision",
                "Building access hours",
                "Noise levels near the gym",
                "Business mailing address use",
                "Signage options",
                "Parking",
                "Licence terms & notice periods",
              ].map((i) => (
                <li key={i} className="flex items-center justify-between gap-2 border border-dashed border-line bg-paper px-3.5 py-2.5 text-stone">
                  {i} <Tbc>TBC</Tbc>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-y border-line px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Available" title="Office rooms" />
          <div className="grid gap-6 md:grid-cols-2">
            {officeRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
          <p className="mt-6 text-sm text-stone">
            Need a treatment couch rather than a desk?{" "}
            <Link href="/rooms-to-rent/treatment-rooms/" className="text-euca underline">
              See the treatment rooms
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Office room questions" />
        <FaqList faqs={answeredFaqs} />
      </section>

      <section id="rooms-enquiry" className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeading eyebrow="Next step" title="Enquire about an office room" />
              <p className="text-stone">
                Tell us about your business, how you&apos;d use the room and when you&apos;d like
                to start. We&apos;ll come back within one working day.
              </p>
            </div>
            <EnquiryForm mode="rooms" />
          </div>
        </div>
      </section>
    </>
  );
}
