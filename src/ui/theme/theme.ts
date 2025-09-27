import { createTheme } from "@shopify/restyle";
import { borderRadii } from "./tokens/border-radius";
import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { textVariants } from "./variants/text-variants";

export const theme = createTheme({
  colors,
  spacing,
  borderRadii,
  textVariants: textVariants,
});

export type Theme = typeof theme;
