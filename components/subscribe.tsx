"use client";

import { subscribeAction } from "@/actions";
import { Button } from "@/components/button";
import { EmailLoveIcon, LoadingIcon } from "@/components/icons";
import { storage } from "@/lib/storage";
import { type FormEvent, useRef } from "react";
import { useServerAction } from "zsa-react";
import { Input } from "./input";

export function SubscribeForm() {
  const ref = useRef<HTMLInputElement>(null);

  const { isPending, isSuccess, isError, execute } = useServerAction(
    subscribeAction,
    {
      async onSuccess({ data }) {
        await storage?.setItem("email", data.email);
      },
    },
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      ref.current?.focus();
      return;
    }

    execute({ email });
  }

  if (isSuccess) {
    return (
      <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-3 font-medium text-gray-800 text-sm">
        <EmailLoveIcon className="size-6 text-gray-400" />
        Welcome! Sending you an email...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-3 font-medium text-gray-800 text-sm">
        <div className="mr-1.5 size-3 rounded-full bg-rose-500" />
        Something wen't wrong.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <Input
          ref={ref}
          name="email"
          type="email"
          placeholder="Email address"
        />
        <Button type="submit" className="flex-none" disabled={isPending}>
          {isPending && (
            <LoadingIcon className="-ml-0.5 mr-0.5 size-4 text-white" />
          )}
          Join
        </Button>
      </div>
    </form>
  );
}
