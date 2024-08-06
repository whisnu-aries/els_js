import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  locationLabel: {
    fontWeight: "light",
    color: Colors.white,
  },
  currentLocationContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  currentLocationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  currentLocationArrow: {
    color: Colors.white,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
  },
  notificationIcon: {
    justifyContent: "flex-end",
    color: Colors.white,
  },
  profilePicture: {
    backgroundColor: Colors.gray,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
