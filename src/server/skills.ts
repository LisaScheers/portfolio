import { cache } from "react";
import { db } from "./db";

export const getSkills = cache(async () => {
  return db.query.Skills.findMany();
});
