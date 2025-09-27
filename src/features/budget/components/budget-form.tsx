import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Button, FormField, TextInput, VStack } from "@/ui/components";

const BudgetSchema = z.object({
  name: z.string(),
  amountCents: z.string().refine((v) => Number(v) > 0),
  currency: z.string(), // TODO: change to enum later
});
type BudgetType = z.infer<typeof BudgetSchema>;
const defaultValues: BudgetType = {
  name: "",
  amountCents: "100",
  currency: "USD",
};

export type BudgetFormProps = {
  onSubmit: (values: BudgetType) => unknown;
};

export const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const form = useForm({
    onSubmit: (ctx) => onSubmit(ctx.value),
    defaultValues: defaultValues,
    validators: {
      onBlur: BudgetSchema,
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
          name="amountCents"
          children={({ handleChange, state }) => (
            <FormField label="Amount">
              <TextInput
                onChangeText={handleChange}
                staticPrefix="USD"
                value={state.value.toString()}
              />
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
      </VStack>

      <Button label="Create" onPress={form.handleSubmit} fullWidth />
    </VStack>
  );
};
