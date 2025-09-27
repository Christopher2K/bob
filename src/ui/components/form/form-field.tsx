import type { PropsWithChildren } from "react";
import { Text } from "../base/text";
import { VStack } from "../base/vstack";

export type FormFieldProps = PropsWithChildren<{
  label: string;
}>;

export const FormField = ({ children, label }: FormFieldProps) => {
  return (
    <VStack
      width="100%"
      borderRadius="l"
      backgroundColor="surface"
      paddingVertical="xs"
    >
      <Text variant="smallHighlight" width="100%" paddingHorizontal="m">
        {label}
      </Text>
      <VStack width="100%">{children}</VStack>
    </VStack>
  );
};
