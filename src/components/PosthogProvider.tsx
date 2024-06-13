"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { env } from "@/env";
import { type PropsWithChildren } from "react";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
  });
}

export function CSPostHogProvider({ children }: PropsWithChildren) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
