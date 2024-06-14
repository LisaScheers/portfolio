import { cache } from "react";
import { db } from "./db";

export const getCases = cache(async () => {
  return db.query.Cases.findMany();
});
