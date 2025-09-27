import { Stack } from "expo-router";
import { AppProvider } from "@/app-provider";

export default function Layout() {
  return (
    <AppProvider>
      <Stack />
    </AppProvider>
  );
}
