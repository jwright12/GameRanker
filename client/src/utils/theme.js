import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#F1F2F3",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#286FB4",
    800: "#7BA21B",
    900: "#064C2E"
  }
  
};

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}
const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top'
            },
          },
        },
      },
    },
  },
})

const customTheme = extendTheme({ colors, theme, activeLabelStyles });

export default customTheme;