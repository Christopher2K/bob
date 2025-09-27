import type { TextStyle } from "react-native";
import { fontFamily } from "../tokens/font-family";

const textVariants = {
  defaults: {} satisfies TextStyle,
  heading1: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: fontFamily.semiBold,
  } satisfies TextStyle,
  heading2: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fontFamily.semiBold,
  } satisfies TextStyle,
  heading3: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: fontFamily.semiBold,
  } satisfies TextStyle,
  large: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: fontFamily.regular,
  } satisfies TextStyle,
  largeHighlight: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: fontFamily.medium,
  } satisfies TextStyle,
  medium: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fontFamily.regular,
  } satisfies TextStyle,
  mediumHighlight: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fontFamily.semiBold,
  } satisfies TextStyle,
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamily.regular,
  } satisfies TextStyle,
  smallHighlight: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamily.medium,
  } satisfies TextStyle,
};

textVariants.defaults = textVariants.medium;

export { textVariants };
