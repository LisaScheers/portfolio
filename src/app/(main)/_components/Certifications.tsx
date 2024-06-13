export default function Certifications() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-[#e91e63]">
              Certifications
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#e91e63] sm:text-5xl">
              Professional Certifications
            </h2>
            <p className="max-w-[900px] text-[#f48fb1] dark:text-[#f48fb1] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lisa&apos;s professional certifications that demonstrate her
              expertise and commitment to continuous learning.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Microsoft Certified: Azure Developer Associate
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              Demonstrates expertise in designing, building, testing, and
              maintaining cloud applications and services on Microsoft Azure.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              AWS Certified Solutions Architect - Associate
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              Validates the ability to design and deploy distributed
              applications and systems on the AWS platform.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Scrum Master Certified (SMC)
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              Demonstrates proficiency in leading Agile teams and implementing
              Scrum practices effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
