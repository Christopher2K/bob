import { Box } from "./box";
import { Pressable, type PressableProps } from "./pressable";
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
      justifyContent="center"
      alignItems="center"
    >
      <Pressable
        {...props}
        alignSelf="stretch"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          variant="largeHighlight"
          color="background"
          paddingHorizontal="xl"
          paddingVertical="l"
        >
          {label}
        </Text>
      </Pressable>
    </Box>
  );
};
