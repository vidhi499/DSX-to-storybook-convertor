module.exports = {
  template: `import React from "react";
  import {
    Box,
    NativeBaseProvider,
    useColorMode,
    IconButton,
    MoonIcon,
    ColorMode,
    useColorModeValue,
    Tooltip,
    SunIcon,
    extendTheme,
    Button,
    Input,
  } from "native-base";
  import type { StorageManager } from "native-base";
  
  import Config from "../../../nativebase.config";
  
  const myTheme = extendTheme(<%- theme %>);
  
  type MyThemeType = typeof myTheme;
  declare module "native-base" {
    interface ICustomTheme extends MyThemeType {}
  }
  
  function MyWrapper({ children }: any) {
    const { colorMode, toggleColorMode } = useColorMode();
  
    const bgColor = useColorModeValue('gray.50', 'gray.800');
  
    return (
      <Box
        flex={1}
        px="3"
        justifyContent="center"
        alignItems="center"
        bg={bgColor}
        safeAreaY
      >
        <Tooltip
          label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
          placement="bottom right"
          openDelay={300}
          closeOnClick={false}
        >
          <IconButton
            position="absolute"
            top={12}
            right={8}
            zIndex={4}
            //@ts-ignore
            onPress={toggleColorMode}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            size="lg"
          />
        </Tooltip>
        {children}
      </Box>
    );
  }
  
  export function RenderTestButton() {
    const [state, setState] = React.useState(1);
    return (
      <Box
        //@ts-ignore
        style={{ position: "absolute", top: 10, left: 20 }}
        m={2}
        bg="red.100"
      >
        <Input m={2} size="my-size" />
        <Button
          size=""
          variant={"myNewButton"}
          // title={state.toString()}
          onPress={() => setState(state + 1)}
        />
      </Box>
    );
  }
  export default function Wrapper({ children, theme }: any) {
    // const colorModeManager: StorageManager = {
    //   get: async () => {
    //     try {
    //       const val = await localStorage.getItem("@example-wrapper-mode");
    //       return val === "dark" ? "dark" : "light";
    //     } catch (e) {
    //       console.log(e);
    //       return "light";
    //     }
    //   },
    //   set: async (value: ColorMode) => {
    //     try {
    //       //@ts-ignore
  
    //       await localStorage.setItem("@example-wrapper-mode", value);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   },
    // };
    return (
      <NativeBaseProvider
        theme={myTheme}
        config={Config}
        // colorModeManager={colorModeManager}
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <MyWrapper>{children}</MyWrapper>
      </NativeBaseProvider>
    );
  }
  `,
};
