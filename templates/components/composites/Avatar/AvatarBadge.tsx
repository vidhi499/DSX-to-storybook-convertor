module.exports = {
  template: `import React from "react";
  import { Avatar, VStack, useTheme } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <VStack space={2} alignItems="center">
        {Object.keys(theme.components.Avatar.sizes).map((size) => {
          return (
            <Avatar
              bg="amber.500"
              source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              size={size}
            >
              NB
              <Avatar.Badge bg="green.500" />
            </Avatar>
          );
        })}
      </VStack>
    );
  };
  `,
};
