import Link from "next/link";
import { SchemaScript } from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ crumbs, tone = "light" }: { crumbs: Crumb[]; tone?: "light" | "dark" }) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  const muted = tone === "dark" ? "text-mist" : "text-stone";
  const strong = tone === "dark" ? "text-white" : "text-ink";
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <SchemaScript schema={breadcrumbSchema(all)} />
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${muted}`}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>/</span>}
              {last ? (
                <span aria-current="page" className={strong}>
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
