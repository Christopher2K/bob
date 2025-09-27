import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { useGetBudgetQuery } from "../hooks/use-get-budget-query";

export type BudgetDetailsScreenParams = {
  budgetId: string;
};

export const BudgetDetailsScreen = () => {
  const navigation = useNavigation();
  const { budgetId } = useLocalSearchParams<BudgetDetailsScreenParams>();
  const { budget } = useGetBudgetQuery({ id: Number(budgetId) });

  useEffect(() => {
    if (!budget?.name) return;
    navigation.setOptions({
      title: `${budget?.name} overview`,
    });
  }, [budget?.name, navigation]);

  return <></>;
};
