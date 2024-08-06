import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: Colors.primary,
  },
  activeContainer: {
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  textActive: {
    color: Colors.white,
    fontWeight: "bold",
  },
});
