import { VStack, type VStackProps } from "./vstack";

type ScreenContentProps = VStackProps & {
  withVerticalPadding?: boolean;
  withHorizontalPadding?: boolean;
};

export const ScreenContent = ({
  children,
  withVerticalPadding = true,
  withHorizontalPadding = true,
  ...props
}: ScreenContentProps) => {
  return (
    <VStack
      width="100%"
      paddingVertical={withVerticalPadding ? "l" : undefined}
      paddingHorizontal={withHorizontalPadding ? "l" : undefined}
      {...props}
    >
      {children}
    </VStack>
  );
};
