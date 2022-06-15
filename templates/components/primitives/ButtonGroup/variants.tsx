module.exports = {
  template: `import React from "react";
  import {
    Button,
    Divider,
    Heading,
    VStack,
    ScrollView,
    useTheme,
  } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <ScrollView>
        <VStack
          w="100%"
          space={2.5}
          mt="4"
          alignItems="center"
          justifyContent="center"
        >
          {Object.keys(theme.components.Button.variants).map((variant: any) => {
            return (
              <>
                {" "}
                <Heading size="md">{variant}</Heading>
                <Button.Group variant={variant} mb="2.5" mt="1.5">
                  <Button colorScheme="teal">Save</Button>
                  <Button colorScheme="danger">Cancel</Button>
                </Button.Group>
                <Divider />
              </>
            );
          })}
          {/* Solid */}
        </VStack>
      </ScrollView>
    );
  };
  `,
};
