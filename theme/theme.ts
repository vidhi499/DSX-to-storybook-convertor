const theme = {
  foundation: {
    colors: {
      newColor: {
        "50": "#2878ff",
        "100": "#2570ff",
        "200": "#2368f3",
        "300": "#2060e0",
        "400": "#1d58cd",
        "500": "#1b50bb",
        "600": "#1848a8",
        "700": "#153e91",
        "800": "#11347b",
        "900": "#0e2b64",
      },
      primary: {
        "50": "#2878ff",
        "100": "#2570ff",
        "200": "#2368f3",
        "300": "#2060e0",
        "400": "#1d58cd",
        "500": "#1b50bb",
        "600": "#1848a8",
        "700": "#153e91",
        "800": "#11347b",
        "900": "#0e2b64",
      },
    },
  },
  components: {
    Button:
      '{\n  variants: {\n          rounded: ({\n            colorScheme\n          }) => {\n            return {\n              bg: `${colorScheme}.500`,\n              rounded: "full"\n            };\n          }\n        }}',
    Checkbox: '{\nsizes:{\n"xl":{boxSize:"20"}}\n}',
  },
};

module.exports = { theme };
