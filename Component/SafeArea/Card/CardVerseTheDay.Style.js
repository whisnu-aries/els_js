import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "flex-end",
  },
  icon: {
    color: Colors.primary,
  },
});

export default styles;
