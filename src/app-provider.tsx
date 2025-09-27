import { ThemeProvider } from "@shopify/restyle";
import type { PropsWithChildren } from "react";
import { theme } from "./ui/theme";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
