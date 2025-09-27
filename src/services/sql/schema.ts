import { relations, sql } from "drizzle-orm";
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
export type NewBudget = typeof budgetTable.$inferInsert;
export type Budget = typeof budgetTable.$inferSelect;

export const budgetTableRelations = relations(budgetTable, ({ many }) => ({
  items: many(budgetItemTable),
}));

export const categoryTable = d.sqliteTable("category", {
  ...commonColumns,
  name: d.text("name").notNull(),
  description: d.text("description"),
  color: d.text("color").notNull().default("#000000"),
  iconName: d.text("icon_name"),
  is_default: d
    .integer("is_default", { mode: "boolean" })
    .notNull()
    .default(false),
});
export type NewCategory = typeof categoryTable.$inferInsert;
export type Category = typeof categoryTable.$inferSelect;

export const budgetItemTable = d.sqliteTable("budget_item", {
  ...commonColumns,
  name: d.text("name"),
  description: d.text("description"),
  amountCents: d.integer("amount_cents", { mode: "number" }).notNull(),
  budgetId: d
    .integer("budget_id", { mode: "number" })
    .notNull()
    .references(() => budgetTable.id, { onDelete: "cascade" }),
  categoryId: d
    .integer("category_id", { mode: "number" })
    .references(() => categoryTable.id, { onDelete: "set null" }),
});
export type NewBudgetItem = typeof budgetItemTable.$inferInsert;
export type BudgetItem = typeof budgetItemTable.$inferSelect;

export const budgetItemTableRelations = relations(
  budgetItemTable,
  ({ one }) => ({
    budget: one(budgetTable, {
      fields: [budgetItemTable.budgetId],
      references: [budgetTable.id],
    }),
    category: one(categoryTable, {
      fields: [budgetItemTable.categoryId],
      references: [categoryTable.id],
    }),
  }),
);
