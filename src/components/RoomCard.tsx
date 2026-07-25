import { rentalModelLabels, type Room } from "@/data/rooms";
import { BlueprintPanel, Tbc } from "@/components/ui";

const statusLabels: Record<Room["status"], string> = {
  available: "Available",
  waitlist: "Enquire for availability",
  occupied: "Currently occupied",
  tbc: "Details to be confirmed",
};

/**
 * Reusable room listing. Renders honestly: unconfirmed specs show as
 * "to be confirmed" chips, prices as "on application" — nothing invented.
 */
export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="card-lift flex flex-col border border-line bg-white">
      {room.images.length === 0 ? (
        <BlueprintPanel
          label={`${room.name} — floor-plan sketch; professional photography to follow once the premises is complete`}
          caption="Plan sketch — photos after fit-out"
          className="aspect-[16/10] w-full"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="display text-2xl text-ink">{room.name}</h3>
          <span className="eyebrow shrink-0 text-[0.75rem] text-euca">{statusLabels[room.status]}</span>
        </div>
        <p className="mt-2 text-stone">{room.summary}</p>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <dt className="font-medium text-ink">Size</dt>
            <dd className="text-stone">{room.sizeSqm ? `${room.sizeSqm} m²` : <Tbc />}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Floor</dt>
            <dd className="text-stone">{room.floor ?? <Tbc />}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Capacity</dt>
            <dd className="text-stone">{room.capacity ?? <Tbc />}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Natural light</dt>
            <dd className="text-stone">{room.naturalLight ?? <Tbc />}</dd>
          </div>
        </dl>

        <div className="mt-4">
          <p className="text-sm font-medium text-ink">Possible rental patterns</p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {room.rentalModels.map((m) => (
              <li key={m} className="bg-sand px-2.5 py-1 text-[0.8rem] text-euca-deep">
                {rentalModelLabels[m]}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <p className="text-sm text-stone">{room.priceNote ?? "Pricing on application"}</p>
          <a href="#rooms-enquiry" className="btn btn-euca text-base">
            Enquire
          </a>
        </div>
        {!room.confirmed && (
          <p className="mt-3 text-xs text-stone">
            Specification shown is indicative — final details confirmed before opening.
          </p>
        )}
      </div>
    </article>
  );
}
