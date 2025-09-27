import type { PropsWithChildren } from "react";
import { Text } from "../base/text";
import { VStack } from "../base/vstack";

export type FormFieldProps = PropsWithChildren<{
  label: string;
}>;

export const FormField = ({ children, label }: FormFieldProps) => {
  return (
    <VStack width="100%" gap="s">
      <Text variant="largeHighlight" width="100%">
        {label}
      </Text>
      <VStack width="100%">{children}</VStack>
    </VStack>
  );
};
