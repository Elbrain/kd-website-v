import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { getService } from "@/data/services";
import { serviceImages } from "@/data/images";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript } from "@/components/SchemaScript";
import { articleSchema } from "@/lib/schema";
import { TrialCta } from "@/components/ui";

/**
 * Blog posts live at root level (e.g. /break-your-bad-habits/) to preserve
 * the established URL pattern from the WordPress site. Static routes always
 * win over this dynamic segment; unknown slugs 404.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/${post.slug}/`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = post.relatedServiceSlug ? getService(post.relatedServiceSlug) : undefined;
  const relatedImg = related ? serviceImages[related.slug] : undefined;
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SchemaScript schema={articleSchema(post)} />

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Breadcrumbs
            tone="dark"
            crumbs={[
              { name: "Blog", path: "/blog/" },
              { name: post.title, path: `/${post.slug}/` },
            ]}
          />
          <p className="eyebrow mb-4 text-gold">
            <time dateTime={post.datePublished}>{dateFmt.format(new Date(post.datePublished))}</time>{" "}
            · {post.readingMinutes} min read
          </p>
          <h1 className="display max-w-4xl text-3xl text-paper sm:text-5xl">{post.title}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,46rem)_1fr] lg:gap-16">
          <article>
            <div className="prose-kd">
              {post.sections.map((s, i) => (
                <section key={i}>
                  {s.h2 && <h2>{s.h2}</h2>}
                  {s.h3 && <h3>{s.h3}</h3>}
                  {s.paragraphs?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                  {s.list && (
                    <ul>
                      {s.list.map((li) => (
                        <li key={li.slice(0, 40)}>{li}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>

          {/* Sidebar — sticky on desktop, stacks below the article on mobile */}
          <aside className="lg:pt-2">
            <div className="space-y-6 lg:sticky lg:top-24">
              {related && relatedImg && (
                <div className="card-lift border border-line bg-white">
                  <div className="card-img relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={relatedImg.src}
                      alt={relatedImg.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="photo object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow text-[0.72rem] text-brass">Related service</p>
                    <h2 className="display mt-1 text-2xl text-ink">{related.name}</h2>
                    <p className="mt-2 text-sm text-stone">{related.card}</p>
                    <Link href={`/${related.slug}/`} className="btn btn-primary mt-4 w-full text-base">
                      Explore {related.shortName}
                    </Link>
                  </div>
                </div>
              )}

              <div className="border border-line bg-white p-6">
                <p className="eyebrow text-[0.72rem] text-brass">Latest posts</p>
                <ul className="mt-3 divide-y divide-line">
                  {others.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}/`} className="group block py-3">
                        <p className="text-xs text-stone">
                          {dateFmt.format(new Date(p.datePublished))}
                        </p>
                        <p className="display mt-0.5 text-xl leading-tight text-ink transition-colors group-hover:text-brass">
                          {p.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ink p-6">
                <p className="eyebrow text-[0.72rem] text-gold">{business.offer.headline}</p>
                <p className="display mt-2 text-2xl text-paper">Train with KD</p>
                <p className="mt-2 text-sm text-mist">
                  A free 30-minute intro session in a completely private Blackheath studio.
                </p>
                <Link href="/contact-us/" className="btn btn-primary mt-4 w-full text-base">
                  Book your free session
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <TrialCta />
    </>
  );
}
