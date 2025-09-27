import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Button, FormField, TextInput, VStack } from "@/ui/components";

const BudgetSchema = z.object({
  name: z.string(),
  amountCents: z.number(),
  currency: z.enum(["USD", "EUR", "CAD"]),
});
type BudgetType = z.infer<typeof BudgetSchema>;
const defaultValues: BudgetType = {
  name: "",
  amountCents: 100,
  currency: "USD",
};

export const BudgetForm = () => {
  const form = useForm({
    onSubmit: (ctx) => onSubmit(ctx.value),
    defaultValues: defaultValues,
    validators: {
      onBlur: BudgetSchema,
    },
  });

  const onSubmit = (values: BudgetType) => {
    console.log(values);
  };

  return (
    <VStack width="100%" gap="m" paddingHorizontal="l">
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

      <Button label="Save" onPress={form.handleSubmit} />
    </VStack>
  );
};
