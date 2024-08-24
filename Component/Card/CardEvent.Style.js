import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginVertical: 4,
  },
  descriptionContainer: {
    gap: 2,
  },
  itemContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
  },
});

export default styles;
