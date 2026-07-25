# KD Personal Training — Website

Production website for **KD Personal Training** (kdpersonaltraining.co.uk): an established
private personal training studio in Blackheath, London, expanding in September 2026 into a
larger premises with a bigger private gym plus professional treatment and office rooms to rent.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4**, server components
throughout, minimal client JavaScript (mobile nav + enquiry forms only), deployable to Vercel.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run lint
```

Copy `.env.example` to `.env.local` and fill in what you need. Everything is optional — the
site runs with zero configuration (form submissions are logged to the server console until
email delivery is configured).

## Where everything lives

| Path | What it is |
|---|---|
| `src/data/business.ts` | **Central business config** — addresses, phone, email, socials, coordinates, trainer, the free-session offer, and the `moveStatus` location-state switch. Edit facts here, never in components. |
| `src/data/services.ts` | The five personal-training services (copy, metadata, audiences, goals) |
| `src/data/pricing.ts` | Published price list |
| `src/data/rooms.ts` | Rooms-to-rent data: rooms, amenities, rental models, FAQs, `roomsIndexable` flag |
| `src/data/posts.ts` | Blog posts (migrated from WordPress, British English) |
| `src/data/testimonials.ts` | Ships empty — add only owner-approved quotes |
| `src/data/faqs.ts`, `src/data/nav.ts` | Per-service FAQs; navigation |
| `src/lib/seo.ts`, `src/lib/schema.ts` | Metadata helper; JSON-LD builders |
| `src/components/` | Header/footer, service page template, room card, dual-mode enquiry form, UI primitives |
| `src/app/` | All routes (URLs preserved from the old site — see `docs/redirect-map.md`) |
| `next.config.ts` | 301 redirects implementing `docs/redirect-map.md` |
| `docs/` | Site audit, content inventory, redirect map, SEO strategy, location migration plan, room-rental strategy, image licensing register, photoshoot brief, pre-launch checklist |

## The location-state system

`src/data/business.ts` → `moveStatus`:

- `CURRENT_LOCATION` — no move messaging anywhere.
- `MOVING_SOON` *(current)* — Lee Road stays the operational address in copy, footer, contact
  and structured data; the expansion is announced with September 2026 messaging; rooms pages
  run in waiting-list mode.
- `NEW_LOCATION_OPEN` — flips the NAP, schema, map and copy to the new address (fill in
  `futureAddress` first). See `docs/location-migration-plan.md` for the full cutover checklist.

## Honest-placeholder policy

Facts the owner hasn't confirmed render as visible "to be confirmed" UI (`TODO_CONFIRM_*` in
data files), are excluded from structured data, and are listed in
`docs/current-site-audit.md` §12. Find them all with:

```bash
grep -rn "TODO_CONFIRM" src/
```

No invented prices, room sizes, amenities, opening dates, testimonials or stock photos of
"our building" — imagery slots currently render art-directed placeholder panels; see
`docs/image-sources.md` for the licensing register and swap-in process.

## Deploying

Standard Vercel deployment (`vercel` or connect the repo). Set `NEXT_PUBLIC_SITE_URL` and the
form-delivery env vars in the Vercel dashboard. Before pointing DNS at it, work through
`docs/pre-launch-checklist.md` — it includes redirect verification against the old WordPress
URLs and the Google Search Console steps.
