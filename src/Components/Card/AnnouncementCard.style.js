import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  cardInnerContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
    width: screenWidth - 16,
    height: 200,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 24,
    width: screenWidth - 64,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
});
