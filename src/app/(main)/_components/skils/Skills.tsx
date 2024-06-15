import { Suspense } from "react";
import SkillList from "@/app/(main)/_components/skils/SkillList";
import SkillSuspense from "@/app/(main)/_components/skils/SkillSuspense";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter  sm:text-5xl">
              Expertise and Capabilities
            </h2>
            <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lisa&apos;s technical skills and proficiencies that deliver
              exceptional software solutions.
            </p>
          </div>
        </div>
        <ScrollArea className="mt-2 h-[50vh] w-full rounded-lg border-2 border-accent px-3">
          <div className=" mx-auto grid max-w-5xl gap-6 py-12 align-top md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Suspense fallback={<SkillSuspense />}>
              <SkillList />
            </Suspense>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
