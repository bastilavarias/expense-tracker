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
  link: {
    textAlign: "center",
    color: COLORS.primary,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  center: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
