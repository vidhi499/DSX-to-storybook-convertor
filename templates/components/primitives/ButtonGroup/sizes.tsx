module.exports = {
  template: `import React from "react";
  import { Button, Box, Heading, VStack, useTheme } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <VStack space={4} alignItems="center">
        <Heading mb="10" size="md">
          Sizes
        </Heading>
        <Button.Group space={3} alignItems="center" direction="column">
          {Object.keys(theme.components.Button.sizes).map((size) => (
            <Box>
              {/* @ts-ignore */}
              <Button key={size} size={size}>
                BUTTON
              </Button>
            </Box>
          ))}
        </Button.Group>
      </VStack>
    );
  };
  `,
};
