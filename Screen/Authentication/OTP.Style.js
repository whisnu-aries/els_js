import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  inputContainer: {
    padding: 40,
    justifyContent: "center",
    gap: 16,
    flex: 1,
  },
  imageContainer: {
    width: ImageWidth,
    height: ImageHeight,
  },
  footerContainer: {
    flexDirection: "row",
  },
});

export default styles;
