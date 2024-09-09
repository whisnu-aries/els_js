import { Text } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Header.Style";

const Label = ({ text, style }) => (
  <Text style={[styles.text, style]}>{text}</Text>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.array,
};

export default Label;
