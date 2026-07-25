@AGENTS.md

# KD Personal Training — Website V2 (design exploration)

## What this project is

A **full redesign** of the KD Personal Training website. This repo is a fork of
`../kd` (github.com/Elbrain/kd-website → kd-website-flame.vercel.app — V1, poster-style
design, KEEP UNTOUCHED). The client (Karolina, the gym owner) rejected V1's overall look;
V2 must be a **completely different visual design with exactly the same content**.

## Hard rules

1. **Do not change content, copy, data or SEO.** Everything in `src/data/*` (business facts,
   services, pricing, rooms, posts, FAQs), all URLs, metadata targeting, structured data and
   redirects in `next.config.ts` stay as they are. Redesign = components, layouts, globals.css.
2. **No relocation narrative anywhere.** The gym is presented as simply established
   (`moveStatus: CURRENT_LOCATION` in `src/data/business.ts`). Never mention moving,
   September 2026, "new premises", waiting lists. NAP stays Lee Road until the client
   confirms the real new address — never invent addresses, prices, room specs, testimonials.
3. The "new gym" photo (`public/images/new-gym.png`) is an owner-supplied AI render —
   always keep a discreet "Interior visualisation" caption on it.
4. British English only. No fitness calculators. Mobile-first, no horizontal overflow.
5. Header logo: use `public/logo-kd-mark.png` (black, no wordmark) / `logo-kd-mark-white.png`
   (white, for dark surfaces). Client approved: mark only, ~70–80% of nav height, subtle shadow.

## Design direction

The client dislikes: the V1 poster style (huge condensed Teko type, red discs, marquee),
outline/ghost lettering, empty stripe textures. Her own logo mock (cream/ivory background,
elegant high-contrast serifs, gold + black, leaf motif) signals her taste: **soft premium
wellness, not sport poster**. She has ChatGPT-generated design prototypes — the user will
paste them into the chat; **build the design system from those prototypes**, not from
assumptions. Confirm palette/typography against them before mass-applying.

Useful mechanics that already work and can be re-styled rather than rebuilt: `Reveal`
(scroll entrance), `NavDropdown` (closes properly), `MobileNav` (full-height panel — do NOT
put backdrop-blur on the header: it breaks the panel's positioning), `ServicesShowcase`
(hover list + photo panel), `EnquiryForm` (dual PT/rooms modes), `BlueprintPanel` (honest
room placeholder). Design tokens live in `globals.css` `@theme` — repalette there first.

## Deployment / workflow

- Repo: github.com/Elbrain/kd-website-v (branch `main`). Commits MUST be authored as
  `Elbrain <25177570+Elbrain@users.noreply.github.com>` (Vercel Pro blocks unmatched
  authors; repo-local git config is already set). Pushes auto-deploy once the user imports
  the repo in Vercel.
- Local: port **3020** (`npm run dev` / `npm run start`, `.claude/launch.json` names:
  kd2-prod, kd2-dev). V1 runs on 3010; both can run simultaneously. Port 3000 is occupied
  by an unrelated project (hubline-website) — never kill it.
- Verify before pushing: `npm run lint`, `npm run build`, check pages at 375px/1024px/1440px.
  Testing gotchas in the embedded browser pane: screenshots time out (verify via
  read_page/javascript_tool); programmatic scrolling needs `behavior: "instant"` (smooth
  scroll + rAF are frozen in a hidden pane; the site's CSS has `scroll-behavior: smooth`).

## Who's who

- User (Alex) — the developer's side, speaks Russian, wants bold decisive execution with
  verification; dislikes timid minimalism AND unreadable text on photos.
- Client (Karolina) — KD's owner-trainer; final taste authority.
