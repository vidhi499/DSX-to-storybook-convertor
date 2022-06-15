module.exports = {
  template: `import React from "react";
import {
  TextArea,
  Stack,
  ScrollView,
  Center,
  Heading,
  useTheme,
} from "native-base";

export const Example = () => {
  const theme = useTheme();
  const Sizes = Object.keys(theme.components.Input.sizes).reverse();
  return (
    <ScrollView w={{ base: "70%", md: "20%" }}>
      <Center mt="4">
        <Heading textAlign="center" mb="10">
          Sizes
        </Heading>
        <Stack space={4} w="90%">
          {Sizes.map((value) => {
            return (
              <TextArea
                aria-label="t2"
                key={value}
                size={value}
                placeholder={value}
                _dark={{ placeholderTextColor: "white" }}
              />
            );
          })}
        </Stack>
      </Center>
    </ScrollView>
  );
};
`,
};
