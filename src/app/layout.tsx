import type { Metadata } from "next";
import { Teko, Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { SchemaScript } from "@/components/SchemaScript";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { business } from "@/data/business";
import { SITE_URL } from "@/lib/seo";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blackheath Personal Training | Private Fitness Studio in Blackheath, London",
    template: `%s | ${business.name}`,
  },
  description:
    "KD Personal Training is an established private personal training studio in Blackheath, London SE3 — 1-to-1 coaching, couples training, over-50s and perimenopause programmes. Free 30-minute intro session.",
  icons: { icon: "/logo-kd-light.png", apple: "/logo-kd-light.png" },
  other: {
    // Legacy geo tags — some local crawlers/directories still read them
    "geo.region": "GB-LEW",
    "geo.placename": "Blackheath, London",
    "geo.position": `${business.geo.lat};${business.geo.lng}`,
    ICBM: `${business.geo.lat}, ${business.geo.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${teko.variable} ${ubuntu.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SchemaScript schema={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <div aria-hidden className="h-12 lg:hidden" />
        <StickyCta />
      </body>
    </html>
  );
}
