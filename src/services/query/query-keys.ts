import type { Budget } from "@/services/sql/schema";

export const queryKeys = {
  budgets: {
    details: (id: Budget["id"]) => ["budgets", id],
    all: () => ["budgets"],
  },
  categories: {
    all: () => ["categories"],
  },
};
