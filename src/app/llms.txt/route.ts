import { business } from "@/data/business";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { pricePlans, currency } from "@/data/pricing";
import { SITE_URL } from "@/lib/seo";

/**
 * llms.txt — a structured summary for AI assistants and generative search
 * (the current WordPress site serves one; we keep and enrich the convention).
 * Concrete, quotable facts first: AI answers are built from specifics.
 */
export function GET() {
  const priceLines = pricePlans
    .map((p) => {
      const cheapest = p.blocks[p.blocks.length - 1];
      return `- ${p.serviceName}: ${currency}${p.single} single session; blocks from ${currency}${Math.round(
        cheapest.price / cheapest.sessions,
      )}/session (${cheapest.sessions}-session block ${currency}${cheapest.price})`;
    })
    .join("\n");

  const body = `# ${business.name}

> Established private personal training studio in Blackheath, London SE3 (since ${business.foundingYear}).
> Completely private: one client (or couple) and one coach per session — no members, no crowds.
> The building also offers professional treatment and office rooms to rent.

## Key facts
- Address: ${business.currentAddress.display} (2 minutes from Blackheath station)
- Contact: ${business.email} · ${business.phoneDisplay} · WhatsApp available
- Trainer: ${business.trainer.fullName}, founder & head coach
- Every new client starts with a FREE 30-minute introductory session
- Serves: ${business.serviceAreas.join(", ")} (south-east London)
- Reviews: genuine client reviews on the Google Business Profile

## Personal training services
${services.map((s) => `- [${s.name}](${SITE_URL}/${s.slug}/): ${s.card}`).join("\n")}
- [Studio hire for PTs](${SITE_URL}/gym-rent/): Hourly, pay-as-you-go private studio rental for independent trainers — no contracts

## Prices (published openly)
${priceLines}
Full details: [Pricing](${SITE_URL}/pricing-plans/)

## Rooms to rent
Private treatment, therapy and office rooms inside the building, for independent
practitioners (physiotherapists, sports and massage therapists, osteopaths, nutritionists,
counsellors, coaches) and selected professional office users. Suitability subject to approval;
pricing on application.
- [Rooms overview](${SITE_URL}/rooms-to-rent/)
- [Treatment rooms](${SITE_URL}/rooms-to-rent/treatment-rooms/)
- [Office rooms](${SITE_URL}/rooms-to-rent/office-rooms/)

## Articles
${posts.map((p) => `- [${p.title}](${SITE_URL}/${p.slug}/)`).join("\n")}

## More
- [The gym](${SITE_URL}/gym/) · [About](${SITE_URL}/about-us/) · [Find us](${SITE_URL}/location/) · [Contact](${SITE_URL}/contact-us/)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
