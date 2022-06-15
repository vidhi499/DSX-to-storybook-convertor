module.exports = {
  template: `import React from 'react';
  import { Button, VStack, useTheme} from 'native-base';
  
  export const Example = () => {
    const theme = useTheme();

    return (
      <VStack space={4} alignItems="center">
        {Object.keys(theme.components.Button.sizes).map((size) => (
          <Button key={size} size={size}>
            BUTTON
          </Button>
        ))}
      </VStack>
    );
  };
  `,
};
