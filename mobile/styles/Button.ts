import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export default StyleSheet.create({
  mb1: {
    marginBottom: 20,
  },

  h1: {
    fontSize: 30,
    fontWeight: "700",
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: "100%",
    display: "flex",
    borderRadius: 5,
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 15,
    height: 75,
    width: 75,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75 * 2,
    backgroundColor: COLORS.primary,
  },
});
