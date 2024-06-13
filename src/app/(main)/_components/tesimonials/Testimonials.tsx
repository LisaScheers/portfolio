import { Suspense } from "react";
import TestimonialList from "@/app/(main)/_components/tesimonials/TestimonialList";
import TestimonialSuspence from "@/app/(main)/_components/tesimonials/TestimonialSuspence";

export default function Testimonials() {
  return (
    <section id="Testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-[#e91e63]">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#e91e63] sm:text-5xl">
              What Clients Say
            </h2>
            <p className="max-w-[900px] text-[#f48fb1] dark:text-[#f48fb1] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from clients who have worked with Lisa Scheers and
              experienced her exceptional software development skills.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Suspense fallback={<TestimonialSuspence />}>
            <TestimonialList />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
