module.exports = {
  template: `import React from "react";
  import { Avatar, VStack, Center, useTheme } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <Center>
        <VStack space={2} alignItems={{ base: "center", md: "flex-start" }}>
          {Object.keys(theme.components.Avatar.sizes).map((size) => {
            return (
              <Avatar
                bg="green.500"
                alignSelf="center"
                size={size}
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              >
                AJ
              </Avatar>
            );
          })}
        </VStack>
      </Center>
    );
  };
  `,
};
