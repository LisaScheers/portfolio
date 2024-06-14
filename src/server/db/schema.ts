// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {integer, pgTableCreator, serial, text} from "drizzle-orm/pg-core";
import {env} from "@/env";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

const envName = env.NODE_ENV;
export const createTable = pgTableCreator(
  (name) => `${envName}_portfolio_${name}`,
);

export const Skills = createTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  level: integer("level").notNull(),
  description: text("description").notNull(),
  link: text("link"),
});

export const Certifications = createTable("certifications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  issuer: text("issuer").notNull(),
  date: text("date").notNull(),
  link: text("link"),
  description: text("description"),
});

export const Cases = createTable("cases", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

export const Testimonials = createTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title"),
  link: text("link"),
  content: text("content").notNull(),
});
