import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  active: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    marginHorizontal: 4,
  },
  inactive: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.accent,
    marginHorizontal: 4,
  },
});
