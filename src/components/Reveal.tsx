"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-entrance wrapper: children rise+fade in when they enter the
 * viewport. Pure CSS transition (.reveal/.in-view); this component only
 * toggles the class.
 *
 * Implementation note: uses a rAF-throttled rect check instead of
 * IntersectionObserver — IO under-reports inside embedded/iframe contexts
 * (it intersects with the host page's viewport), which left sections
 * invisible. The rect check behaves identically everywhere and reveals
 * above-the-fold content immediately on mount. Listeners detach once
 * revealed. prefers-reduced-motion is handled in CSS (no animation).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  /** ms — stagger siblings with 80–120ms steps */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // State (not classList) so the class survives re-renders — an imperative
  // classList.add gets wiped whenever React re-writes className (e.g. HMR).
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    let revealed = false;

    const cleanup = () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };

    const check = () => {
      ticking = false;
      if (revealed) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh - 40 && r.bottom > 0) {
        revealed = true;
        setInView(true);
        cleanup();
      }
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        // setTimeout rather than requestAnimationFrame: rAF is suspended in
        // hidden/embedded documents, which would leave sections unrevealed.
        setTimeout(check, 60);
      }
    };

    check();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
