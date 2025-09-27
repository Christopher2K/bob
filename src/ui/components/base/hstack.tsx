import { Box, type BoxProps } from "./box";

type HStackProps = BoxProps;
export const HStack = ({ flexDirection = "row", ...props }: HStackProps) => {
  return <Box flexDirection={flexDirection} {...props} />;
};
