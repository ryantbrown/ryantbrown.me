import { env } from "@/env";
import { Analytics } from "@bentonow/bento-node-sdk";

export const bento = new Analytics({
  siteUuid: env.BENTO_SITE_ID,
  authentication: {
    secretKey: env.BENTO_SECRET_KEY,
    publishableKey: env.BENTO_PUBLISHABLE_KEY,
  },
});
