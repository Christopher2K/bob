import { useLocalSearchParams, useNavigation } from "expo-router";
import { Button, ScreenContent, Text, VStack } from "@/ui/components";
import { useGetBudgetQuery } from "../hooks/use-get-budget-query";

export type BudgetDetailsScreenParams = {
  budgetId: string;
};

export const BudgetDetailsScreen = () => {
  const { budgetId } = useLocalSearchParams<BudgetDetailsScreenParams>();
  const { budget, isBudgetLoading } = useGetBudgetQuery({
    id: Number(budgetId),
  });

  // TODO: Skeleton
  if (isBudgetLoading) return null;

  if (budget == null) return null;

  return (
    <ScreenContent>
      <VStack gap="m">
        <Text variant="heading1">{budget.name}</Text>
        <Button label="Add expense category" />
        <Button label="Add specific expense" />
      </VStack>
    </ScreenContent>
  );
};
