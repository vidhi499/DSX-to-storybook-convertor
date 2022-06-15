module.exports = {
  template: `import React from "react";
  import { Radio, Stack, useTheme } from "native-base";
  
  export const Example = () => {
    const theme = useTheme();
    return (
      <Radio.Group
        name="exampleGroup"
        defaultValue="1"
        accessibilityLabel="pick a size"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          space={4}
          w="75%"
          maxW="300px"
        >
          {Object.keys(theme.components.Radio.sizes)
            .reverse()
            .map((size, key) => {
              return (
                <Radio
                  value={JSON.stringify(key)}
                  colorScheme="red"
                  size={size}
                  my={1}
                >
                  {size}
                </Radio>
              );
            })}
        </Stack>
      </Radio.Group>
    );
  };
  `,
};
