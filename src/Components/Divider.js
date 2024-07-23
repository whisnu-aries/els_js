import { StyleSheet, View } from "react-native";
import { Colors } from "../Constants/Colors";

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1, // Set the desired thickness of the divider
    backgroundColor: Colors.gray, // Set the divider color
  },
});
