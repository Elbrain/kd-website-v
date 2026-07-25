"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ShowcaseItem {
  href: string;
  title: string;
  tag: string; // short readable one-liner
  img: { src: string; alt: string };
  accent?: boolean; // studio-hire row gets the dark treatment
}

/**
 * Editorial service index: a list of large, fully readable serif titles.
 * Hovering (or focusing) a row lights it up and swaps the photo in the
 * side panel — no text sits on top of imagery, so readability is total.
 * On mobile the panel hides and each row shows its own photo thumbnail.
 */
export function ServicesShowcase({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      {/* Rows */}
      <ul className="border-t border-line">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <li key={item.href} className="border-b border-line">
              <Link
                href={item.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 pl-1 pr-2 transition-all duration-300 sm:gap-6 ${
                  isActive ? "bg-ink pl-4 sm:pl-6" : "bg-transparent"
                }`}
              >
                {/* number */}
                <span
                  className={`display-light text-lg transition-colors sm:text-xl ${
                    isActive ? "text-gold" : "text-stone/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* title + tag */}
                <span className="min-w-0">
                  <span
                    className={`display block text-2xl leading-tight transition-colors sm:text-4xl ${
                      isActive ? "text-paper" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`mt-1.5 block text-[0.95rem] leading-snug transition-colors ${
                      isActive ? "text-mist" : "text-stone"
                    }`}
                  >
                    {item.tag}
                  </span>
                  {/* mobile thumbnail */}
                  <span className="card-img relative mt-3 block aspect-[16/7] overflow-hidden lg:hidden">
                    <Image
                      src={item.img.src}
                      alt=""
                      fill
                      sizes="90vw"
                      className="photo object-cover"
                    />
                  </span>
                </span>

                {/* arrow */}
                <span
                  aria-hidden
                  className={`flex h-11 w-11 shrink-0 items-center justify-center border text-lg transition-all duration-300 ${
                    isActive
                      ? "border-gold/60 text-gold"
                      : "border-line bg-paper text-ink group-hover:border-ink"
                  }`}
                >
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Photo panel (desktop) */}
      <div className="relative hidden lg:block">
        <div className="sticky top-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
            {items.map((item, i) => (
              <Image
                key={item.img.src}
                src={item.img.src}
                alt={i === active ? item.img.alt : ""}
                fill
                sizes="42vw"
                className={`photo object-cover transition-all duration-700 ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                }`}
                aria-hidden={i !== active}
              />
            ))}
            {/* active label chip */}
            <p className="absolute bottom-4 left-4 z-[1] border border-gold/40 bg-ink/90 px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-gold">
              {items[active].title}
            </p>
          </div>
          <span
            aria-hidden
            className="absolute -bottom-3 -right-3 -z-[1] h-full w-full border border-brass/40"
          />
        </div>
      </div>
    </div>
  );
}
