import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Colors } from "../../Constants/Colors";

const { width } = Dimensions.get("window");
const ImageWidth = width - 80;
const ImageHeight = width * (9 / 16);

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
