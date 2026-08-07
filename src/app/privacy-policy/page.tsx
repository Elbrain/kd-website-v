import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — KD Personal Training",
  description: "How KD Personal Training LTD collects, uses and protects your personal data.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026" crumbPath="/privacy-policy/">
      <p>
        This policy explains how {business.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
        collects, uses and protects personal data when you use this website or contact us. We are
        the data controller for the purposes of UK data protection law (UK GDPR and the Data
        Protection Act 2018).
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          Enquiry details you submit through our forms: your name, contact details, and the
          information you choose to share about your goals or, for room-rental enquiries, your
          business and requirements.
        </li>
        <li>Correspondence if you email, call or message us on WhatsApp.</li>
        <li>Basic technical data needed to serve the website securely (such as IP addresses in server logs).</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and arrange sessions, viewings or bookings (legitimate interests / steps prior to a contract).</li>
        <li>To deliver our services to you as a client (performance of a contract).</li>
        <li>To keep basic business records we are legally required to hold.</li>
      </ul>
      <p>
        We do not sell your data, and we do not use it for third-party marketing. We only send
        you marketing messages if you have asked us to, and you can opt out at any time.
      </p>
      <h2>Health information</h2>
      <p>
        Information about injuries or health conditions that you share so we can train you safely
        is special category data. We ask only for what is relevant, use it only to plan and
        deliver safe training, and never share it except where the law requires.
      </p>
      <h2>Who we share data with</h2>
      <p>
        Trusted service providers who help us run the business (such as our website hosting and
        email delivery providers), under contracts that protect your data. We do not share your
        details with anyone else unless required by law.
      </p>
      <h2>How long we keep it</h2>
      <p>
        Enquiries that do not become clients: up to 12 months. Client records: for the duration
        of our work together plus the period required for legal and accounting purposes.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask for a copy of your data, ask us to correct or delete it, object to or
        restrict processing, and complain to the Information Commissioner&apos;s Office
        (ico.org.uk). To exercise any right, contact us at {business.email}.
      </p>
      <h2>Contact</h2>
      <p>
        {business.legalName}, {business.currentAddress.display} · {business.email} ·{" "}
        {business.phoneDisplay}
      </p>
    </LegalPage>
  );
}
