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
  title: "Therapy & Treatment Rooms to Rent in Blackheath | KD",
  description:
    "Private therapy and treatment rooms to rent in Blackheath, London — suited to physiotherapy, sports therapy, massage and consultations. Flexible arrangements — enquire about availability and viewings.",
  path: "/rooms-to-rent/treatment-rooms/",
  noindex: !roomsIndexable,
});

const answeredFaqs = [
  {
    q: "Which treatments are the rooms suitable for?",
    a: "The rooms are designed for hands-on and consultative practice — physiotherapy, sports therapy, massage, osteopathy, nutrition consultations and talking therapies. Suitability depends on your specific requirements (couch space, water access, sound privacy), so tell us what you practise and we'll match you to the right room.",
  },
  {
    q: "How will my clients arrive for appointments?",
    a: "Clients will arrive through the main entrance, separate from gym traffic, with a waiting arrangement being finalised as part of the building specification. The arrival experience is designed to feel professional and calm — this is a practitioner building, not a gym corridor.",
  },
  {
    q: "How flexible are the arrangements?",
    a: "We expect to offer options from regular weekly clinic slots through to part-time and full-time room use. Which models are offered, and pricing, are confirmed directly when you enquire.",
  },
  {
    q: "How do I arrange a viewing?",
    a: "Use the enquiry form below and tick 'I'd like to view' — we'll come back within one working day with available slots.",
  },
];

export default function TreatmentRoomsPage() {
  const treatmentRooms = rooms.filter((r) => r.type === "treatment");
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Treatment Rooms to Rent",
            serviceType: "Treatment room rental",
            description:
              "Private treatment and therapy rooms to rent in Blackheath, London for physiotherapists, sports therapists, massage therapists and other practitioners.",
            path: "/rooms-to-rent/treatment-rooms/",
          }),
          faqSchema(answeredFaqs),
        ]}
      />

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs
            crumbs={[
              { name: "Rooms to Rent", path: "/rooms-to-rent/" },
              { name: "Treatment Rooms", path: "/rooms-to-rent/treatment-rooms/" },
            ]}
          />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4 text-euca">For practitioners · Blackheath</p>
              <h1 className="display max-w-2xl text-3xl text-ink sm:text-[2.4rem]">
                Therapy &amp; treatment rooms to rent in Blackheath
              </h1>
              <p className="mt-5 text-lg text-stone">
                Clean, private, professional rooms for physiotherapists, sports therapists,
                massage therapists, osteopaths and talking-therapy practitioners — inside a
                modern building anchored by an established fitness business, minutes from
                Blackheath station.
              </p>
              <div className="mt-7">
                <a href="#rooms-enquiry" className="btn btn-euca">
                  Check availability / book a viewing
                </a>
              </div>
            </div>
            <BlueprintPanel
              label="Architectural plan sketch of a treatment room — our rooms will be photographed once the premises is complete"
              caption="Plan sketch — real photography after fit-out"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The standard" title="Built for professional practice" />
            <ul className="space-y-3">
              {[
                "Privacy first: lockable rooms with client-appropriate discretion",
                "Hygiene-conscious finish: wipeable surfaces and cleaned shared areas",
                "A calm, professional client arrival — separate from the gym floor",
                "Rooms suited to a treatment couch, with space to work around it",
                "A building whose whole audience already cares about their health",
              ].map((s) => (
                <li key={s} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-euca" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Being confirmed" title="Room-by-room specifics" />
            <p className="text-stone">
              These practical details vary by room and are confirmed as fit-out completes. Ask
              about any of them in your enquiry and we&apos;ll tell you where things stand:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Sink / water access",
                "Treatment couch provision",
                "Storage for your equipment",
                "Sound privacy rating",
                "Natural light per room",
                "Ventilation / climate control",
                "Step-free access",
                "Access hours for clients",
              ].map((i) => (
                <li key={i} className="flex items-center justify-between gap-2 border border-dashed border-line bg-paper px-3.5 py-2.5 text-stone">
                  {i} <Tbc>TBC</Tbc>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-y border-line px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Available" title="Treatment rooms" />
          <div className="grid gap-6 md:grid-cols-2">
            {treatmentRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
          <p className="mt-6 text-sm text-stone">
            Also considering a permanent desk-based base?{" "}
            <Link href="/rooms-to-rent/office-rooms/" className="text-euca underline">
              See the office rooms
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Location" title="Easy for you. Easy for your clients." />
        <p className="max-w-3xl text-stone">
          Blackheath village is a destination in its own right — and the building is minutes from
          Blackheath station (trains to London Bridge, Charing Cross and Cannon Street), with the
          heath, cafés and local parking nearby. Your clients get a pleasant, professional place
          to visit; you get a location that supports a premium service.{" "}
          <Link href="/location/" className="text-euca underline">
            Travel details
          </Link>
          .
        </p>
      </section>

      {/* FAQ + enquiry */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Treatment room questions" />
          <FaqList faqs={answeredFaqs} />
        </div>
      </section>

      <section id="rooms-enquiry" className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeading eyebrow="Next step" title="Enquire about a treatment room" />
              <p className="text-stone">
                Tell us what you practise, how often you&apos;d use the room and when you&apos;d
                like to start. We&apos;ll come back within one working day with availability and
                viewing options.
              </p>
            </div>
            <EnquiryForm mode="rooms" />
          </div>
        </div>
      </section>
    </>
  );
}
