import Link from "next/link";
import { business } from "@/data/business";

/** Mobile-only bottom conversion bar (hidden ≥ lg via CSS). */
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <Link
        href="/contact-us/"
        className="display-light bg-red px-4 pb-2.5 pt-3 text-center text-xl text-white"
      >
        Book consultation
      </Link>
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener"
        className="display-light bg-ink px-4 pb-2.5 pt-3 text-center text-xl text-white"
      >
        WhatsApp us
      </a>
    </div>
  );
}
