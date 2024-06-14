import Link from "next/link";
import Image from "next/image";
import profileImage from "./profile.png";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Lisa Scheers
              </h1>
              <h2 className="text-xl font-bold">Senior Software Developer</h2>
              <p className="max-w-[600px] md:text-xl">
                Experienced in C# and .NET, specializing in Domain-Driven Design
                (DDD) and Clean Architecture. Passionate about building scalable
                and maintainable software solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[^00px]:flex-row">
              <Link href="/hireme" prefetch={false}>
                <Button>Hire Me</Button>
              </Link>
            </div>
          </div>
          <Image
            src={profileImage}
            alt="Hero"
            className="mx-auto aspect-square max-h-[400px] w-auto overflow-hidden rounded-xl object-bottom lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
