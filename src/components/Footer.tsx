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
            <Image
              src="/logo-kd-serif-white.png"
              alt="KD Personal Training"
              width={54}
              height={56}
              className="h-16 w-auto"
            />
            <address className="mt-5 not-italic leading-relaxed">
              {address.display}
              <br />
              <a href={`tel:${business.phone}`} className="hover:text-paper">
                {business.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="hover:text-paper">
                {business.email}
              </a>
            </address>
            {isMoving() && (
              <p className="mt-4 text-sm">
                <span className="text-gold">Expanding:</span> our new, larger Blackheath
                premises opens {business.openingDateLabel}.{" "}
                <Link href="/location/" className="underline hover:text-paper">
                  Details
                </Link>
              </p>
            )}
            <div className="mt-5 flex gap-4">
              <a href={business.social.facebook} rel="noopener" target="_blank" className="hover:text-paper">
                Facebook
              </a>
              <a href={business.social.instagram} rel="noopener" target="_blank" className="hover:text-paper">
                Instagram
              </a>
              <a href={business.googleReviewsUrl} rel="noopener" target="_blank" className="hover:text-paper">
                Google Reviews
              </a>
            </div>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-gold">Personal Training</h2>
            <ul className="space-y-2.5">
              {footerNav.training.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-gold">The Building</h2>
            <ul className="space-y-2.5">
              {footerNav.building.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-gold">Company</h2>
            <ul className="space-y-2.5">
              {footerNav.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line-dark pt-6 text-sm">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved. Established{" "}
            {business.foundingYear} in Blackheath, London.
          </p>
        </div>
      </div>
    </footer>
  );
}
