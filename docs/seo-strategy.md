# SEO Strategy — KD Personal Training

Two funnels, one domain, one local area. KD is an **established Blackheath business expanding within Blackheath** — every decision below strengthens existing signals rather than resetting them.

## 1. Guiding principles

1. Preserve all established URLs (see redirect-map.md). Authority compounds; do not spend it on cosmetic restructuring.
2. One page = one intent. Never optimise a page for both PT and room-rental terms.
3. Location continuity: the business stays in Blackheath, so "Blackheath" targeting carries over intact. The move changes the street address, not the locality — this is the best possible local SEO scenario.
4. Publish only verifiable facts. Placeholders (`TODO_CONFIRM_*`) are rendered as clearly-labelled "details to be confirmed" UI, never as fake data, and pages built purely on unconfirmed data stay `noindex` until confirmed.
5. British English everywhere; `lang="en-GB"`, `inLanguage: en-GB`.

## 2. Funnel A — Personal training keyword map

| Page | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/` | personal trainer Blackheath | personal training Blackheath, private fitness studio Blackheath, personal trainer SE3 | Local commercial |
| `/personal-training/` | personal training Blackheath | private personal training London SE, personal training near me | Local commercial (broad) |
| `/1-to-1-training/` | 1 to 1 personal training Blackheath | one to one personal trainer London, private PT sessions SE3 | Local commercial |
| `/couples-training/` | couples personal training Blackheath | partner training London, couples PT SE3, train with partner | Local commercial |
| `/sport-rehabilitation/` | sports rehabilitation Blackheath | post injury personal training, return to exercise after injury London | Local commercial + informational overlap |
| `/fitness-for-50/` | personal trainer for over 50s Blackheath | over 50s fitness London, strength training for over 50s | Local commercial |
| `/perimenopause-training/` | perimenopause personal training | menopause fitness coach London, perimenopause weight training Blackheath | Local commercial (low competition, high differentiation — KD's strongest niche page) |
| `/gym/` | private gym Blackheath | private gym hire SE3, personal training gym Blackheath | Local commercial |
| `/pricing-plans/` | personal trainer prices Blackheath | personal training cost London | Commercial investigation |
| `/gym-rent/` | rent gym space personal trainer London | PT studio hire Blackheath, gym space hire SE3 | B2B commercial (trainers) |
| `/results/` | KD personal training reviews | personal trainer reviews Blackheath | Brand/validation |
| `/perimenopause-training-guide/` | perimenopause training (informational) | perimenopause exercise plan, strength training perimenopause | Informational → feeds `/perimenopause-training/` |

## 3. Funnel B — Room rental keyword map

| Page | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/rooms-to-rent/` | treatment rooms to rent Blackheath | therapy room to rent SE3, practitioner rooms London SE, professional rooms to rent Blackheath | B2B local commercial |
| `/rooms-to-rent/treatment-rooms/` | therapy room to rent Blackheath | massage room to rent SE3, physiotherapy room rental London, consultation room hire Blackheath | B2B local commercial |
| `/rooms-to-rent/office-rooms/` | small office to rent Blackheath | private office room SE3, flexible office rental Blackheath | B2B local commercial |

Keyword-target note: final targets must be revalidated once `TODO_CONFIRM_NEW_ADDRESS` is known (if the new premises sits closer to Lee/Lewisham borders, add those modifiers to *secondary* targets only — never spawn location doorway pages).

## 4. Internal linking model

```
                      ┌──────────── / ────────────┐
                      │            │              │
             /personal-training/  /gym/     /rooms-to-rent/
              │  │  │  │  │        │          │         │
     1-to-1 couples rehab 50+ peri │   treatment-rooms office-rooms
        │      │     │    │   │    │          │         │
        └──────┴──┬──┴────┴───┘    │          └────┬────┘
             /pricing-plans/       │         /contact-us/ (mode=rooms)
             /results/        /location/
             /contact-us/ (mode=pt)
Blog posts → their matching service page (perimenopause guide → /perimenopause-training/)
/gym-rent/ ↔ /rooms-to-rent/ (single cross-link each way, clearly labelled)
```

Rules: every service page links sideways to 2 related services, up to its hub, and forward to pricing + contact. Rooms pages never link into PT service pages except via the shared footer. Breadcrumbs on all non-root pages (with `BreadcrumbList` schema).

## 5. Content clusters (publishing roadmap)

**Cluster 1 — Midlife strength (KD's moat):** perimenopause guide (exists, re-slugged) → over-50s strength starter guide → bone density & resistance training → returning to exercise after a long break. Each links to `/fitness-for-50/` or `/perimenopause-training/`.

**Cluster 2 — Post-injury confidence:** returning to training after injury (GP/physio-cleared) → training around a bad back/knee. Links to `/sport-rehabilitation/`. *No medical claims; always "alongside your physiotherapist's advice".*

**Cluster 3 — Practitioner/B2B (supports Funnel B):** what to look for in a treatment room → renting your first therapy room in London (checklist). Links to `/rooms-to-rent/`. Publish only after room facts are confirmed.

Existing 2020 posts are retained, aggressively lightly: rewritten to British English, factually corrected, and internally linked; they add domain freshness history, not strategy.

## 6. Technical SEO implementation (in this build)

- Unique `title`/`description` per page via central metadata helpers; `metadataBase` set; canonical on every page.
- Open Graph + Twitter card metadata; per-section OG images.
- One H1 per page, semantic heading ladder, breadcrumbs with schema.
- `app/sitemap.ts` (all indexable URLs), `app/robots.ts` (allow all; sitemap ref), custom 404, `redirects()` in `next.config.ts` per redirect-map.md.
- JSON-LD via a single `SchemaScript` component, data-driven from `src/data/business.ts`:
  - `ExerciseGym` (LocalBusiness subtype) — NAP, geo, hours (TODO until confirmed → omitted, not faked), priceRange `££`, sameAs (Facebook, Instagram, LinkedIn, GBP).
  - `Person` (trainer) on `/about-us/` — only confirmed facts.
  - `Service` on each service page with `areaServed: Blackheath, London`.
  - `FAQPage` only where the FAQ is visibly rendered on that page.
  - `Article` on blog posts only (real `datePublished` preserved from the old site).
  - `BreadcrumbList` site-wide.
  - Rooms pages: `Service` + `FAQPage` only. **No** LodgingBusiness/Hotel/Product/AggregateRating/fake offers. `Offer` markup deferred until real prices exist.
- Room listing pages with unconfirmed specifics ship as content-complete but schema-minimal; nothing structured is emitted for placeholder data.
- Performance: server components only (zero client JS except the mobile nav toggle, forms and gallery), `next/font` self-hosted Teko/Ubuntu subsets, AVIF/WebP via `next/image`, no third-party scripts by default.

## 7. Indexation plan

| State | Indexable | Noindex |
|---|---|---|
| At launch (`MOVING_SOON`) | All PT pages, rooms hub + two room-type pages (content is real: the offer exists, opening Sept 2026, register interest), blog, legal | Form success pages, 404 |
| If owner delays room launch | Rooms pages flip to `noindex` via one flag in `src/data/rooms.ts` | |

Search Console: submit new sitemap at launch; request indexing of the re-slugged article; monitor the section-2 redirects.

## 8. Measurement

Separate conversion events (see forms): `pt_enquiry`, `rooms_enquiry`, `viewing_request`, `call_click`, `whatsapp_click`, `directions_click`, `trial_booking_click`. Env-gated analytics snippet (`NEXT_PUBLIC_ANALYTICS_ID`) — no tracking shipped until owner chooses a provider.

## 9. Local SEO (summary — full detail in location-migration-plan.md)

- NAP on every page footer (single source: `src/data/business.ts`).
- GBP remains the review engine; `/results/` links to it; post-move GBP address update is the single most critical migration step.
- Citations (Bark, blackheathvillage.co.uk, taylorsoftickhill and any others found pre-move) get updated in the first week after `NEW_LOCATION_OPEN`.
- The `/location/` page carries the transition narrative so two addresses never appear unexplained.
