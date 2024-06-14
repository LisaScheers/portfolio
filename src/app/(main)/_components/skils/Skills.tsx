import { Suspense } from "react";
import SkillList from "@/app/(main)/_components/skils/SkillList";
import SkillSuspense from "@/app/(main)/_components/skils/SkillSuspense";

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-[#e91e63] sm:text-5xl">
              Expertise and Capabilities
            </h2>
            <p className="max-w-[900px] text-[#f48fb1] dark:text-[#f48fb1] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lisa&apos;s technical skills and proficiencies that deliver
              exceptional software solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Suspense fallback={<SkillSuspense />}>
            <SkillList />
          </Suspense>
        </div>
      </div>
    </section>
  );
}