import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h3 className="font-semibold text-[#e91e63]">John Doe</h3>
                <p className="text-sm text-[#f48fb1] dark:text-[#f48fb1]">
                  CEO, Acme Inc.
                </p>
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-[#f48fb1] dark:text-[#f48fb1]">
              &quot;Lisa&apos;s expertise in DDD and Clean Architecture was
              instrumental in the success of our e-commerce platform. Her
              attention to detail and commitment to quality were truly
              impressive.&quot;
            </blockquote>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h3 className="font-semibold text-[#e91e63]">Jane Smith</h3>
                <p className="text-sm text-[#f48fb1] dark:text-[#f48fb1]">
                  CTO, Globex Inc.
                </p>
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-[#f48fb1] dark:text-[#f48fb1]">
              {'"'}I{"'"}ve had the pleasure of working with Lisa on several
              projects, and her expertise in DDD and Clean Architecture has
              consistently delivered exceptional results. She is a true asset to
              any team.{'"'}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
