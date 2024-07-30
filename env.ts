import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export const env = createEnv({
  extends: [vercel()],
  server: {
    BENTO_PUBLISHABLE_KEY: z.string().min(1),
    BENTO_SECRET_KEY: z.string().min(1),
    BENTO_SITE_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BENTO_SITE_ID: z.string().min(1),
  },
  runtimeEnv: {
    BENTO_SITE_ID: process.env.BENTO_SITE_ID,
    BENTO_SECRET_KEY: process.env.BENTO_SECRET_KEY,
    BENTO_PUBLISHABLE_KEY: process.env.BENTO_PUBLISHABLE_KEY,
    NEXT_PUBLIC_BENTO_SITE_ID: process.env.NEXT_PUBLIC_BENTO_SITE_ID,
  },
});
