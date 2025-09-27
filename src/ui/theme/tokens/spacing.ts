export const spacing = {
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 24,
  xxxl: 28,
  xxxxl: 32,
} as const;

export type Spacing = keyof typeof spacing;
