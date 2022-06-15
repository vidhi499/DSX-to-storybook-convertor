module.exports = {
  template: `import React from "react";
  import { Input, Stack, useTheme } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        {Object.keys(theme.components.Input.sizes)
          .reverse()
          .map((size) => {
            return <Input size={size} placeholder={size + " Input"} />;
          })}
      </Stack>
    );
  };
  `,
};
