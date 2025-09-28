import { useTheme } from "@shopify/restyle";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Stack } from "expo-router";
import { AppProvider } from "@/app-provider";
import { db, orm } from "@/services/sql/db";
import migrations from "@/services/sql/generated/migrations";

export const unstable_settings = {
  initialRouteName: "ui-elements",
};

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
    <Stack>
      <Stack.Screen
        name="(onboarding)/index"
        options={{
          contentStyle: { backgroundColor: theme.colors.background },
          headerShown: false,
        }}
      />
      <Stack.Screen name="(onboarding)/initial-budget" />
    </Stack>
  );
};
