# Redirect Map — old → new URLs

Principle: **almost nothing moves.** Every established page URL is reproduced unchanged in the rebuild. Redirects exist only for (a) the one mis-slugged blog post, (b) WordPress archive/utility URLs that have no equivalent in the new build, and (c) legacy redirects already in place today that must be preserved.

All redirects are permanent (301/308) and are implemented centrally in `next.config.ts` (`redirects()`), so they deploy with the site and are version-controlled.

## 1. Content moves

| Old URL | New URL | Reason |
|---|---|---|
| `/how-to-increase-mental-toughness-and-stay-strong-2/` | `/perimenopause-training-guide/` | Apr 2026 perimenopause article published on a recycled, topic-contradicting slug. Clean descriptive URL; article body, images and internal links updated to match. |

## 2. WordPress archives → blog index

| Old URL | New URL |
|---|---|
| `/category/diet/` | `/blog/` |
| `/category/fitness/` | `/blog/` |
| `/category/health/` | `/blog/` |
| `/category/lifestyle/` | `/blog/` |
| `/category/nutrition/` | `/blog/` |
| `/category/:slug*` (catch-all) | `/blog/` |
| `/tag/gym/`, `/tag/habits/`, `/tag/lifestyle/`, `/tag/nutrition/`, `/tag/:slug*` | `/blog/` |
| `/2020/02/`, `/2026/04/`, `/:year(\d{4})/:month(\d{2})/` | `/blog/` |
| `/feed/`, `/comments/feed/` | `/blog/` |

## 3. Preserved legacy redirects (exist on the current site — must not be lost)

| Old URL | New URL |
|---|---|
| `/couple-training/` | `/couples-training/` |
| `/author/websolution/` | `/` |
| `/author/:slug*` | `/` |

## 4. WordPress internals (no redirect — allowed to die)

`/wp-json/*`, `/xmlrpc.php`, `/wp-admin/*`, `/wp-login.php`, `/wp-content/uploads/*` → 404/410 after migration. Attachment and API URLs carry no search equity worth preserving; redirecting them would only mask real crawl errors. Content images are re-hosted under `/images/` with descriptive filenames.

## 5. URLs that intentionally do NOT change

`/`, `/about-us/`, `/gym-rent/`, `/1-to-1-training/`, `/couples-training/`, `/sport-rehabilitation/`, `/fitness-for-50/`, `/perimenopause-training/`, `/pricing-plans/`, `/contact-us/`, `/blog/`, `/break-your-bad-habits/`, `/10-ways-to-get-better-at-fitness/`, `/how-to-increase-mental-toughness-and-stay-strong/`, `/llms.txt`, `/robots.txt`, `/sitemap.xml` (index format changes from Rank Math's to Next.js's — allowed; Search Console re-submission is on the pre-launch checklist).

## 6. Post-launch verification

- Crawl the full list in sections 1–3 and assert single-hop 301s to the expected targets (no chains).
- Verify the 14 preserved URLs in section 5 return 200 with correct canonicals.
- Submit the new sitemap in Google Search Console; monitor Coverage for 404 spikes on `/wp-content/uploads/*` (expected, ignorable) vs content URLs (must be zero).
