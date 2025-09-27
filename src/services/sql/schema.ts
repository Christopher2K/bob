import { sql } from "drizzle-orm";
import * as d from "drizzle-orm/sqlite-core";

const commonColumns = {
  id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  createdAt: d
    .integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: d
    .integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
} as const;

export const budgetTable = d.sqliteTable("budget", {
  ...commonColumns,
  name: d.text("name").notNull(),
  amountCents: d.integer("amount_cents", { mode: "number" }).notNull(),
  currency: d.text("currency").default("USD").notNull(),
});
