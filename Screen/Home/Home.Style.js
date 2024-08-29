import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: Colors.backgroundWhite,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default styles;
