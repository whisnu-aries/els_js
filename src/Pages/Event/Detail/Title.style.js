import { StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  backButtonContainer: {
    padding: 8,
    position: "absolute",
    left: 10,
    zIndex: 1,
  },
  backButton: {
    color: Colors.black,
  },
  titleText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    color: Colors.black,
  },
});
