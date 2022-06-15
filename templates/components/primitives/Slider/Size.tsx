module.exports = {
  template: `import React from "react";
import { Slider, VStack, Box, useTheme } from "native-base";

export const Example = () => {
  const theme = useTheme();
  let value = 20;
  return (
    <Box alignItems="center" w="100%">
      <VStack space={4} w="75%" maxW="300">
        {Object.keys(theme.components.Slider.sizes)
          .reverse()
          .map((size) => {
            value = value + 20;
            return (
              <Slider defaultValue={value} size={size}>
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
            );
          })}
      </VStack>
    </Box>
  );
};
`,
};
