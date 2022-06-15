module.exports = {
  template: `import React from "react";
  import {
    Button,
    Divider,
    Heading,
    VStack,
    Stack,
    ScrollView,
    useTheme,
  } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    let variants = Object.keys(theme.components.Button.variants);
    return (
      <ScrollView showsVerticalScrollIndicator={false} px="3">
        <VStack
          w="100%"
          space={4}
          px="2"
          mt="4"
          alignItems="center"
          justifyContent="center"
        >
          {variants.map((variant) => {
            return (
              <>
                <Heading size="md">{variant}</Heading>
                <Stack
                  mb="2.5"
                  mt="1.5"
                  direction={{ base: "column", md: "row" }}
                  space={2}
                  mx={{ base: "auto", md: "0" }}
                >
                  <Button size="sm" variant={variant}>
                    PRIMARY
                  </Button>
                  <Button size="sm" colorScheme="secondary" variant={variant}>
                    SECONDARY
                  </Button>
                  <Button size="sm" variant={variant} isDisabled>
                    DISABLED
                  </Button>
                </Stack>
  
                <Divider w="100%" />
              </>
            );
          })}
        </VStack>
      </ScrollView>
    );
  };`,
};
