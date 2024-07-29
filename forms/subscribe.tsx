"use client";

import { subscribe } from "@/actions";
import { Button } from "@/components/button";
import { LoadingIcon } from "@/components/icons";
import { useActionState } from "react";

export function SubscribeForm() {
  const [state, action, pending] = useActionState(subscribe, { email: "" });

  return (
    <form action={action}>
      <div className="flex gap-2">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-lg border border-gray-900/10 bg-white px-3 py-2 shadow-gray-800/5 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm dark:border-gray-700 dark:bg-gray-700/15 dark:text-gray-200 dark:placeholder:text-gray-500"
        />
        <Button type="submit" className="flex-none" disabled={pending}>
          {pending && (
            <LoadingIcon className="-ml-0.5 mr-0.5 size-4 text-white" />
          )}
          Join
        </Button>
      </div>
    </form>
  );
}
