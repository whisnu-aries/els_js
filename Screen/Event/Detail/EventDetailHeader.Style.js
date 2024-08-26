import { StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftButtonContainer: {
    flexDirection: "row",
    gap: 16,
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: { textAlign: "center" },
  rightButtonContainer: {
    flexDirection: "row-reverse",
    gap: 16,
    flex: 1,
    alignItems: "center",
  },
  iconButton: {
    backgroundColor: Colors.backgroundWhite,
    padding: 8,
    borderRadius: 24,
  },
  icon: {
    color: Colors.primary,
  },
});

export default styles;
