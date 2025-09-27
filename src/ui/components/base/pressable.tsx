import { createBox } from "@shopify/restyle";
import type { ComponentProps } from "react";
import {
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
} from "react-native";
import type { Theme } from "@/ui/theme";

export const Pressable = createBox<Theme, RNPressableProps>(RNPressable);
export type PressableProps = ComponentProps<typeof Pressable>;
