import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="mx-auto w-full max-w-3xl py-12 md:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Thank You
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Thank you for your message! I will get back to you as soon as
          possible.
        </p>

        <Link href="/">
          <Button className="mt-3">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
