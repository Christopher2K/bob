import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Stack } from "expo-router";
import { AppProvider } from "@/app-provider";
import { db, orm } from "@/services/sql/db";
import migrations from "@/services/sql/generated/migrations";
import { useTheme } from "@/ui/theme/use-theme";

export default function Layout() {
  const { success, error } = useMigrations(orm, migrations);
  const appIsLoading = success == null && error == null;

  // @ts-expect-error
  useDrizzleStudio(db);

  if (appIsLoading) return null;

  return (
    <AppProvider>
      <TopLevelRouter />
    </AppProvider>
  );
}

const TopLevelRouter = () => {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="budget/[budgetId]" />
      <Stack.Screen
        name="budget/add"
        options={{
          title: "New budget",
          presentation: "modal",
        }}
      />
      <Stack.Screen name="budget/edit" />
    </Stack>
  );
};
