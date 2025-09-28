import { Fragment, type PropsWithChildren, useMemo } from "react";
import { ScrollView } from "./scrollview";
import { VStack, type VStackProps } from "./vstack";

type ScreenContentProps = VStackProps & {
  withVerticalPadding?: boolean;
  withHorizontalPadding?: boolean;
  scrollable?: boolean;
};

export const ScreenContent = ({
  children,
  withVerticalPadding = true,
  withHorizontalPadding = true,
  scrollable = false,
  ...props
}: ScreenContentProps) => {
  const Container = useMemo(
    () =>
      ({ children }: PropsWithChildren) => (
        <Fragment>
          {scrollable ? (
            <ScrollView width="100%" flex={1}>
              {children}
            </ScrollView>
          ) : (
            children
          )}
        </Fragment>
      ),
    [],
  );

  return (
    <Container>
      <VStack
        width="100%"
        paddingVertical={withVerticalPadding ? "l" : undefined}
        paddingHorizontal={withHorizontalPadding ? "l" : undefined}
        {...props}
      >
        {children}
      </VStack>
    </Container>
  );
};
