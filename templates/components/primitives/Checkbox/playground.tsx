module.exports = {
  template: `import React from "react";
  import { Checkbox, Box, useTheme } from "native-base";
  import { boolean, select, text } from "@storybook/addon-knobs";
  
  export const Example = () => {
    const theme = useTheme();
    const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
    const checkboxValue = text("value", "Cool");
    return (
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Checkbox
          colorScheme={text("colorScheme", "primary")}
          size={select(
            "size",
            Object.keys(theme.components.Checkbox.sizes),
            "md"
          )}
          isChecked={toggleCheckBox}
          isDisabled={boolean("isDisabled", false)}
          isInvalid={boolean("isInvalid", false)}
          value={checkboxValue}
          onChange={() => {
            setToggleCheckBox(!toggleCheckBox);
          }}
        >
          Yes
        </Checkbox>
      </Box>
    );
  };
  `,
};
