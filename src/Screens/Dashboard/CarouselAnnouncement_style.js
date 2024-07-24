import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  cardContainer: {
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cardInnerContainer: {
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  textContainer: {
    position: "absolute", // Position text container absolutely
    bottom: 10, // Adjust text position as needed
    left: 10, // Adjust text position as needed
  },
  titleText: {
    fontSize: 18, // Adjust title font size
    fontWeight: "bold", // Adjust title font weight
    color: "#fff", // Set text color (consider contrasting with image)
  },
  descriptionText: {
    fontSize: 14, // Adjust description font size
    color: "#fff", // Set text color (consider contrasting with image)
  },
});
