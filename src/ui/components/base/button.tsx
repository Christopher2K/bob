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
