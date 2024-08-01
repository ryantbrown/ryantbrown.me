import { PageLayout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "I create content about building, launching, and growing software products.",
};

export default async function Page() {
  return (
    <PageLayout title="I create content about building, launching, and growing software products.">
      Test
    </PageLayout>
  );
}
