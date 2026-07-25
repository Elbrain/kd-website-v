import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("1-to-1-training")!;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/1-to-1-training/",
});

export default function Page() {
  return <ServicePage slug="1-to-1-training" />;
}
