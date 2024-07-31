import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: 10,
    transform: [{ translateY: -15 }],
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: 10,
    transform: [{ translateY: -15 }],
  },
});
