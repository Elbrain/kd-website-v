import Link from "next/link";
import Image from "next/image";
import { business, operationalAddress, isMoving } from "@/data/business";
import { footerNav } from "@/data/nav";

export function Footer() {
  const address = operationalAddress();
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + NAP */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo-kd-mark-white.png" alt="" width={61} height={40} className="h-10 w-auto" />
              <span className="kd-mark text-xl uppercase text-white">KD Personal Training</span>
            </div>
            <address className="mt-5 not-italic leading-relaxed">
              {address.display}
              <br />
              <a href={`tel:${business.phone}`} className="hover:text-white">
                {business.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </address>
            {isMoving() && (
              <p className="mt-4 text-sm">
                <span className="text-red-bright">Expanding:</span> our new, larger Blackheath
                premises opens {business.openingDateLabel}.{" "}
                <Link href="/location/" className="underline hover:text-white">
                  Details
                </Link>
              </p>
            )}
            <div className="mt-5 flex gap-4">
              <a href={business.social.facebook} rel="noopener" target="_blank" className="hover:text-white">
                Facebook
              </a>
              <a href={business.social.instagram} rel="noopener" target="_blank" className="hover:text-white">
                Instagram
              </a>
              <a href={business.googleReviewsUrl} rel="noopener" target="_blank" className="hover:text-white">
                Google Reviews
              </a>
            </div>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-white">Personal Training</h2>
            <ul className="space-y-2.5">
              {footerNav.training.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-white">The Building</h2>
            <ul className="space-y-2.5">
              {footerNav.building.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-white">Company</h2>
            <ul className="space-y-2.5">
              {footerNav.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved. Established{" "}
            {business.foundingYear} in Blackheath, London.
          </p>
        </div>
      </div>
    </footer>
  );
}
