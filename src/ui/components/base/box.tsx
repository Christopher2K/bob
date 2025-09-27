import { createBox } from "@shopify/restyle";
import type { ComponentProps } from "react";
import type { Theme } from "@/ui/theme/theme";

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>;
