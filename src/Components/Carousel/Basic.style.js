import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
    marginVertical: 8,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: [{ translateY: -15 }],
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: [{ translateY: -15 }],
  },
});
