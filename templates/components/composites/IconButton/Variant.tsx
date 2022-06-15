module.exports = {
  template: `import React from "react";
  import { Center, IconButton, VStack, useTheme } from "native-base";
  import AntDesign from "react-native-vector-icons/dist/AntDesign";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <Center>
        <VStack space={4} alignItems="center">
          {Object.keys(theme.components.IconButton.variants).map(
            (variant: any) => (
              <IconButton
                colorScheme="indigo"
                key={variant}
                variant={variant}
                _icon={{
                  as: AntDesign,
                  name: "search1",
                }}
              />
            )
          )}
        </VStack>
      </Center>
    );
  };
  `,
};
