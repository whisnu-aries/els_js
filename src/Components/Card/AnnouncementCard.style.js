import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  cardInnerContainer: {
    width: screenWidth - 48,
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
    gap: 2,
    width: screenWidth - 64,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignContent: "center",
    gap: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
});
