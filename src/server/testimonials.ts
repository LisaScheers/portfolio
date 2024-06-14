import { cache } from "react";
import { db } from "./db";

export const getTestimonials = cache(async () => {
  return db.query.Testimonials.findMany();
});
