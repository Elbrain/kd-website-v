import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy — KD Personal Training",
  description: "How the KD Personal Training website uses cookies.",
  path: "/cookie-policy/",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="July 2026" crumbPath="/cookie-policy/">
      <p>
        This website is built to work without setting cookies for marketing or advertising, and
        it sets no cookies at all unless a feature you use requires one.
      </p>
      <h2>Strictly necessary</h2>
      <p>
        Essential technical cookies may be set by our hosting platform to serve the site securely
        (for example, load balancing). These require no consent under UK PECR.
      </p>
      <h2>Analytics</h2>
      <p>
        If we enable analytics in future, we will use a privacy-respecting configuration, update
        this page first, and ask for consent where the law requires it. As of the date above, no
        analytics cookies are set.
      </p>
      <h2>Embedded maps</h2>
      <p>
        Our location page embeds a Google Map. Google may set cookies when the map loads; see
        Google&apos;s privacy policy for details. If you prefer, you can use the written
        directions on the same page instead.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about cookies on this site: {business.email}.
      </p>
    </LegalPage>
  );
}
