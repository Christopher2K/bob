import { Link } from "expo-router";
import type { Budget } from "@/services/sql/schema";
import { Box, HStack, Text, VStack } from "@/ui/components";

export type BudgetItemProps = {
  budget: Budget;
};

export const BudgetItem = ({ budget }: BudgetItemProps) => {
  return (
    <Link href={`/budget/${budget.id}`}>
      <HStack
        width="100%"
        gap="m"
        paddingHorizontal="m"
        paddingVertical="m"
        borderRadius="m"
        backgroundColor="surface"
      >
        <Box
          width={40}
          height={40}
          borderRadius="full"
          backgroundColor="text"
          flexShrink={0}
        />

        <VStack flexGrow={1} alignSelf="stretch" justifyContent="center">
          <HStack
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Text>{budget.name}</Text>
            <Text>
              <Text variant="mediumHighlight">{budget.currency}&nbsp;</Text>
              {budget.amountCents}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Link>
  );
};
