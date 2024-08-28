import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    padding: 16,
    top: "15%",
    gap: 40,
  },
  headerContainer: {
    gap: 4,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.secondary,
  },
  subtitleText: {
    fontSize: 18,
    color: Colors.gray2,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textLink: {
    color: Colors.primary,
  },
});

export default styles;
