import { cache } from "react";
import { db } from "./db";

export const getCertifications = cache(async () => {
  return db.query.Certifications.findMany();
});
