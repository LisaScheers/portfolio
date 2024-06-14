import Testimonial from "@/app/(main)/_components/tesimonials/testemonial";
import { getTestimonials } from "@/server/testimonials";

export default async function TestimonialList() {
  const testimonials = await getTestimonials();

  return (
    <>
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          name={testimonial.name}
          link={testimonial.link ?? undefined}
          title={testimonial.title ?? undefined}
          content={testimonial.content}
        />
      ))}
    </>
  );
}
