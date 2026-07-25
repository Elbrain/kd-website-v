import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="eyebrow text-brass">404</p>
      <h1 className="display mt-3 text-3xl text-ink sm:text-[2.6rem]">
        That page has done a runner
      </h1>
      <p className="mt-5 max-w-xl text-stone">
        The page you&apos;re after doesn&apos;t exist — it may have moved during our website
        rebuild. Try one of these instead:
      </p>
      <ul className="mt-6 flex flex-wrap gap-4">
        <li>
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href="/personal-training/" className="btn btn-outline">
            Personal training
          </Link>
        </li>
        <li>
          <Link href="/rooms-to-rent/" className="btn btn-outline">
            Rooms to rent
          </Link>
        </li>
        <li>
          <Link href="/contact-us/" className="btn btn-outline">
            Contact us
          </Link>
        </li>
      </ul>
    </section>
  );
}
