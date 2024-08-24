import { Pressable, View } from "react-native";
import propTypes from "prop-types";

import Styles from "./IconButton.Style";

const IconButton = ({ children, style, onPress }) => (
  <Pressable onPress={onPress}>
    <View style={[Styles.button, style]}>{children}</View>
  </Pressable>
);

IconButton.propTypes = {
  children: propTypes.element.isRequired,
  onPress: propTypes.func.isRequired,
  style: propTypes.object,
};

export default IconButton;
