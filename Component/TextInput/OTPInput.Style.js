import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  outerContainer: {
    gap: 4,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    flexDirection: "row",
    paddingVertical: 4,
  },
  textContainer: {
    flex: 1,
    textAlign: "center",
    fontSize: "32",
  },
  icon: {
    color: Colors.black,
  },
  errorMessage: {
    borderBottomColor: Colors.secondary,
  },
});

export default styles;
