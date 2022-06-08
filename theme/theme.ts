const theme = {
  foundation: {
    colors: {
      primary: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#005885",
        900: "#003F5E",
      },
      amber: {
        400: "#d97706",
      },
    },
    sizes: {
      "2xl": "45",
    },
  },
  components: {
    Button:
      "{variants: {rounded: ({ colorScheme }) => {return {bg: `${colorScheme}.500`,rounded: 'full',};},},}",
    Heading:
      "{baseStyle: ({ colorMode }) => {return {color: colorMode === 'dark' ? 'red.300' : 'blue.300',fontWeight: 'normal',};},}",
  },
};

module.exports = { theme };
