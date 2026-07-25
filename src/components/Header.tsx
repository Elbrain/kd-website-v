import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/nav";
import { MobileNav } from "@/components/MobileNav";
import { NavDropdown } from "@/components/NavDropdown";

/* Solid noir bar — no backdrop-blur here: it would become the containing
   block for the MobileNav panel and collapse it. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-4 sm:px-6 lg:h-[84px] xl:gap-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="KD Personal Training — home"
        >
          <Image
            src="/logo-kd-mark-white.png"
            alt=""
            width={76}
            height={50}
            priority
            className="h-[46px] w-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] lg:h-[52px]"
          />
          <span className="hidden md:block">
            <span className="block text-[0.78rem] font-medium uppercase tracking-[0.3em] text-paper">
              Personal Training
            </span>
            <span className="mt-1 block text-[0.5rem] uppercase tracking-[0.3em] text-paper/50">
              Strength · Wellness · Healthy Living
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-end gap-4 xl:gap-6">
            {mainNav.map((item) =>
              item.children ? (
                <NavDropdown key={item.href} item={item} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link flex items-center whitespace-nowrap py-6 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-paper/80 transition-colors hover:text-paper xl:tracking-[0.18em]"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link
            href="/contact-us/"
            className="btn btn-outline-light whitespace-nowrap px-5 py-3.5 text-[0.72rem]"
          >
            Book consultation
          </Link>
        </div>

        <div className="ml-auto lg:ml-0 lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
