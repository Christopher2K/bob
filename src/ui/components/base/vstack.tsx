import { Box, type BoxProps } from "./box";

type VStackProps = BoxProps;
export const VStack = ({ flexDirection = "column", ...props }: VStackProps) => {
  return <Box flexDirection={flexDirection} {...props} />;
};
