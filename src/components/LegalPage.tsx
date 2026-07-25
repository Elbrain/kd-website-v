import { Breadcrumbs } from "@/components/Breadcrumbs";

/** Shared shell for legal templates. */
export function LegalPage({
  title,
  updated,
  crumbPath,
  children,
}: {
  title: string;
  updated: string;
  crumbPath: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6">
          <Breadcrumbs tone="dark" crumbs={[{ name: title, path: crumbPath }]} />
          <h1 className="display max-w-3xl text-3xl text-paper sm:text-[2.4rem]">{title}</h1>
          <p className="mt-3 text-sm text-mist">Last updated: {updated}</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="prose-kd">{children}</div>
        <p className="mt-10 max-w-2xl border-l border-brass pl-4 text-sm text-stone">
          This page is a template prepared for KD Personal Training LTD and must be reviewed by
          the business owner (and, where appropriate, a legal adviser) before launch — including
          confirming the company registration number and registered office
          (TODO_CONFIRM_COMPANY_DETAILS).
        </p>
      </div>
    </>
  );
}
