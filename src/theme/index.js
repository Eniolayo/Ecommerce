import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#01221D",
    green: "#07BFA5",
    yellow: "#FFBD59",
    orange: "#FF914D",
    red: "#FF6264",
    pink: "#F5B3A5",
  },
  secondary: {
    black: "#01040D",
    grey: "#8991A4",
    lightGrey: "#F4F5F6",
    white: "#FFFFFF",
  },
  brand: {
    100: "#623CEA",
    200: "#6C48EB",
    300: "#FF392B",
    400: "#9B51E0",
  },
  accent: {
    100: "#FFA000",
    200: "#219653",
    300: "#2B2B4C",
    400: "#EBECF0",
  },
  Typography: {
    100: "#1C2A53",
    200: "#555F7E",
    300: "#8E95A9",
  },
  Essential: {
    100: "#FFA000",
    200: "#279F51",
    400: "#00C3F8",
    500: "#2F80ED",
  },
  Shape: {
    100: "#F8F8F8",
    300: "#141D3A",
  },
  Icon: {
    100: "#C8CAD8",
    200: "#BAA9F6",
  },
};

const Theme = extendTheme({ colors });
export default Theme;
