import { useQuery } from "@tanstack/react-query";
import { eq } from "drizzle-orm";
import { queryKeys } from "@/services/query";
import { orm, schema } from "@/services/sql";
import type { Budget } from "@/services/sql/schema";

export const getBudget = async (budgetId: Budget["id"]) =>
  (
    await orm
      .select()
      .from(schema.budgetTable)
      .where(eq(schema.budgetTable.id, budgetId))
  ).at(0);

type UseGetBudgetQueryArgs = {
  id: Budget["id"];
};
export const useGetBudgetQuery = ({ id }: UseGetBudgetQueryArgs) => {
  const {
    data: budget,
    isLoading: isBudgetLoading,
    error: budgetError,
  } = useQuery({
    queryKey: queryKeys.budgets.details(id),
    queryFn: () => getBudget(id),
  });

  return {
    budget,
    isBudgetLoading,
    budgetError,
  };
};
