module.exports = {
  template: `import React from "react";
import { Checkbox, VStack, Center, useTheme } from "native-base";

export const Example = () => {
  const theme = useTheme();
  return (
    <Center>
      <VStack space={3}>
        {Object.keys(theme.components.Checkbox.sizes).map((size) => {
          return (
            <Checkbox value="red" size={size} defaultIsChecked>
              UX Research
            </Checkbox>
          );
        })}
      </VStack>
    </Center>
  );
};
`,
};
