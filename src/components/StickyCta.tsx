import Link from "next/link";
import { business } from "@/data/business";

/** Mobile-only bottom conversion bar (hidden ≥ lg via CSS). */
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <Link
        href="/contact-us/"
        className="bg-brass whitespace-nowrap px-2 py-4 text-center text-[0.66rem] font-medium uppercase tracking-[0.12em] text-paper"
      >
        Book consultation
      </Link>
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener"
        className="bg-ink whitespace-nowrap px-2 py-4 text-center text-[0.66rem] font-medium uppercase tracking-[0.12em] text-paper"
      >
        WhatsApp us
      </a>
    </div>
  );
}
