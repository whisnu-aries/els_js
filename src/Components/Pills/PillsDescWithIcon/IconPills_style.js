import { StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

export const styles = StyleSheet.create({
  pillContainer: {
    flexDirection: "row",
    verticalAlign: "middle",
    paddingVertical: 4,
    paddingLeft: 8,
    paddingRight: 15,
    marginTop: 8,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.primary,
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 6,
  },
  name: {
    fontWeight: "bold",
  },
  description: {
    fontWeight: "light",
    color: Colors.accent,
  },
});
