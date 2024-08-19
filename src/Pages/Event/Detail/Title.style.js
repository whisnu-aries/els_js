import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingBottom: 8,
    zIndex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    width: "100%",
  },
  rightArea: {
    flexDirection: "row",
    gap: 8,
  },
});
