import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  errorMessage: {
    color: "red",
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    paddingVertical: 4,
  },
  textContainerError: {
    borderBottomColor: "red",
  },
});

export default styles;
