import Banner from "@/app/(main)/_components/Banner";
import Skills from "@/app/(main)/_components/Skills";
import Certifications from "@/app/(main)/_components/Certifications";
import Testimonials from "@/app/(main)/_components/Testimonials";
import Showcase from "@/app/(main)/_components/Showcase";

export default function Component() {
  return (
    <main className="flex-1">
      <Banner />
      <Showcase />
      <Skills />
      <Certifications />
      <Testimonials />
    </main>
  );
}
