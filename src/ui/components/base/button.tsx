import { createBox } from "@shopify/restyle";
import { Pressable, type PressableProps } from "react-native";
import type { Theme } from "@/ui/theme";
import { Box } from "./box";
import { Text } from "./text";

const ThemedPressable = createBox<Theme, PressableProps>(Pressable);

type ButtonProps = Omit<PressableProps, "children"> & {
  label: string;
  fullWidth?: boolean;
};
export const Button = ({ label, fullWidth, ...props }: ButtonProps) => {
  return (
    <Box
      backgroundColor="text"
      borderRadius="l"
      width={fullWidth ? "100%" : null}
      justifyContent="center"
      alignItems="center"
    >
      <ThemedPressable {...props}>
        <Text
          variant="mediumHighlight"
          color="background"
          paddingHorizontal="xl"
          paddingVertical="m"
        >
          {label}
        </Text>
      </ThemedPressable>
    </Box>
  );
};
