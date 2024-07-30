"use server";

import { bento } from "@/lib/analytics";
import { z } from "zod";
import { createServerAction } from "zsa";

export const subscribeAction = createServerAction()
  .input(z.object({ email: z.string().email() }))
  .handler(async ({ input }) => {
    await bento.V1.addSubscriber({ email: input.email });

    return input;
  });
