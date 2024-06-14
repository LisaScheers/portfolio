import { Suspense } from "react";
import ShowcaseList from "@/app/(main)/_components/Showcase/ShowcaseList";
import ShowcaseSuspense from "@/app/(main)/_components/Showcase/ShowcaseSuspense";

export default function Showcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-[#e91e63] sm:text-5xl">
              Showcasing Expertise in DDD and Clean Architecture
            </h2>
            <p className="max-w-[900px] text-[#f48fb1] dark:text-[#f48fb1] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how Lisa has leveraged DDD and Clean Architecture to
              deliver high-quality, scalable software solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <Suspense fallback={<ShowcaseSuspense />}>
              <ShowcaseList />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
