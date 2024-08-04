import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";
import AnnouncementCard from "../../Components/Card/EventCard";

export const styles = StyleSheet.create({
  announcementContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontWeight: "semibold",
    fontSize: 24,
  },
  announcementTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  announcementLink: {
    fontWeight: "light",
    color: Colors.primary,
  },

  cardInnerContainer: {
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
