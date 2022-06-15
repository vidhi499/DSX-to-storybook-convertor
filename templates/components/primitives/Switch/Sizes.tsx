module.exports = {
  template: `import React from "react";
  import { Switch, VStack, useTheme } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <VStack space={4} alignItems="center">
        {Object.keys(theme.components.Switch.sizes).map((size) => {
          return <Switch size={size} />;
        })}
      </VStack>
    );
  };
  `,
};
