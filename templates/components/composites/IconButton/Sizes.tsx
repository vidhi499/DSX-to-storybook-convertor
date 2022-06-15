module.exports = {
  template: `import React from "react";
  import { IconButton, Center, VStack, useTheme } from "native-base";
  import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <Center>
        <VStack space={4} alignItems="center">
          {Object.keys(theme.components.IconButton.sizes).map((size: any) => (
            <IconButton
              size={size}
              variant="solid"
              _icon={{
                as: MaterialIcons,
                name: "menu",
              }}
            />
          ))}
        </VStack>
      </Center>
    );
  };
  `,
};
