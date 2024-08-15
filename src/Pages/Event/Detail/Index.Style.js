import { StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  eventImage: {
    width: "100%",
    height: 300,
    // borderRadius: 8,
    // marginVertical: 4,
  },
  eventContainer: {
    gap: 4,
  },
  eventBody: {
    padding: 16,
    gap: 8,
  },
  eventDescriptionContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
