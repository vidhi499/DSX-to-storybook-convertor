const theme = {
  foundation: {
    colors: {
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
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
