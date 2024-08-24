import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.black,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
