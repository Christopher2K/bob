import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, HStack, Placeholder, Text, VStack } from "@/ui/components";

export const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <VStack
      justifyContent="space-between"
      alignItems="flex-start"
      flex={1}
      paddingHorizontal="xxl"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <VStack gap="xl" width="100%" style={{ paddingTop: "10%" }}>
        <Placeholder />

        <VStack
          justifyContent="center"
          alignItems="flex-start"
          gap="s"
          marginBottom="xxl"
        >
          <Text variant="heading1">Bob</Text>
          <Text variant="heading2">
            Take&nbsp;
            <Text style={{ color: "#006400" }} variant="heading2">
              control&nbsp;
            </Text>
            of your finances
          </Text>
        </VStack>

        <HStack width="100%" gap="l" alignItems="center">
          <Placeholder width={60} height={60} />

          <VStack gap="xs" flexGrow={1} flexShrink={1}>
            <Text variant="largeHighlight">Plan ahead</Text>
            <Text>
              Bob helps you plan expenses and incomes, so you can reach your
              financial goals.
            </Text>
          </VStack>
        </HStack>

        <HStack width="100%" gap="l" alignItems="center">
          <Placeholder width={60} height={60} />

          <VStack gap="xs" flexGrow={1} flexShrink={1}>
            <Text variant="largeHighlight">Track your subscriptions</Text>
            <Text>Never forget about your subscriptions again.</Text>
          </VStack>
        </HStack>

        <HStack width="100%" gap="l" alignItems="center">
          <Placeholder width={60} height={60} />

          <VStack gap="xs" flexGrow={1} flexShrink={1}>
            <Text variant="largeHighlight">Get financial insights</Text>
            <Text>
              Bob give you the tools and analytics to make better financial
              decisions.
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <VStack width="100%" alignSelf="flex-end">
        <Link href="/initial-budget" asChild>
          <Button label="Create my budget" fullWidth />
        </Link>
      </VStack>
    </VStack>
  );
};
