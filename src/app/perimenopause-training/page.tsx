import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("perimenopause-training")!;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/perimenopause-training/",
});

export default function Page() {
  return <ServicePage slug="perimenopause-training" />;
}
