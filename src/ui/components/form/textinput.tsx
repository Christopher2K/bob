import { createBox } from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from "react-native";
import type { Theme } from "@/ui/theme";
import { useTheme } from "@/ui/theme/use-theme";
import { HStack, Text } from "../base";

const ThemedTextInput = createBox<Theme, RNTextInputProps>(RNTextInput);

export type TextInputProps = RNTextInputProps & {
  staticPrefix?: string;
};
export const TextInput = ({
  style,
  staticPrefix,
  ...props
}: TextInputProps) => {
  const theme = useTheme();

  return (
    <HStack
      width="100%"
      gap="xs"
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="m"
      paddingVertical="m"
      flexGrow={1}
    >
      {staticPrefix && (
        <Text variant="mediumHighlight" flexShrink={0}>
          {staticPrefix}
        </Text>
      )}
      <ThemedTextInput
        flexGrow={1}
        flexShrink={1}
        style={theme.textVariants.medium}
        {...props}
      />
    </HStack>
  );
};
