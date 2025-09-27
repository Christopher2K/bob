import { useTheme as baseUseTheme } from "@shopify/restyle";
import type { Theme } from "./theme";

export const useTheme = () => baseUseTheme<Theme>();
