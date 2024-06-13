import Link from "next/link";
import Image from "next/image";
import profileImage from "./profile.png";

export default function Banner() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-[#e91e63] sm:text-5xl xl:text-6xl/none">
                Lisa Scheers
              </h1>
              <h2 className="text-xl font-bold text-[#f48fb1] dark:text-[#f48fb1]">
                Senior Software Developer
              </h2>
              <p className="max-w-[600px] text-[#f48fb1] dark:text-[#f48fb1] md:text-xl">
                Experienced in C# and .NET, specializing in Domain-Driven Design
                (DDD) and Clean Architecture. Passionate about building scalable
                and maintainable software solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/hireme"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#e91e63] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#c2185b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c2185b] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#f48fb1] dark:text-[#1a1a1a] dark:hover:bg-[#f48fb1] dark:focus-visible:ring-[#f48fb1]"
                prefetch={false}
              >
                Hire Me
              </Link>
            </div>
          </div>
          <Image
            src={profileImage}
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
