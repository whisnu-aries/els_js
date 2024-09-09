import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundWhite,
    padding: 24,
    borderRadius: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
});
