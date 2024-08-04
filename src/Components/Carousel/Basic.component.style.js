import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
    marginVertical: 8,
  },
  indicators: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: 16,
    transform: [{ translateY: -16 }],
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: 16,
    transform: [{ translateY: -16 }],
  },
});
