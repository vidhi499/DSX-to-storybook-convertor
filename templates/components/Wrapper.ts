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
  import iconFont from "react-native-vector-icons/Fonts/FontAwesome.ttf";
  import antDesignIconFont from "react-native-vector-icons/Fonts/AntDesign.ttf";
  import entypoIconFont from "react-native-vector-icons/Fonts/Entypo.ttf";
  import evilIconsIconFont from "react-native-vector-icons/Fonts/EvilIcons.ttf";
  import fontistoIconFont from "react-native-vector-icons/Fonts/Fontisto.ttf";
  import foundationIconFont from "react-native-vector-icons/Fonts/Foundation.ttf";
  import ionIconsconFont from "react-native-vector-icons/Fonts/Ionicons.ttf";
  import materialIconsIconFont from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
  import materialCommunityIconsIconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
  import octoIconFont from "react-native-vector-icons/Fonts/Octicons.ttf";
  import zocialIconFont from "react-native-vector-icons/Fonts/Zocial.ttf";
  import simpleLineIconFont from "react-native-vector-icons/Fonts/SimpleLineIcons.ttf";
  
  const iconFontStyles =
    "@font-face {src: url(" + iconFont + ");font-family: FontAwesome;}";
  const antIconFontStyles =
    "@font-face {src: url(" + antDesignIconFont + ");font-family: AntDesign;}";
  const entypoIconFontStyles =
    "@font-face {src: url(" + entypoIconFont + ");font-family: Entypo;}";
  const evilIconFontStyles =
    "@font-face {src: url(" + evilIconsIconFont + ");font-family: EvilIcons;}";
  const fontistoIconFontStyles =
    "@font-face {src: url(" + fontistoIconFont + ");font-family: Fontisto;}";
  const foundationIconFontStyles =
    "@font-face {src: url(" + foundationIconFont + ");font-family: Foundation;}";
  const ionIconFontStyles =
    "@font-face {src: url(" + ionIconsconFont + ");font-family: Ionicons;}";
  const materialIconFontStyles =
    "@font-face {src: url(" +
    materialIconsIconFont +
    ");font-family: MaterialIcons;}";
  const materialCommunityIconFontStyles =
    "@font-face {src: url(" +
    materialCommunityIconsIconFont +
    ");font-family: MaterialCommunityIcons;}";
  const octiconFontStyles =
    "@font-face {src: url(" + octoIconFont + ");font-family: OctiIcons;}";
  const zocialIconFontStyles =
    "@font-face {src: url(" + zocialIconFont + ");font-family: Zocial;}";
  const simpleLineFontStyles =
    "@font-face {src: url(" +
    simpleLineIconFont +
    ");font-family: SimpleLineIcons;}";
  
  // eslint-disable-next-line no-restricted-globals
  var iframe = frameElement;
  // @ts-ignore
  var ifrDoc = iframe.contentDocument;
  console.log(iframe, ifrDoc);
  var style = ifrDoc.createElement("style");
  style.type = "text/css";
  
  style.appendChild(document.createTextNode(iconFontStyles));
  style.appendChild(document.createTextNode(antIconFontStyles));
  style.appendChild(document.createTextNode(entypoIconFontStyles));
  style.appendChild(document.createTextNode(evilIconFontStyles));
  style.appendChild(document.createTextNode(fontistoIconFontStyles));
  style.appendChild(document.createTextNode(foundationIconFontStyles));
  style.appendChild(document.createTextNode(ionIconFontStyles));
  style.appendChild(document.createTextNode(materialCommunityIconFontStyles));
  style.appendChild(document.createTextNode(materialIconFontStyles));
  style.appendChild(document.createTextNode(octiconFontStyles));
  style.appendChild(document.createTextNode(zocialIconFontStyles));
  style.appendChild(document.createTextNode(simpleLineFontStyles));
  
  // eslint-disable-next-line no-restricted-globals
ifrDoc.body.appendChild(style);
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
        h="100vh"
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
