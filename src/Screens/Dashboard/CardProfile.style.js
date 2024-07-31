import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.white,
    marginBottom: 8,
  },
  cardContainer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cardHeader: {
    flexDirection: "row",
    marginBottom: 8,
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
  },
  name: {
    fontWeight: "semibold",
    fontSize: 30,
  },
  code: {
    fontWeight: "light",
    color: Colors.accent,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    justifyContent: "flex-end",
    marginLeft: 8,
    color: Colors.primary,
  },
  homecellContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
});
