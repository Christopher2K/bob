import { Link } from "expo-router";
import { useGetBudgetsQuery } from "../hooks/use-get-budgets-query";

export const BudgetScreen = () => {
  const { budgets } = useGetBudgetsQuery();

  return <Link href="/budget/add">Add a new budget</Link>;
};
