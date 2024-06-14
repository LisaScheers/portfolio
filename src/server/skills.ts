import { cache } from "react";
import { db } from "./db";

export const getSkills = cache(async () => {
  return (await db.query.Skills.findMany()).sort((a, b) => b.level - a.level);
});
