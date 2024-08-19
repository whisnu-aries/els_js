import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  eventContainer: {
    gap: 4,
  },
  eventImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginVertical: 4,
  },
  eventDescriptionContainer: {
    flexDirection: "row",
    gap: 4,
  },
  eventButtonContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
  },
});
