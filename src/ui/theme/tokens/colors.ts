export const colors = {
  background: "#FFFFFC",
  text: "#000000",
  error: "#FF0000",
} as const;

export type Colors = keyof typeof colors;
