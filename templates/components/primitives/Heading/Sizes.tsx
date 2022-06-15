module.exports = {
  template: `import React from "react";
import { Heading, VStack, useTheme } from "native-base";

export function Example() {
  const theme = useTheme();
  return (
    <VStack space={1} alignItems="center">
      {Object.keys(theme.components.Heading.sizes)
        .reverse()
        .map((size) => {
          return <Heading size={size}>{size}</Heading>;
        })}
    </VStack>
  );
}
`,
};
