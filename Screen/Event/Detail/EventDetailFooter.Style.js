import { StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 2,
    backgroundColor: Colors.slate,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
  },
});

export default styles;
