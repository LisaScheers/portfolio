import { Suspense } from "react";
import CertificationList from "@/app/(main)/_components/certifications/CertificationList";
import CertificationSuspense from "@/app/(main)/_components/certifications/CertificationSuspense";

export default function Certifications() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Professional Certifications
            </h2>
            <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lisa&apos;s industry standard certifications, showcasing her
              expertise and commitment to continuous learning
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Suspense fallback={<CertificationSuspense />}>
            <CertificationList />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
