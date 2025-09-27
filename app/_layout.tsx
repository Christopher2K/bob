import { Stack } from "expo-router";
import { AppProvider } from "@/app-provider";

export default function Layout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="budget/add" />
        <Stack.Screen name="budget/edit" />
      </Stack>
    </AppProvider>
  );
}
