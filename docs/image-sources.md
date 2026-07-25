# Image Sources & Licensing Register

**Policy:** No image ships without an entry here. Two classes:
1. **Owned** — existing KD photos/logo re-used from the current site (owner's assets).
2. **Stock (temporary)** — premium paid stock proposed for licence; every entry is a *proposal with a licensing link*; nothing is embedded unlicensed. All stock images are placeholders pending the real photoshoot (photoshoot-brief.md) and are marked `REPLACE_WITH_REAL`.

**Hard rules:** No stock image may depict "our gym", "our rooms" or "our building" — stock appears only in generic editorial contexts (technique close-ups, abstract texture). The actual premises may only ever be shown with real photography. No cheap free-stock imagery.

## 1. Owned assets (carried over) — NOW IN USE

> Update (July 2026): the owner's photos below were downloaded from the live
> site and now ship in `/public/images/` (manifest with provenance + alt text:
> `src/data/images.ts`). Photos verifiably of the Lee Road studio (Monster G9,
> red/black tiles, fireplace, mirror wall) are captioned as the KD studio;
> other imagery published on the owner's site is used generically and flagged
> `owner-published` — **TODO_CONFIRM the owner holds licences for those**
> (`studio-2.jpg`, `studio-3.jpg`, `info-2.jpg`, `info-3.jpg`). The stock
> proposals in §2 remain open only for slots still using placeholder panels
> (rooms/blueprint graphics) and any future upgrades.

| Asset | Source (current site) | Used on | Notes |
|---|---|---|---|
| KD monogram logo (dark on light) | `/wp-content/uploads/2020/02/2.png` | Header (light mode), favicon, OG | Re-exported as SVG-quality PNG @2x; archived original |
| KD monogram logo (light on dark) | `/wp-content/uploads/2020/02/1.png` | Header on dark, footer | |
| KD master logo 2833×2833 | `/wp-content/uploads/2020/01/PERSONAL-TRAINING2.png` | Schema logo, OG image base | |
| Studio interior photo | `/wp-content/uploads/2025/12/1-1024x703.jpg` (gym-rent page) | `/gym-rent/` | Real current studio — verify owner wants it shown |
| Studio photo `DSC04761.jpg` | About page | `/about-us/` | Real studio photo |
| Hero/service photos `01-13-1.jpg`, `2.jpg`, `3.jpg`, `1t1.jpg`, `info-box-img-2/3.jpg` | Homepage slider/sections | Candidates for reuse | Owner-supplied; confirm rights & quality at retina sizes |

Not carried over: `Screenshot-2025-12-18-*.png` (screen captures — replace with real photography), template graphics (`dummy.png`, icon PNGs), 2020 generic stock (`person-holding-barbell-841130.jpg` etc. — Pexels-era files, replaced by curated picks below).

## 1b. Owner-supplied concept visualisation

| Asset | Source | Used on | Notes |
|---|---|---|---|
| `new-gym.png` (1672×941) | Supplied by owner, July 2026 (AI-generated visualisation) | Homepage expansion section, `/gym/` new-premises section | Always displayed with a visible "Concept visualisation" caption; never presented as a photograph of the premises. Replace with real photography after fit-out (photoshoot-brief.md). |

## 2. Proposed paid stock (to license before launch)

> Links point to the library search/asset pages for licensing. Asset IDs to be locked at purchase time by the owner/agency; descriptions and intended crops are fixed here. **None of these files are included in the repository** — the build ships with neutral art-directed gradient/texture placeholders until licences are purchased, at which point files drop into `/public/images/` under the exact filenames below.

| # | Page / section | Filename target | Description to match | Library | Licensing link | Crop | Alt text | Replace with real? |
|---|---|---|---|---|---|---|---|---|
| S1 | Home hero | `home-hero.jpg` | Female PT coaching a client mid-lift, dark moody gym, shallow DOF, no visible branding | Stocksy | https://www.stocksy.com/search/personal+trainer+coaching+dark+gym | 16:9 + 4:5 mobile | "Personal trainer coaching a client through a barbell lift" | YES — real KD session |
| S2 | 1-to-1 page header | `service-1to1.jpg` | Trainer spotting client on dumbbell press, warm light | Adobe Stock | https://stock.adobe.com/uk/search?k=personal+trainer+one+to+one+dumbbell | 3:2 | "One-to-one personal training session" | YES |
| S3 | Couples page header | `service-couples.jpg` | Two people training together with kettlebells, laughing, real-looking | Getty Images | https://www.gettyimages.co.uk/search/2/image?phrase=couple%20training%20kettlebell%20gym | 3:2 | "Couple training together with kettlebells" | YES |
| S4 | Rehab page header | `service-rehab.jpg` | Controlled mobility/banded knee work, clinical-calm tone | iStock | https://www.istockphoto.com/search/2/image?phrase=injury+rehabilitation+exercise+band | 3:2 | "Guided post-injury mobility exercise" | YES |
| S5 | 50+ page header | `service-50plus.jpg` | Confident 55–65yo lifting dumbbells, genuine, not patronising | Stocksy | https://www.stocksy.com/search/older+adult+strength+training | 3:2 | "Client in their fifties strength training with dumbbells" | YES |
| S6 | Perimenopause page header | `service-peri.jpg` | Woman ~45 mid squat/deadlift, strong and focused, editorial grade | Stocksy | https://www.stocksy.com/search/woman+40s+strength+training+barbell | 3:2 | "Woman in her forties strength training with a barbell" | YES |
| S7 | Rooms hub hero | `rooms-hero.jpg` | Bright empty modern treatment room, neutral palette, natural light — generic, NOT presented as KD's building | Adobe Stock | https://stock.adobe.com/uk/search?k=empty+treatment+room+natural+light+modern | 16:9 | "Bright modern treatment room with natural light" (caption: representative image — our rooms will be photographed on completion) | YES — mandatory |
| S8 | Treatment rooms page | `rooms-treatment.jpg` | Treatment couch + clean side unit, spa-clinical calm | Getty Images | https://www.gettyimages.co.uk/search/2/image?phrase=therapy%20treatment%20room%20interior%20clean | 3:2 | "Professional treatment room interior" (same caption rule) | YES — mandatory |
| S9 | Office rooms page | `rooms-office.jpg` | Small private office, desk + two chairs, warm daylight | Adobe Stock | https://stock.adobe.com/uk/search?k=small+private+office+room+daylight | 3:2 | "Compact private office room" (same caption rule) | YES — mandatory |
| S10 | Gym page (new premises section) | `gym-preview.jpg` | Premium empty strength gym, racks + daylight — captioned as inspiration for fit-out, not the actual site | Stocksy | https://www.stocksy.com/search/empty+gym+interior+daylight+racks | 16:9 | "Premium private gym interior" + caption | YES — mandatory |
| S11 | Results/testimonials band | `results-band.jpg` | Chalked hands gripping bar, close-up texture | iStock | https://www.istockphoto.com/search/2/image?phrase=chalk+hands+barbell+close+up | 21:9 | "Chalked hands gripping a barbell" | Optional |
| S12 | About page trainer section | — (owner photo required) | — | — | — | 4:5 | — | Real photo only — no stock permitted for the trainer |

## 3. Placeholder state shipped in this build

Until licences are purchased, all S-slots render as art-directed CSS gradient/texture panels generated in-code (charcoal → brand red), with descriptive `aria-label`s. This keeps the site fully presentable with **zero unlicensed pixels**. Swapping in a licensed file = dropping it into `/public/images/` with the target filename; components pick it up automatically (they check for file presence at build time via the image manifest in `src/data/images.ts`).
