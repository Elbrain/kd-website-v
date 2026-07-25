# Location Migration Plan — Lee Road → New Blackheath Premises

**Current location:** 1st Floor, 5 Lee Road, Blackheath, London SE3 9RQ (verified live NAP)
**Future location:** `TODO_CONFIRM_NEW_ADDRESS` — Blackheath (same locality — confirmed by owner brief)
**Expected opening:** September 2026 (`TODO_CONFIRM_OPENING_DATE` for the exact date)

The locality does not change. This means the primary ranking asset — "Blackheath" relevance — survives the move untouched. The work is address-consistency management, not re-ranking.

## 1. Website states

The site is driven by `moveStatus` in `src/data/business.ts`:

| State | Meaning | What the site shows |
|---|---|---|
| `CURRENT_LOCATION` | Pre-announcement | Lee Road only. No move messaging. |
| `MOVING_SOON` | **← launch state** | Lee Road remains the operational address everywhere (footer, contact, schema, map). Expansion announcement on homepage + `/location/`; "opens September 2026" messaging; register-interest CTA; rooms waiting-list CTA. New address shown only when confirmed, always labelled "our new home from September 2026". |
| `NEW_LOCATION_OPEN` | Moved | New address becomes the NAP everywhere; schema, map embed and coordinates switch; Lee Road references removed from live copy; `/location/` keeps a short "we've moved from Lee Road" note for 6–12 months for continuity. |

Switching state is a one-field change; every dependent surface (footer, contact page, location page, JSON-LD, map links, OG text) re-renders from config. No content hunting.

## 2. Timeline

### Phase A — Now → ~6 weeks before opening (`MOVING_SOON`)
- Launch rebuilt site in `MOVING_SOON`. Lee Road stays the **only** operational address in NAP, schema and GBP.
- Homepage announcement + `/location/` explain: same business, same area, bigger premises, opening September.
- Register-interest form (PT) and rooms waiting-list form (rentals) live from day one.
- **Do not** change GBP address, citations or directories. Do not publish the new address as an operating address anywhere.
- When `TODO_CONFIRM_NEW_ADDRESS` is confirmed: show it on `/location/` and `/rooms-to-rent/` explicitly labelled as the future address. Two addresses never appear without their roles stated.
- Post GBP updates ("we're expanding — new larger gym opening September") — updates, not an address change.

### Phase B — Opening week (switch to `NEW_LOCATION_OPEN`)
Ordered checklist, all within ~48h:
1. Confirm the business is genuinely operating at the new premises (GBP rules require it).
2. Flip `moveStatus` → deploy. Verify footer/contact/schema/map/coordinates all switched.
3. Update **Google Business Profile address** (single most important step). Expect a re-verification (postcard/video); prepare signage photos in advance. Keep the same GBP listing — never create a new one (reviews must be preserved).
4. Update citations, same-day where possible: Bark.com, blackheathvillage.co.uk, taylorsoftickhill.co.uk listing, Apple Business Connect, Bing Places, Facebook page info, Instagram bio, LinkedIn.
5. Update map embeds/links (new place URL + coordinates) — automatic via config.
6. Search Console: request re-crawl of `/`, `/location/`, `/contact-us/`, `/rooms-to-rent/`.
7. Email/WhatsApp announcement to the client base with the new address and a map link.

### Phase C — First 3 months after opening
- Weekly: check GBP for verification state and rogue "suggested edits".
- Sweep remaining citations found via search for the old address; request updates.
- Old local backlinks (e.g. blackheathvillage.co.uk) — ask editors to update the address in the listing copy; the URL itself doesn't change so link equity is unaffected.
- Keep the "we've moved" note on `/location/` (helps users and Google reconcile the address history).
- Solicit fresh Google reviews mentioning the new premises (naturally reinforces the new address).

## 3. Structured data behaviour by state

| Field | `MOVING_SOON` | `NEW_LOCATION_OPEN` |
|---|---|---|
| `ExerciseGym.address` | Lee Road | New address |
| `ExerciseGym.geo` | 51.4649566, 0.0092286 | `TODO_CONFIRM_NEW_COORDS` |
| `hasMap` | Current GBP map URL | Updated place URL |
| Announcement | `SpecialAnnouncement` optional; we use visible copy only (safer) | — |
| Rooms `Service.areaServed` | Blackheath, London | unchanged |

## 4. Risk register

| Risk | Mitigation |
|---|---|
| Conflicting NAP during transition | Single config source; future address always visually labelled; schema only ever contains the operational address |
| GBP re-verification delay | Prepare evidence (signage, utility bill) before flipping; keep phone number unchanged (it's the strongest continuity signal) |
| Creating a duplicate GBP | Explicit rule above: edit, never re-create |
| Old citations lingering | Phase C sweep with a tracked list in this repo |
| Rankings dip post-move | Expected minor wobble; locality unchanged so recovery is fast; monitor "personal trainer blackheath" weekly |
| Owner delays the move | Stay in `MOVING_SOON`; messaging uses config dates so nothing hardcodes "September" |

## 5. Communication plan

- **Clients:** homepage banner + `/location/` + email/WhatsApp at Phase B. Message: same trainer, same standards, bigger space, more privacy — appointments continue uninterrupted at Lee Road until DATE.
- **Practitioner prospects:** rooms waiting list gets first-viewing invitations before public opening.
- **Public:** GBP posts + Instagram/Facebook throughout fit-out (also feeds the photoshoot pipeline).
