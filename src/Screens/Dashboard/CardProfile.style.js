import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
    color: Colors.white,
    marginBottom: 8,
  },
  cardContainer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  cardHeader: {
    flexDirection: "row",
  },
  avatar: {
    backgroundColor: Colors.gray,
    marginRight: 8,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "semibold",
    fontSize: 24,
  },
  code: {
    fontWeight: "light",
    color: Colors.accent,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    justifyContent: "flex-end",
    marginLeft: 8,
    color: Colors.primary,
  },
  homecellContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
