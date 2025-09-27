import { useRouter } from "expo-router";
import { BudgetForm, type BudgetFormType } from "../components/budget-form";
import { useCreateBudgetMutation } from "../hooks/use-create-budget-mutation";

export const AddBudgetScreen = () => {
  const router = useRouter();
  const { createBudgetAsync } = useCreateBudgetMutation();

  const handleSubmit = async (values: BudgetFormType) => {
    await createBudgetAsync({
      name: values.name,
      amountCents: Number(values.amount) * 100,
      currency: values.currency,
    });

    router.back();
  };

  return <BudgetForm onSubmit={handleSubmit} />;
};
