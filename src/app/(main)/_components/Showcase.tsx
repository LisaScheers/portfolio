export default function Showcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-[#e91e63]">
              Key Projects
            </div>
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
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-[#e91e63]">
                E-commerce Platform
              </h3>
              <p className="text-[#f48fb1] dark:text-[#f48fb1]">
                Designed and implemented a scalable e-commerce platform using
                DDD and Clean Architecture, resulting in improved
                maintainability and faster development cycles.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-[#e91e63]">CRM System</h3>
              <p className="text-[#f48fb1] dark:text-[#f48fb1]">
                Developed a robust CRM system that leveraged DDD and Clean
                Architecture to provide a flexible and extensible solution for
                managing customer relationships.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-[#e91e63]">
                Microservices Architecture
              </h3>
              <p className="text-[#f48fb1] dark:text-[#f48fb1]">
                Designed and implemented a microservices-based architecture
                using DDD and Clean Architecture principles, enabling
                scalability and improved fault tolerance.
              </p>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
