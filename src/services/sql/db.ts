import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

export const databaseName = "bob.db";
export const db = openDatabaseSync(databaseName);
export const orm = drizzle(db);
