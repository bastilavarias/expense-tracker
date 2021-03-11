import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const COLORS = {
  primary: "#f39c12",
  secondary: "#CDCDD2",
  primaryShade: "rgba(243, 156, 18, 0.15)",
  black: "#000",
  white: "#ffff",

  lightGray: "grey",
  lightGray2: "#f6f6f7",
  lightGray3: "#efeff1",
  lightGray4: "#f8f8f9",
  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font size
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimension
  width,
  height,
};

const appTheme = {
  COLORS,
  SIZES,
};

export default appTheme;
