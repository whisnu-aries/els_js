import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

const { height } = Dimensions.get("window");
const ImageHeight = Math.round(height / 3);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
    marginBottom: 60,
  },
  bodyContainer: {
    padding: 16,
    gap: 8,
  },
  image: {
    width: "100%",
    height: ImageHeight,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerContainer: {
    gap: 8,
  },
  headerInnerContainer: {
    gap: 2,
  },
  eventHeaderItem: {
    flexDirection: "row",
    gap: 4,
  },
  eventBodyContainer: {
    gap: 4,
  },
});

export default styles;
