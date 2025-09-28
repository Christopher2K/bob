import type { PropsWithChildren } from "react";
import {
  Button,
  FormField,
  ScreenContent,
  Text,
  TextInput,
  VStack,
} from "@/ui/components";

const Section = ({ children, title }: PropsWithChildren<{ title: string }>) => {
  return (
    <VStack width="100%" gap="l">
      <Text
        variant="heading3"
        textAlign="center"
        width="100%"
        textDecorationLine="underline"
        textDecorationStyle="solid"
        textDecorationColor="text"
      >
        {title}
      </Text>
      <VStack width="100%" gap="m">
        {children}
      </VStack>
    </VStack>
  );
};

export default function Screen() {
  return (
    <ScreenContent scrollable>
      <VStack width="100%" gap="xl">
        <Section title="Text variants">
          <Text variant="heading1">Heading 1</Text>
          <Text variant="heading2">Heading 2</Text>
          <Text variant="heading3">Heading 3</Text>
          <Text variant="large">Large</Text>
          <Text variant="largeHighlight">Large Highlight</Text>
          <Text variant="medium">Medium</Text>
          <Text variant="mediumHighlight">Medium Highlight</Text>
          <Text variant="small">Small</Text>
          <Text variant="smallHighlight">Small Highlight</Text>
        </Section>

        <Section title="Buttons">
          <Button label="Simple button" />
          <Button label="Full width button" fullWidth />
        </Section>

        <Section title="Input Fields">
          <FormField label="TextField">
            <TextInput placeholder="Placeholder" />
          </FormField>
        </Section>
      </VStack>
    </ScreenContent>
  );
}
