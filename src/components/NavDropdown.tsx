"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/nav";

/**
 * Desktop nav item with a controlled dropdown. State-driven (not pure CSS)
 * so the panel reliably closes after a link is clicked, on navigation and
 * when the pointer leaves — pure :hover/:focus-within kept panels stuck
 * open after click because the link retained focus.
 */
export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change (render-time adjustment)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  const close = () => {
    setOpen(false);
    // drop focus so :focus-within styling can't re-open it
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        onFocus={() => setOpen(true)}
        onClick={close}
        aria-expanded={open}
        aria-haspopup="true"
        className="nav-link flex items-center gap-1.5 whitespace-nowrap py-6 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-paper/80 transition-colors hover:text-paper xl:tracking-[0.18em]"
      >
        {item.label}
        <svg
          aria-hidden
          viewBox="0 0 10 6"
          className={`mb-0.5 h-1.5 w-2.5 fill-none stroke-current stroke-[1.75] transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" />
        </svg>
      </Link>
      <div
        className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2 transition-all ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="border border-line-dark bg-espresso py-2 shadow-xl shadow-black/30">
          {item.children?.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                onFocus={() => setOpen(true)}
                className="block whitespace-nowrap px-5 py-2.5 text-[0.95rem] text-mist transition-colors hover:bg-ink hover:text-gold"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
