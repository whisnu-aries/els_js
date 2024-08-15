import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  bodyOuter: {
    padding: 16,
  },
  bodyContainer: {
    gap: 16,
  },
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
  announcementHeader: {
    gap: 8,
  },
  announcementPillContainer: {
    gap: 8,
  },
});
