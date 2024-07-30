import { env } from "@/env";
import { storage } from "@/lib/storage";
import { BentoAnalytics } from "@bentonow/bento-nextjs-sdk/analytics";

export async function Analytics() {
  const email = (await storage.getItem("email")) as string | undefined;

  return (
    <BentoAnalytics
      siteUuid={env.NEXT_PUBLIC_BENTO_SITE_ID}
      userEmail={email ?? undefined}
    />
  );
}
