import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Button, FormField, TextInput, VStack } from "@/ui/components";

const BudgetFormSchema = z.object({
  name: z.string(),
  amount: z.string().refine((v) => Number(v) > 0),
  currency: z.string(), // TODO: change to enum later
});
export type BudgetFormType = z.infer<typeof BudgetFormSchema>;
const defaultValues: BudgetFormType = {
  name: "",
  amount: "100",
  currency: "USD",
};

export type BudgetFormProps = {
  onSubmit: (values: BudgetFormType) => unknown;
};

export const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const form = useForm({
    onSubmit: (ctx) => onSubmit(ctx.value),
    defaultValues: defaultValues,
    validators: {
      onBlur: BudgetFormSchema,
      onSubmit: BudgetFormSchema,
    },
  });

  return (
    <VStack width="100%" gap="xl">
      <VStack width="100%" gap="m">
        <form.Field
          name="name"
          children={({ handleChange, state }) => (
            <FormField label="Name">
              <TextInput onChangeText={handleChange} value={state.value} />
            </FormField>
          )}
        />
        <form.Field
          name="currency"
          children={({ handleChange, state }) => (
            <FormField label="Currency">
              <TextInput onChangeText={handleChange} value={state.value} />
            </FormField>
          )}
        />

        <form.Subscribe
          selector={({ values }) => values.currency}
          children={(currency) => (
            <form.Field
              name="amount"
              children={({ handleChange, state }) => (
                <FormField label="Amount">
                  <TextInput
                    onChangeText={handleChange}
                    staticPrefix={currency}
                    value={state.value.toString()}
                  />
                </FormField>
              )}
            />
          )}
        />
      </VStack>

      <Button label="Create" onPress={form.handleSubmit} fullWidth />
    </VStack>
  );
};
