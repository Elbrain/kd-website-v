import Link from "next/link";

export interface MarqueeItem {
  label: string;
  href: string;
}

/**
 * Scrolling ticker strip of real links — pure CSS animation, pauses on
 * hover so items are easy to click. The first copy of the track carries
 * the focusable links; the duplicate (needed for the seamless loop) is
 * aria-hidden and unfocusable.
 */
export function Marquee({
  items,
  tone = "dark",
}: {
  items: MarqueeItem[];
  tone?: "dark" | "light";
}) {
  const row = (decorative: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={decorative || undefined}
    >
      {items.map((item) => (
        <span key={item.label} className="display-light flex items-center text-2xl sm:text-3xl">
          <Link
            href={item.href}
            tabIndex={decorative ? -1 : undefined}
            className={`transition-colors ${
              tone === "dark"
                ? "text-white/90 hover:text-red-bright"
                : "text-ink hover:text-red"
            }`}
          >
            {item.label}
          </Link>
          <span aria-hidden className={`mx-6 text-xl ${tone === "dark" ? "text-red-bright" : "text-red"}`}>
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <nav
      aria-label="Highlights"
      className={`marquee overflow-hidden border-y py-3.5 ${
        tone === "dark" ? "border-white/10 bg-charcoal" : "border-line bg-white"
      }`}
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </nav>
  );
}
