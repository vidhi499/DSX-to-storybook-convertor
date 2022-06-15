module.exports = {
  template: `import React from "react";
  import {
    VStack,
    Image,
    ScrollView,
    Heading,
    Center,
    useTheme,
    Text,
    Box,
  } from "native-base";
  
  export function Example() {
    const theme = useTheme();
    return (
      <>
        <ScrollView
          px="20"
          // contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}
        >
          <Heading mb="10" textAlign="center" mt="3">
            Image Sizes
          </Heading>
          {/* <Center mt="3" h="80"> */}
  
          <VStack
            space={2}
            justifyContent="center"
            alignItems="center"
            safeAreaTop
            // my={6}
            mb={6}
          >
            {Object.keys(theme.components.Image.sizes).map((size) => {
              console.log(size);
              if (size === "full") {
                return null;
              }
              return (
                <>
                  <Text>{size}</Text>
                  <Image
                    key={size}
                    size={size}
                    // resizeMode="cover"
                    source={{
                      uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    alt={"Alternate Text " + size}
                  />
                </>
              );
            })}
          </VStack>
          {/* </Center> */}
        </ScrollView>
      </>
    );
  }
  `,
};
