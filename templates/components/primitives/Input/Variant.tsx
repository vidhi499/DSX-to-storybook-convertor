module.exports = {
  template: `import React from "react";
  import { Input, Stack, useTheme } from "native-base";
  export const Example = () => {
    const theme = useTheme();
    return (
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        {Object.keys(theme.components.Input.variants).map((variant) => {
          return <Input variant={variant} placeholder={variant} />;
        })}
      </Stack>
    );
  };
  `,
};
