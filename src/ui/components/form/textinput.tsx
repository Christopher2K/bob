import { createBox } from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from "react-native";
import type { Theme } from "@/ui/theme";
import { useTheme } from "@/ui/theme/use-theme";

const ThemedTextInput = createBox<Theme, RNTextInputProps>(RNTextInput);

export type TextInputProps = RNTextInputProps;
export const TextInput = ({ style, ...props }: TextInputProps) => {
  const theme = useTheme();

  return (
    <ThemedTextInput
      width="100%"
      paddingHorizontal="m"
      paddingVertical="m"
      style={[{ ...theme.textVariants.medium, lineHeight: undefined }]}
      {...props}
    />
  );
};
