import { db } from "@/server/db";
import Testimonial from "@/app/(main)/_components/tesimonials/testemonial";

export default async function TestimonialList() {
  const testimonials = await db.query.Testimonials.findMany();

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
