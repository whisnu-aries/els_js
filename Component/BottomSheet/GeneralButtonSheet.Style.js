import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  innerContainer: {
    backgroundColor: Colors.backgroundWhite,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
});

export default styles;
