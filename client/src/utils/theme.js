import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#F1F2F3",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#4B08A1",
    800: "#7BA21B",
    900: "#064C2E"
  }
  
};

const customTheme = extendTheme({ colors });

export default customTheme;