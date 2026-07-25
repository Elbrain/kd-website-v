# Pre-Launch Checklist

## Content & facts
- [x] Current website audit completed (docs/current-site-audit.md)
- [x] Old URLs documented (docs/content-inventory.md)
- [ ] Business address verified with owner (Lee Road remains operational NAP until move)
- [ ] Move status + opening date verified (`moveStatus`, `openingDateLabel` in src/data/business.ts)
- [ ] All `TODO_CONFIRM_*` placeholders resolved or consciously left visible (grep the repo: `grep -r TODO_CONFIRM src/`)
- [ ] Room count/specs/pricing verified — rooms remain "to be confirmed" until then
- [ ] PT prices re-verified against owner's current price list
- [ ] Trainer bio + qualifications confirmed; trainer photo licensed/approved
- [ ] Testimonials: owner approval for any quoted Google reviews on /results/
- [ ] Legal pages reviewed by owner (company number, registered office, ICO position)
- [ ] British English pass (no US spellings): `grep -riE "\b(center|color |favorite|organize|program )\b" src/content/`

## Technical
- [ ] `npm run build` clean (no errors, no type errors)
- [ ] `npm run lint` clean
- [ ] Redirects tested: every row of docs/redirect-map.md returns single-hop 301 to the expected target
- [ ] All 14 preserved URLs return 200 with correct canonical
- [ ] Broken-link crawl of the built site (zero internal 404s)
- [ ] Custom 404 renders with navigation
- [ ] robots.txt reachable and permits crawling; sitemap.xml lists all indexable pages and only those
- [ ] Structured data validated (Google Rich Results test) on: home, one service page, rooms hub, one blog post, contact
- [ ] No schema for unconfirmed data (no fake offers/prices/hours)
- [ ] OG/Twitter cards verified in a share debugger
- [ ] Favicon set (KD monogram) at all sizes

## Forms & tracking
- [ ] PT enquiry form: submission tested end-to-end (delivery to `CONTACT_FORM_TO` inbox)
- [ ] Rooms enquiry form: submission tested end-to-end, viewing-request flag received
- [ ] Form spam protection active (honeypot + time-gate)
- [ ] Success/error states render; success page is noindex
- [ ] Conversion events firing distinctly: pt_enquiry, rooms_enquiry, viewing_request, call_click, whatsapp_click, directions_click
- [ ] Analytics env var set (or consciously left disabled)

## Experience
- [ ] Mobile (375px), tablet (768px), desktop (1280px+) walkthrough of every page — no horizontal overflow
- [ ] Mobile navigation opens/closes/traps focus correctly
- [ ] Keyboard-only pass on nav + both forms
- [ ] Colour-contrast spot check (body text ≥ 4.5:1)
- [ ] Images: alt text present; hero LCP image preloaded; no layout shift on fonts (next/font)
- [ ] Lighthouse: Performance/SEO/Accessibility/Best-practices ≥ 90 on home, one service page, rooms hub (mobile)

## Migration
- [ ] Image licences purchased for all in-use stock slots (docs/image-sources.md) or placeholders consciously kept
- [ ] DNS cutover plan: keep WordPress reachable until new site verified; TTL lowered in advance
- [ ] Google Search Console: new sitemap submitted; re-slugged article's new URL requested for indexing
- [ ] GBP untouched at launch (address changes only at NEW_LOCATION_OPEN — see docs/location-migration-plan.md)
- [ ] Uptime + 404 monitoring for the first week post-launch
- [ ] WordPress export/backup archived before decommissioning
