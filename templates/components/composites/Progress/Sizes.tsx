module.exports = {
  template: `import React from "react";
  import { Box, Progress, VStack, Center, useTheme } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    let value = 15;
    return (
      <Center w="100%">
        <Box w="90%" maxW="400">
          <VStack space="md">
            <VStack mx="4" space="md">
              {Object.keys(theme.components.Progress.sizes).map((size) => {
                value = value + 10;
                return <Progress size={size} mb={4} value={value} />;
              })}
            </VStack>
          </VStack>
        </Box>
      </Center>
    );
  };
  `,
};
