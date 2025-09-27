import { Pressable, type PressableProps } from "react-native";
import { Box } from "./box";
import { Text } from "./text";

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
    >
      <Pressable {...props}>
        <Text
          variant="mediumHighlight"
          color="background"
          paddingHorizontal="xl"
          paddingVertical="m"
        >
          {label}
        </Text>
      </Pressable>
    </Box>
  );
};
