import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("couples-training")!;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/couples-training/",
});

export default function Page() {
  return <ServicePage slug="couples-training" />;
}
