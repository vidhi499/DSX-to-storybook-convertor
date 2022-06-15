module.exports = {
  template: `import React from "react";
  import { Text, VStack, useTheme, ScrollView } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <ScrollView>
        <VStack space={1} alignItems="center">
          {Object.keys(theme.fontSizes).map((size) => {
            return <Text fontSize={size}>{size}</Text>;
          })}
        </VStack>
      </ScrollView>
    );
  };
  `,
};
