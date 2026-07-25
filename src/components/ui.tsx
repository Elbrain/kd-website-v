import Link from "next/link";
import { business } from "@/data/business";

/** Section heading with ruled eyebrow — the recurring KD pattern. */
export function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p
          className={`eyebrow eyebrow-rule mb-5 ${tone === "dark" ? "text-gold" : "text-brass"}`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`display text-3xl sm:text-4xl lg:text-[2.8rem] ${
          tone === "dark" ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </Tag>
    </div>
  );
}

/** Art-directed placeholder panel — stands in for unlicensed imagery. */
export function ArtPanel({
  label,
  calm = false,
  className = "",
}: {
  label: string;
  calm?: boolean;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${calm ? "art-panel-calm" : "art-panel"} grain ${className}`}
    />
  );
}

/**
 * Honest placeholder for the future premises' rooms: an architectural
 * blueprint-style panel with a drawn room outline. Reads as an intentional
 * plan graphic, not a missing image — real photography replaces it after
 * fit-out (docs/photoshoot-brief.md).
 */
export function BlueprintPanel({
  label,
  caption,
  className = "",
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`relative ${className}`}>
      <div role="img" aria-label={label} className="blueprint absolute inset-0">
        <svg
          viewBox="0 0 400 300"
          className="h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* room outline */}
          <rect x="70" y="48" width="260" height="204" fill="none" stroke="#5d6b52" strokeWidth="2.5" />
          {/* door swing */}
          <path d="M 70 210 A 42 42 0 0 1 112 252" fill="none" stroke="#5d6b52" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="70" y1="252" x2="70" y2="210" stroke="#ece7db" strokeWidth="4" />
          {/* window */}
          <line x1="150" y1="48" x2="250" y2="48" stroke="#ece7db" strokeWidth="5" />
          <line x1="150" y1="48" x2="250" y2="48" stroke="#5d6b52" strokeWidth="1.5" strokeDasharray="10 6" />
          {/* treatment couch / desk */}
          <rect x="150" y="110" width="100" height="52" fill="none" stroke="#5d6b52" strokeWidth="1.8" />
          <line x1="150" y1="123" x2="250" y2="123" stroke="#5d6b52" strokeWidth="1" />
          {/* dimension marks */}
          <line x1="70" y1="272" x2="330" y2="272" stroke="#5d6b52" strokeWidth="1" />
          <line x1="70" y1="266" x2="70" y2="278" stroke="#5d6b52" strokeWidth="1" />
          <line x1="330" y1="266" x2="330" y2="278" stroke="#5d6b52" strokeWidth="1" />
          <text x="200" y="290" textAnchor="middle" fill="#5d6b52" fontSize="11" fontFamily="monospace">
            dimensions to be confirmed
          </text>
        </svg>
      </div>
      {caption && (
        <figcaption className="absolute bottom-3 left-3 bg-paper/90 px-3 py-1.5 text-xs text-euca-deep">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Primary conversion band used at the foot of training pages. */
export function TrialCta({
  title = "First timers are welcome",
  copy = business.offer.detail,
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-rule mb-5 text-brass">{business.offer.headline}</p>
          <h2 className="display text-4xl text-ink sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg text-stone">{copy}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact-us/" className="btn btn-primary">
              Book your free session
            </Link>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="btn btn-outline"
            >
              WhatsApp us
            </a>
            <a href={`tel:${business.phone}`} className="btn btn-outline">
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** FAQ list rendered with native details/summary (zero JS). */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="faq-item group py-4">
          <summary className="flex items-center justify-between gap-4 text-lg font-medium text-ink">
            {f.q}
            <span aria-hidden className="faq-icon shrink-0 text-2xl leading-none text-brass">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-stone">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Visible, honest "to be confirmed" chip for placeholder facts. */
export function Tbc({ children = "To be confirmed" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-dashed border-stone/50 px-2 py-0.5 text-[0.8rem] uppercase tracking-wide text-stone">
      {children}
    </span>
  );
}
