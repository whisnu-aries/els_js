import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  cardInnerContainer: {
    width: screenWidth - 32,
    borderRadius: 8,
    overflow: "hidden",
  },
});
