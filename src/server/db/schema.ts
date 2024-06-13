// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {pgTableCreator,} from "drizzle-orm/pg-core";
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


// todo
