export const colors = {
  background: "#FFFFFC",
  text: "#000000",

  surface: "#F8F9FA",

  error: "#FF0000",
} as const;

export type Colors = keyof typeof colors;
