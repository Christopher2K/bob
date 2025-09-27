import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/services/query";
import { orm, schema } from "@/services/sql";

export const getBudgets = async () => orm.select().from(schema.budgetTable);

export const useGetBudgetsQuery = () => {
  const {
    data: budgets,
    isLoading: isBudgetsLoading,
    error: budgetError,
  } = useQuery({
    queryKey: queryKeys.budgets.all(),
    queryFn: getBudgets,
  });

  return {
    budgets,
    isBudgetsLoading,
    budgetError,
  };
};
