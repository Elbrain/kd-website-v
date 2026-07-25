# KD Personal Training — Current Website Audit

**Site audited:** https://kdpersonaltraining.co.uk/
**Audit date:** 22 July 2026
**Method:** Independent crawl of every URL in the XML sitemaps, full-page HTML capture and analysis of all 14 content URLs, redirect/status testing, structured-data extraction, live browser inspection of the rendered design system, and external search-visibility checks.

---

## 1. Platform and build

| Item | Finding |
|---|---|
| CMS | WordPress (current, `wp-json` and `xmlrpc.php` exposed) |
| Theme | Qode fitness template (Bridge-family, ThemeForest, ~2018 era) |
| SEO plugin | Rank Math (generates sitemaps and JSON-LD) |
| Builder credit | "Developed with ♥ by Boost UK" (boost18.co.uk) — footer link on every page |
| Company entity | KD Personal Training LTD (footer copyright) |
| Hosting behaviour | HTTP→HTTPS 301 ✓, www→non-www 301 ✓, canonical tags correct ✓ |
| 404 handling | Returns real 404 status with theme 404 page ✓ |
| `llms.txt` | Present (200) |

## 2. Current sitemap (as crawled)

```
/                                  Homepage
├── /about-us/                     About
├── /gym-rent/                     Hourly studio hire for independent PTs
├── /1-to-1-training/              Service
├── /couples-training/             Service
├── /sport-rehabilitation/         Service
├── /fitness-for-50/               Service
├── /perimenopause-training/       Service
├── /pricing-plans/                Pricing
├── /contact-us/                   Contact (form + NAP)
├── /blog/                         Blog index
│   ├── /break-your-bad-habits/                          "5 Bad Habits" (Feb 2020)
│   ├── /10-ways-to-get-better-at-fitness/               (Feb 2020)
│   ├── /how-to-increase-mental-toughness-and-stay-strong/ (Feb 2020)
│   └── /how-to-increase-mental-toughness-and-stay-strong-2/  ← ACTUALLY the Apr 2026
│                                    "Perimenopause Training: How the Right Workout
│                                     Can Transform Your 40s" article on a recycled slug
├── /category/{diet,fitness,health,lifestyle,nutrition}/  Thin archives (indexable)
├── /tag/{gym,habits,lifestyle,nutrition}/                Thin archives (indexable)
├── /2020/02/, /2026/04/                                  Date archives (indexable)
├── /author/websolution/            → already 301s to /
└── /couple-training/               → already 301s to /couples-training/
```

Navigation (same on every page): Home · About Us · Gym rent · Our Services (dropdown: 1 to 1, Couples, Sport Rehabilitation, Fitness for 50+, Perimenopause) · Pricing Plans · **Reviews (external link to the Google Business Profile reviews panel)** · Blog · Contact Us.

## 3. Verified business facts (source: the site itself unless noted)

| Fact | Value |
|---|---|
| Business name | KD Personal Training (KD Personal Training LTD) |
| Founded | 2018 (Organization schema `foundingDate`) |
| Address | 1st Floor, 5 Lee Road, Blackheath, London SE3 9RQ ("1st Floor, Ohal Ltd, 5 Lee Rd" per external directory listings; site shows "5 Lee Road Blackheath SE3 9RQ") |
| Coordinates | 51.4649566, 0.0092286 (Google Maps link used site-wide) |
| Phone | 07772 923803 (+44 7772 923803) |
| Email | info@kdpersonaltraining.co.uk |
| WhatsApp | wa.me/+447772923803 (used as a primary CTA) |
| Trainer | Karolina Desiatnikova (LinkedIn linked from Contact page). External profiles state a Sport Rehabilitation degree and ex-gymnast background — **TODO_CONFIRM_TRAINER_BIO** before publishing |
| Station | "a stone's throw from the train station" (Blackheath station) |
| Google Business Profile | Exists, with reviews (nav "Reviews" links to the Maps reviews panel) |
| Facebook | facebook.com/kd_personal_training_-112772860267615 |
| Instagram | @kd_personal_training_ |
| LinkedIn | linkedin.com/in/karolina-desiatnikova-06373112a |
| Offer | Free 30-minute trial/intro session (site-wide popup + every service page) |
| Equipment named | Assault bike, rowing machine, squat rack, cable pulley, smith machine, Force USA "Monster G9" (power rack/smith/pulley/chin-up/dip/leg press/low row/core), free weights, kettlebells, yoga mats |

### Published pricing (pricing page, modified Apr 2026)

| Service | Single | 5 sessions | 8 sessions | 10 sessions |
|---|---|---|---|---|
| 1 to 1 Training | £80 | £400 | £600 | £700 |
| Couples Training | £100 | £500 | £760 | £900 |
| Sport Rehabilitation | £80 | £400 | £600 | £700 |
| Fitness for 50+ | £80 | £400 | £600 | £700 |
| Perimenopause Training | £80 | £400 | £600 | £700 |

Note: two 2020 blog posts quote "£65–85 per session" and "£65" — out of date, must not be carried over.

### Existing gym-rent offer (page rewritten Dec 2025 — this is a live, current service)

Hourly, pay-as-you-go hire of the private studio to independent personal trainers: no contracts, book by the hour, keep 100% of client fees, aimed at new and growing PTs. Four gallery screenshots + one photo. This is **trainer studio hire**, a different audience and offer from the new premises' treatment/office rooms — the two must not be merged or confused.

## 4. SEO assets that MUST be preserved

1. **Domain authority and age** — content dates from Feb 2018; established local business signals.
2. **Homepage title/positioning** — "Blackheath Personal Training | Private Fitness Studio in Blackheath, London" currently earns first-page local visibility (per owner) — keep targeting "personal trainer Blackheath" / "personal training Blackheath" / "private gym Blackheath".
3. **Short keyword-relevant URLs** — every page URL is clean and descriptive; all are retained unchanged in the rebuild (see redirect-map.md; only the mis-slugged Apr 2026 blog post moves).
4. **NAP consistency** — "5 Lee Road, Blackheath SE3 9RQ" + 07772 923803 is consistent across the site, Google Business Profile, Bark.com, blackheathvillage.co.uk and other directories. Must not change until the move completes (see location-migration-plan.md).
5. **Google Business Profile with reviews** — the only social proof the business has; the site links to it from the main nav.
6. **The free 30-minute trial offer** — the site's strongest conversion asset.
7. **Brand assets** — the thin-line KD monogram logo (excellent, keep), Teko condensed display headings + Ubuntu body, red-orange accent `#F34E3A`, dark `#29282D`/`#323232` sections. Recognisable and worth evolving rather than replacing.
8. **Recent content investment** — the Apr 2026 perimenopause article is genuinely good, current, UK-relevant long-form content; the Dec 2025 rewrites of fitness-for-50, perimenopause-training and gym-rent pages contain usable first-person copy.

## 5. SEO weaknesses

1. **Duplicate metadata across three service pages.** `/1-to-1-training/`, `/perimenopause-training/` and `/fitness-for-50/` all carry the identical title "Personal Training 1 to 1 — Blackheath Private Fitness Studio" and the identical meta description. Two of the business's most differentiating services are invisible to search as distinct pages.
2. **`/gym-rent/` has no meta description at all**, and its title ("Studio Rental for Independent Trainers — Private Fitness Studio") omits Blackheath/London.
3. **The Apr 2026 perimenopause article sits on a recycled, wrong slug** (`/how-to-increase-mental-toughness-and-stay-strong-2/`). The URL contradicts the topic, splits topical signals with the real mental-toughness post, and kills CTR. Needs a clean descriptive URL + 301.
4. **Heading structure is broken site-wide.** The homepage and most service pages have **no H1**. Blog posts have a site-generic H1 ("Private Fitness Studio") with the actual post title as an H2. Section headings jump H6→H2→H5.
5. **Structured data is half template junk.** WebSite name is "Private Fitness Studio" (template leftover), `inLanguage` is `en-US`, the author of every page is "websolution" (the developer's WP account), static pages are marked up as `Article`, and the Organization is not a `LocalBusiness`/`ExerciseGym` — no geo, no openingHours, no priceRange, and `sameAs` omits Instagram/LinkedIn.
6. **Thin archives are indexable** — 5 category, 4 tag and 2 date archives, all near-duplicates of /blog/ (every post is assigned to every category).
7. **Blog depth** — 4 posts total; the three 2020 posts are generic template-era content in American English ("favorite", "center") with no local relevance.
8. **Copy errors that affect search and trust** — meta description typo "Blackheat"; couples page typos ("exerpeinced", "and and"); the sport-rehabilitation CTA says "Book Your Perimenopause Training Consultation" (copy-paste error); pricing casing inconsistent.
9. **Missing content images alt text** across the board (galleries, blog images, screenshots); slider images use `alt="Slide"`, `alt="a"`, `alt="b"`, `alt="Image Alt"`.
10. **No FAQ content anywhere**, no breadcrumbs, no internal links inside body copy (services never cross-link contextually; the only in-copy links are in the 2020 blog posts).

## 6. Technical weaknesses

1. Heavy legacy front end — jQuery + Qode slider stack, ~400 qode-prefixed style hooks, render-blocking CSS/JS, screenshots served as large PNGs (`Screenshot-2025-12-18-*.png` up to ~1MB) — poor Core Web Vitals on mobile.
2. `xmlrpc.php` reachable (brute-force/DDoS vector); WP REST user enumeration open; blog comments open (spam surface, "0 comments" displayed on every post).
3. BMI Calculator Chart + BMI/BMR calculator embedded on the homepage (brief explicitly requires removal).
4. Google Fonts loaded externally (Ubuntu, Teko) without `font-display` control.
5. Slider lazy-load uses `dummy.png` placeholders — image-less first paint.
6. **No legal pages at all** — forms declare "we may collect, store and process your data" but there is no privacy policy, cookie policy or terms page anywhere on the site (GDPR gap).
7. No analytics conversion separation visible; no tracking of call/WhatsApp clicks.

## 7. UX weaknesses

1. Dated 2018 template look: full-bleed slider with three rotating messages, template icon graphics (`h1-custom-icon-img-*.png`, `info-box-vector-*.png`), inconsistent section rhythm.
2. "Gym rent" nav label is ambiguous (it means "hire the studio if you're a PT", but reads like "a gym you can join").
3. "Reviews" nav item silently sends visitors off-site to Google Maps in a new tab.
4. The "First timers are welcome!" trial popup is the only prominent conversion device and repeats identically on every page; the phone number is plain text, not tracked.
5. No opening hours anywhere on the site.
6. Footer is a single copyright line + developer credit — no NAP, no nav, no legal links.
7. Pricing table renders "£" separated from the figures, casing varies ("Single class", "SINGLE SESSION"), and 50+ pricing is formatted differently from its siblings.
8. No testimonials on-site despite real Google reviews existing.
9. Duplicated nav markup (desktop + mobile lists both in DOM).

## 8. Design weaknesses

1. Template-generic: nothing about the layout is distinctive to KD; the logo is the only strong brand element.
2. Photography is a mix of era-2020 stock (barbell/misc), unedited studio snapshots and literal screen captures with filenames like `Screenshot-2025-12-18-162259.png`.
3. Body text is 16px Ubuntu Light grey `#9C9C9C` on white — low contrast, fails WCAG AA for body copy.
4. The accent red-orange `#F34E3A` is used indiscriminately (30 elements on the homepage) rather than as a controlled accent.

## 9. Conversion weaknesses

1. One generic contact form for every intent — no service selection, no PT-vs-studio-rental separation, no room-rental journey at all.
2. No differentiated CTAs or tracking: PT enquiries, studio-hire enquiries, calls, WhatsApp and map clicks are indistinguishable.
3. The strongest offer (free 30-minute trial) is a popup afterthought rather than the structured centrepiece of every service page.
4. No pricing anchoring or explanation (what's included, session length, block validity).

## 10. Useful assets to retain

- KD monogram logo (all three variants downloaded and archived).
- Brand DNA: Teko condensed headings, Ubuntu body, `#F34E3A` accent, dark charcoal sections — evolve, don't replace.
- All service copy substance (goals lists, equipment lists, the Dec 2025 first-person rewrites of 50+/perimenopause/gym-rent).
- The Apr 2026 perimenopause article (excellent, keep and re-slug).
- The "About" narrative: heart of Blackheath, stone's throw from the station, equipment roll-call, Monster G9.
- Published pricing table (current as of Apr 2026).
- Free 30-minute trial offer; WhatsApp-first contact pattern.
- Google Business Profile link + reviews; all social URLs.
- Established URLs (kept) and existing 301s (`/couple-training/`→`/couples-training/`, `/author/websolution/`→`/`).

## 11. Recommended migration decisions

Summarised here; full page-by-page detail in [content-inventory.md](content-inventory.md) and [redirect-map.md](redirect-map.md).

1. **Keep every established page URL unchanged.** The rebuild reproduces `/1-to-1-training/`, `/couples-training/`, `/sport-rehabilitation/`, `/fitness-for-50/`, `/perimenopause-training/`, `/gym-rent/`, `/about-us/`, `/pricing-plans/`, `/contact-us/`, `/blog/` and the three 2020 post URLs exactly. This is an evolution of an established local business, not a reset — do not spend authority on cosmetic URL changes.
2. **Add a new `/personal-training/` hub** that links to (rather than replaces) the existing service URLs.
3. **Add the new `/rooms-to-rent/` section** (`/rooms-to-rent/`, `/rooms-to-rent/treatment-rooms/`, `/rooms-to-rent/office-rooms/`) for the new premises. Keep `/gym-rent/` as the separate, live PT studio-hire service; cross-link, never merge.
4. **301 the mis-slugged perimenopause article** to `/perimenopause-training-guide/` (root-level slug, matching the site's established post-URL pattern).
5. **301 category/tag/date archives to `/blog/`**; keep the existing author→home redirect.
6. **Remove**: BMI/BMR calculators, comment functionality, template icon graphics, screenshot images, empty Twitter link, "websolution" author identity, `Article` markup on static pages.
7. **Create**: `/gym/` (new premises page), `/location/` (transition-aware location page), `/results/` (Google-reviews-led social proof, no fabricated quotes), legal pages, custom 404.
8. **Deliberately NOT created** (thin/doorway risk, per brief): `/areas/` location pages, per-profession room pages, `/rooms-to-rent/for-practitioners/` as a separate URL (its content folds into the rooms hub and treatment-rooms page until there is enough unique material).
9. **Language**: rewrite everything in British English; `en-GB` throughout.
10. **Location state system**: site ships in `MOVING_SOON` state — current Lee Road address remains the published NAP everywhere; the new premises is announced with September 2026 messaging and clearly labelled placeholders; switching to `NEW_LOCATION_OPEN` is a one-line config change.

## 12. Information that requires confirmation from the business owner

| # | Item | Placeholder used in build |
|---|---|---|
| 1 | New premises address + postcode | `TODO_CONFIRM_NEW_ADDRESS` |
| 2 | Exact opening date (Sept 2026 stated) | `TODO_CONFIRM_OPENING_DATE` |
| 3 | Number of rentable rooms | `TODO_CONFIRM_ROOM_COUNT` |
| 4 | Room types/sizes/floors/specs | `TODO_CONFIRM_ROOM_SPECS` |
| 5 | Room pricing + rental models offered | `TODO_CONFIRM_ROOM_PRICING` |
| 6 | Building amenities (reception, kitchen, parking, access hours, signage, mailing address…) | `TODO_CONFIRM_BUILDING_AMENITIES` |
| 7 | Accepted professions for room rental | `TODO_CONFIRM_ACCEPTED_PROFESSIONS` |
| 8 | Trainer bio, qualifications (Sport Rehabilitation degree? ex-gymnast?), photo permission | `TODO_CONFIRM_TRAINER_BIO` |
| 9 | Opening hours (never published anywhere) | `TODO_CONFIRM_OPENING_HOURS` |
| 10 | Testimonials permission (Google reviews quoted on-site need approval) | `TODO_CONFIRM_TESTIMONIALS` |
| 11 | Whether hourly PT studio hire continues at the new premises | `TODO_CONFIRM_GYM_RENT_FUTURE` |
| 12 | Pricing validity for the new premises | `TODO_CONFIRM_PRICING_AT_NEW_SITE` |
| 13 | Ownership of kdpersonaltraining.com (found in search results — same business? If so, it should 301 to .co.uk) | `TODO_CONFIRM_DOTCOM_DOMAIN` |
| 14 | Company registration number + registered address for legal pages | `TODO_CONFIRM_COMPANY_DETAILS` |
