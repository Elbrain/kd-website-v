# Content Inventory — kdpersonaltraining.co.uk

Decision key: **KEEP** (URL and substance retained, copy improved) · **REWRITE** (URL retained, content substantially rewritten) · **MOVE** (301 to new URL) · **REMOVE** (gone from the new site, redirect noted) · **NEW** (page that does not exist today).

All copy is rewritten in British English regardless of decision.

## Existing pages

| Existing URL | Current purpose | Current title | Decision | New URL | Target intent | Notes |
|---|---|---|---|---|---|---|
| `/` | Homepage: slider, services grid, "What makes KD different", BMI calculators | Blackheath Personal Training \| Private Fitness Studio in Blackheath, London | REWRITE | `/` (unchanged) | personal trainer blackheath, personal training blackheath | Keep title targeting; add real H1; remove BMI/BMR calculators; add expansion announcement + rooms teaser |
| `/about-us/` | Studio + equipment story, blog teasers | About Us — KD Personal Training Fitness Studio, Blackheath | REWRITE | `/about-us/` (unchanged) | about kd personal training, personal trainer blackheath | Keep "heart of Blackheath / stone's throw from station" narrative and equipment roll-call; add trainer section (TODO_CONFIRM_TRAINER_BIO) |
| `/gym-rent/` | Hourly studio hire for independent PTs (rewritten Dec 2025) | Studio Rental for Independent Trainers — Private Fitness Studio | KEEP | `/gym-rent/` (unchanged) | gym space hire personal trainer london / rent gym space blackheath | Live service, distinct from rooms-to-rent. Add missing meta description + local qualifiers. Cross-link to `/rooms-to-rent/` for practitioners |
| `/1-to-1-training/` | Core service page | Personal Training 1 to 1 — Blackheath Private Fitness Studio | REWRITE | `/1-to-1-training/` (unchanged) | one to one personal training blackheath | Keep goals list (weight loss, toning, muscle gain, S&C, mobility, posture, pre/post natal, post-injury rehab). Add FAQ, pricing, testimonials slot |
| `/couples-training/` | Service page | Blackheath Couple Training — KD PT Fitness Studio | REWRITE | `/couples-training/` (unchanged) | couples personal training blackheath / partner training london | Fix typos ("exerpeinced", "and and", meta "Blackheat"). Keep reduced-price angle |
| `/sport-rehabilitation/` | Service page | Sport Rehabilitation in Blackheath — KD PT Fitness Studio | REWRITE | `/sport-rehabilitation/` (unchanged) | sports rehabilitation blackheath / post injury training london | Fix wrong CTA ("Book Your Perimenopause Training Consultation"). No medical claims — position as post-injury fitness training, advise GP/physio sign-off |
| `/fitness-for-50/` | Service page (rewritten Dec 2025, good copy) | *(duplicate of 1-to-1 title)* | REWRITE | `/fitness-for-50/` (unchanged) | personal trainer over 50s blackheath | Unique metadata (currently duplicated). Keep the 8-benefit list and free 30-min mobility & strength assessment CTA |
| `/perimenopause-training/` | Service page (rewritten Dec 2025, good copy) | *(duplicate of 1-to-1 title)* | REWRITE | `/perimenopause-training/` (unchanged) | perimenopause personal training london / menopause fitness blackheath | Unique metadata. Keep "Why it works" 6-point section. Link to the re-slugged guide article. No medical claims |
| `/pricing-plans/` | Price list, 5 packages | Pricing Plans — KD Personal Training Fitness Studio | REWRITE | `/pricing-plans/` (unchanged) | personal training prices blackheath | Keep all published prices; fix formatting; add what's-included and block-validity notes (TODO where unknown) |
| `/contact-us/` | NAP + generic form | Contact Us — KD Personal Training Fitness Studio | REWRITE | `/contact-us/` (unchanged) | contact kd personal training | Split into PT enquiry and room-rental enquiry modes; keep NAP, WhatsApp, socials; remove empty Twitter link |
| `/blog/` | Blog index (4 posts) | Blog — Read the latest from KD Personal Training | KEEP | `/blog/` (unchanged) | informational | New card layout, correct H1 |

## Existing posts

| Existing URL | Real topic | Decision | New URL | Notes |
|---|---|---|---|---|
| `/how-to-increase-mental-toughness-and-stay-strong-2/` | **Perimenopause training guide (Apr 2026)** on a recycled slug | MOVE | `/perimenopause-training-guide/` | 301. Slug finally matches topic; root-level pattern matches existing posts. Internal links from `/perimenopause-training/` |
| `/how-to-increase-mental-toughness-and-stay-strong/` | Mental toughness tips (Feb 2020) | KEEP | unchanged | Rewrite into British English, fix duplicate H2 "You Can Break to Help Your Health" (copy-paste from Bad Habits post), remove outdated "£65" price |
| `/break-your-bad-habits/` | 5 bad habits (Feb 2020) | KEEP | unchanged | British English rewrite; trim generic filler; remove "nutritionists of KD" claim unless confirmed |
| `/10-ways-to-get-better-at-fitness/` | 10 fitness tips (Feb 2020) | KEEP | unchanged | British English rewrite; remove outdated "£65-85" pricing line |

## Existing archives / utility URLs

| URL(s) | Decision | Redirect |
|---|---|---|
| `/category/diet/`, `/category/fitness/`, `/category/health/`, `/category/lifestyle/`, `/category/nutrition/` | REMOVE | 301 → `/blog/` |
| `/tag/gym/`, `/tag/habits/`, `/tag/lifestyle/`, `/tag/nutrition/` | REMOVE | 301 → `/blog/` |
| `/2020/02/`, `/2026/04/` | REMOVE | 301 → `/blog/` |
| `/author/websolution/` | REMOVE | 301 → `/` (matches current behaviour) |
| `/couple-training/` | (legacy) | 301 → `/couples-training/` (preserve existing redirect) |
| `/feed/`, `/comments/feed/`, `*/feed/` | REMOVE | 301 → `/blog/` |
| `/wp-json/*`, `/xmlrpc.php`, `/wp-admin/*`, `/wp-content/*` | REMOVE | Gone with WordPress. `/wp-content/uploads/*` image URLs: allow to 404 after re-hosting assets under `/images/`; no redirects needed (no ranking value in attachment URLs) |
| `/llms.txt` | KEEP | Regenerated for the new site |

## Elements removed entirely (no redirect applicable)

- BMI Calculator Chart + BMI/BMR calculator (homepage) — brief rule 6.
- Blog comment forms and comment counts.
- Developer credit link ("Developed with ♥ by Boost UK") — footer becomes business-owned. *(Flag to owner in case a credit agreement exists.)*
- Empty `https://twitter.com/` social link (contact page).
- Template graphics: `dummy.png` slider placeholders, `h1-custom-icon-img-*.png`, `info-box-vector-*.png`, `default.png` close icon.
- `Screenshot-2025-12-18-*.png` gallery images on gym-rent (to be replaced by real photography per photoshoot-brief.md).
- "websolution" author identity in schema; `Article` schema on static pages; `en-US` language tags.

## New pages (do not exist today)

| New URL | Purpose | Primary intent |
|---|---|---|
| `/personal-training/` | PT hub landing page linking the five service pages | personal training blackheath (broad) |
| `/gym/` | The private gym: current studio + new premises preview | private gym blackheath |
| `/results/` | Social proof: Google reviews-led; owner-approved testimonial slots | kd personal training reviews |
| `/rooms-to-rent/` | Rooms-to-rent commercial landing page | treatment rooms to rent blackheath |
| `/rooms-to-rent/treatment-rooms/` | Treatment/therapy room detail | therapy room to rent blackheath / massage room to rent SE3 |
| `/rooms-to-rent/office-rooms/` | Professional office room detail | small office to rent blackheath |
| `/location/` | Transition-aware location page (current studio, new premises, travel) | kd personal training location / blackheath |
| `/privacy-policy/` | Legal (template, TODO company details) | — |
| `/terms/` | Legal (template) | — |
| `/cookie-policy/` | Legal (template) | — |
| `/404` | Custom not-found | — |

### Deliberately not created

- `/areas/` or per-suburb pages (Lewisham/Greenwich/Lee…) — doorway-page risk; local reach handled by natural mentions on `/location/` and service pages.
- Per-profession room pages (`/rooms-to-rent/massage-room/` etc.) — thin-page risk until confirmed room specs and photography exist.
- `/rooms-to-rent/for-practitioners/` as a standalone URL — its substance (ideal tenants, approval statement, cross-referral positioning) lives on the rooms hub; revisit if the section earns enough unique content.
