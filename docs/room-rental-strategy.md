# Room Rental Strategy — Treatment & Professional Rooms

The second commercial funnel: private rooms inside KD's new Blackheath premises, rented to independent practitioners and selected professional users. Presented as a professional property offering — never as coworking, serviced offices, or a classifieds listing.

## 1. Target users (provisional — all subject to owner approval)

**Tier 1 (natural fit, cross-referral potential):** physiotherapists, sports therapists, massage therapists, osteopaths, chiropractors, nutritionists/dietitians.
**Tier 2 (strong fit, quieter rooms):** counsellors, psychotherapists, coaches/consultants.
**Tier 3 (case-by-case):** beauty/wellness practitioners (room spec dependent — water/ventilation), small professional businesses, independent office-based professionals.

Every page carries the approval statement: suitability is assessed per applicant and per business type; nothing is promised. **No profession is listed as "accepted" — only "may suit".** Cross-referral is phrased as an environment benefit ("work alongside an established fitness business with an aligned client base"), never as promised clients.

## 2. Page structure (built)

- `/rooms-to-rent/` — commercial landing: hero (what/where/who/how to enquire), the building story (anchored by KD), room types overview, ideal-tenants section with approval statement, amenities (confirmed-only rendering), rental options (models listed as "available options will be confirmed"; no invented prices), gallery placeholder policy, viewing/enquiry CTA, FAQ (only answerable questions answered; the rest listed as "ask us").
- `/rooms-to-rent/treatment-rooms/` — practitioner-facing detail: suitable uses, hygiene/professional standards, privacy, client arrival, storage, water access (TODO), accessibility (TODO), flexibility, transport, FAQ, enquiry.
- `/rooms-to-rent/office-rooms/` — office-facing detail: privacy, furnishing (TODO), internet, client meetings, noise, access hours (TODO), rental arrangement, transport, enquiry. Explicitly not-coworking, not-serviced-office wording.

## 3. Data model (implemented in `src/data/rooms.ts`)

`Room`: id, name, type (`treatment`|`office`|`flex`), status (`available`|`waitlist`|`occupied`|`tbc`), summary, size, floor, capacity, furniture[], facilities[], naturalLight, accessibility, availability, rentalModels[], price (nullable — renders "POA / to be confirmed"), images[], floorPlanRef, confirmed (boolean — unconfirmed rooms render with a "specification to be confirmed" badge and are excluded from any structured data).

`RentalModel` enum: hourly, half-day, full-day, fixed-weekly, part-time-monthly, full-time, office-licence. Which models are actually offered = `TODO_CONFIRM_RENTAL_MODELS`.

`Amenity`: id, label, icon, confirmed (unconfirmed amenities render under "Planned — to be confirmed", clearly separated from confirmed facts).

At launch the file contains three **representative room templates** (one per type), all `confirmed: false`, populated exclusively with placeholders — zero invented figures.

## 4. Lead generation

- Dedicated rooms enquiry form (name, business name, profession, email, phone, room type, intended use, preferred days, frequency, start date, storage needed?, viewing requested?, message) — progressive: contact block first, requirement block second.
- Waiting-list framing during `MOVING_SOON`: "Register interest — viewings begin before our September opening."
- Conversion events: `rooms_enquiry`, `viewing_request`, `pricing_request`.
- Secondary CTAs: call, WhatsApp (same numbers, distinct tracking labels).

## 5. Local SEO targets

Primary: treatment rooms to rent Blackheath · therapy room to rent Blackheath/SE3 · massage room to rent Blackheath · consultation room hire London SE · small office to rent Blackheath.
Supported by: the rooms pages' own copy, `Service` schema with `areaServed`, the `/location/` transport detail, and Cluster 3 blog content (post-confirmation). No doorway pages, no per-profession pages until real content exists.

## 6. Required photography (full brief in photoshoot-brief.md)

Exterior, entrance, reception/waiting, corridors, each room (wide + detail + natural light), shared facilities, floor plans, signage. Until then: clearly-documented premium stock placeholders only in generic contexts (see image-sources.md) — never presented as the actual rooms.

## 7. Questions for the business owner

1. How many rentable rooms, on which floors, at what sizes? (`TODO_CONFIRM_ROOM_COUNT`, `TODO_CONFIRM_ROOM_SPECS`)
2. Which rooms have sinks/water? Ventilation? Sound privacy standard?
3. Which rental models will you actually offer, and at what prices? (`TODO_CONFIRM_ROOM_PRICING`)
4. Which professions will you accept? Any excluded? (`TODO_CONFIRM_ACCEPTED_PROFESSIONS`)
5. Amenities: reception/waiting area? kitchen? toilets count? cleaning? storage? A/C? security/access control? parking? signage rights? business mailing address use? (`TODO_CONFIRM_BUILDING_AMENITIES`)
6. Access hours for tenants and their clients — and outside gym hours? (`TODO_CONFIRM_ACCESS_HOURS`)
7. Licence/agreement form — who drafts it, what terms? (`TODO_CONFIRM_LICENCE_TERMS`)
8. Insurance requirements for practitioners (professional indemnity proof?)
9. Can tenants leave equipment in rooms (lockable storage)?
10. Is the building step-free / accessible? (`TODO_CONFIRM_ACCESSIBILITY`)
