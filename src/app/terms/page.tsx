import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms of use for the KD Personal Training website.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="July 2026" crumbPath="/terms/">
      <p>
        This website is operated by {business.legalName}, an established personal training
        business in Blackheath, London. By using the site you accept these terms.
      </p>
      <h2>Website content</h2>
      <p>
        Content on this site is provided for general information about our services. While we
        keep it accurate and up to date, details such as pricing and availability may change —
        the price confirmed with you when you book is the price that applies. Where information
        about our new premises is described as &ldquo;to be confirmed&rdquo;, it is indicative
        and does not form an offer.
      </p>
      <h2>Not medical advice</h2>
      <p>
        Nothing on this website is medical advice. Always consult your GP before starting a new
        exercise programme, particularly if you have a health condition or are returning from
        injury. Training guidance we publish is general; your personal programme is built for you
        after an individual assessment.
      </p>
      <h2>Bookings and sessions</h2>
      <p>
        Session bookings, block purchases, cancellation notice and refund arrangements are agreed
        directly with us when you book and are confirmed in writing. Room-rental arrangements are
        subject to a separate licence agreement.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The KD Personal Training name, logo and website content belong to {business.legalName}{" "}
        and may not be reproduced without permission.
      </p>
      <h2>Liability</h2>
      <p>
        We do not exclude liability where it would be unlawful to do so. We are not responsible
        for the content of external websites linked from this site.
      </p>
      <h2>Contact</h2>
      <p>
        {business.legalName}, {business.currentAddress.display} · {business.email} ·{" "}
        {business.phoneDisplay}
      </p>
    </LegalPage>
  );
}
