import { Box, type BoxProps } from "./box";

type VStackProps = BoxProps;
export const VStack = ({
  flexDirection = "column",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  ...props
}: VStackProps) => {
  return (
    <Box
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    />
  );
};
