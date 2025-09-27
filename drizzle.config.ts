import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  driver: "expo",
  schema: "./src/services/sql/schema.ts",
  out: "./src/services/sql/generated",
});
