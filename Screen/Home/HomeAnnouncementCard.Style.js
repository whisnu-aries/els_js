import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const Styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    gap: 8,
    backgroundColor: Colors.slate,
  },
  photo: {
    flex: 1,
    minHeight: 100,
    borderRadius: 8,
  },
  bodyContainer: {
    flex: 2,
    gap: 8,
    justifyContent: "space-between",
  },
  bodyTextContainer: {
    gap: 2,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonActionContainer: {
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    color: Colors.primary,
  },
});

export default Styles;
