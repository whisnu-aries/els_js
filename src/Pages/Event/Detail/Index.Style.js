import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../../Constants/Colors";

const { height } = Dimensions.get("window");
const ImageHeight = Math.round(height / 3);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  eventImage: {
    width: "100%",
    height: ImageHeight,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  eventHeaderContainer: {
    padding: 16,
    gap: 8,
  },
  eventHeaderInnerContainer: {
    gap: 4,
  },
  eventHeaderItem: {
    flexDirection: "row",
    gap: 4,
  },
  eventBodyContainer: {
    padding: 16,
    gap: 4,
  },
  eventButtonContainer: {
    padding: 16,
  },

  divider: {
    backgroundColor: Colors.gray,
    width: "100%",
    height: 2,
  },
});
