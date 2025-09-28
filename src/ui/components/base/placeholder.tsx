import type { DimensionValue } from "react-native";
import { Box } from "./box";

type PlaceholderProps = {
  width?: DimensionValue;
  height?: DimensionValue;
};

export const Placeholder = ({
  width = 100,
  height = 100,
}: PlaceholderProps) => (
  <Box
    width={width}
    height={height}
    borderRadius="l"
    backgroundColor="surface"
    style={{ backgroundColor: "#7D7D7D" }}
  />
);
