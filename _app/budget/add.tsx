import { AddBudgetScreen } from "@/features/budget/screens/add-budget-screen";
import { ScreenContent } from "@/ui/components/base/screen-content";

export default function Screen() {
  return (
    <ScreenContent paddingHorizontal="l">
      <AddBudgetScreen />
    </ScreenContent>
  );
}
