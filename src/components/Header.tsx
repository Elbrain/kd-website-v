import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/nav";
import { MobileNav } from "@/components/MobileNav";
import { NavDropdown } from "@/components/NavDropdown";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-8 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="KD Personal Training — home"
        >
          <Image
            src="/logo-kd-mark.png"
            alt=""
            width={85}
            height={56}
            priority
            className="h-14 w-auto drop-shadow-[0_1px_1.5px_rgba(41,40,45,0.3)]"
          />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-end gap-5 xl:gap-8">
            {mainNav.map((item) =>
              item.children ? (
                <NavDropdown key={item.href} item={item} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link display-light flex items-center whitespace-nowrap py-6 text-[1.3rem] leading-none text-ink transition-colors hover:text-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link href="/contact-us/" className="btn btn-primary whitespace-nowrap text-lg">
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
