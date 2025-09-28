import { FlatList } from "react-native";
import { Box, ScreenContent } from "@/ui/components";
import { useTheme } from "@/ui/theme/use-theme";
import { BudgetItem } from "../components/budget-item";
import { useGetBudgetsQuery } from "../hooks/use-get-budgets-query";

export const BudgetScreen = () => {
  const theme = useTheme();
  const { budgets, isBudgetsLoading } = useGetBudgetsQuery();
  const isLoading = isBudgetsLoading || budgets == null;

  // TODO: Skeleton
  if (isLoading) return null;

  return (
    <ScreenContent withVerticalPadding={false} flexGrow={1}>
      <FlatList
        style={{ width: "100%", paddingTop: theme.spacing.l }}
        ItemSeparatorComponent={() => (
          <Box height={theme.spacing.m} accessible={false} />
        )}
        data={budgets}
        renderItem={({ item }) => <BudgetItem budget={item} />}
      />
    </ScreenContent>
  );
};
