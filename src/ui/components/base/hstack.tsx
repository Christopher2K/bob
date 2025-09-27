import { Box, type BoxProps } from "./box";

type HStackProps = BoxProps;
export const HStack = ({
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  ...props
}: HStackProps) => {
  return (
    <Box
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    />
  );
};
