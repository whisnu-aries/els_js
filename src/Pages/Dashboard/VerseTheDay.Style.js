import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: Colors.slate,
  },
  verseTheDayTitle: {
    marginBottom: 4,
  },
  verseTheDayButtonContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "flex-end",
  },
  icon: {
    color: Colors.primary,
  },
});
