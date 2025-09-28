import { createBox } from "@shopify/restyle";
import type { ComponentProps } from "react";
import {
  ScrollView as RNScrollView,
  type ScrollViewProps as RNScrollViewProps,
} from "react-native";
import type { Theme } from "@/ui/theme";

export const ScrollView = createBox<Theme, RNScrollViewProps>(RNScrollView);
export type ScrollViewProps = ComponentProps<typeof ScrollView>;
