import type { ComponentType } from "react";

export function createCompoundComponent<T, P extends Record<string, unknown>>(
  Component: ComponentType<T>,
  properties: P,
): ComponentType<T> & P {
  return Object.assign(Component, properties);
}
