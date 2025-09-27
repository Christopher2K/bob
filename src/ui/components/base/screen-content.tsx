import { VStack, type VStackProps } from "./vstack";

type ScreenContentProps = VStackProps;

export const ScreenContent = ({ children, ...props }: ScreenContentProps) => {
  return (
    <VStack width="100%" paddingVertical="l" {...props}>
      {children}
    </VStack>
  );
};
