"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/nav";
import { business } from "@/data/business";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close when the route changes (render-time adjustment, no effect needed)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  // Lock scroll + Escape to close
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* absolute (not fixed): the header's backdrop-blur makes it the
          containing block for fixed descendants, which collapsed the panel.
          Anchored below the sticky header with an explicit viewport height. */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-40 h-[calc(100svh-72px)] overflow-y-auto bg-paper px-6 pb-10 pt-4"
        >
          <nav aria-label="Mobile">
            <ul className="divide-y divide-line">
              <li>
                <Link href="/" className="display-light block py-4 text-3xl text-ink">
                  Home
                </Link>
              </li>
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="display-light block py-4 text-3xl text-ink">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="pb-4 pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-1.5 text-stone">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/contact-us/" className="btn btn-primary">
              Book consultation
            </Link>
            <a href={`tel:${business.phone}`} className="btn btn-outline">
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
