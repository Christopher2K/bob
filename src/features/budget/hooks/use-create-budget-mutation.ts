import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/services/query";
import { orm, schema } from "@/services/sql";
import type { NewBudget } from "@/services/sql/schema";

export const createBudget = async (budget: NewBudget) => {
  return orm.insert(schema.budgetTable).values(budget).returning();
};

export const useCreateBudgetMutation = () => {
  const {
    mutateAsync: createBudgetAsync,
    isPending: isCreateBudgetLoading,
    error: createBudgetError,
  } = useMutation({
    mutationFn: createBudget,
    meta: {
      invalidateKeys: [queryKeys.budgets.all()],
    },
  });

  return {
    createBudgetAsync,
    isCreateBudgetLoading,
    createBudgetError,
  };
};
