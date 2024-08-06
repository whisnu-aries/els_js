import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: "row",
    gap: 8,
    backgroundColor: Colors.slate,
  },
  photo: {
    flex: 1,
    height: 100,
    borderRadius: 8,
  },
  bodyContainer: {
    flex: 2,
    justifyContent: "space-between",
  },
  link: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    color: Colors.primary,
  },
});
