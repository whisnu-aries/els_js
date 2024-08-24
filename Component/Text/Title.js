import { Text } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Title.Style";

const Title = ({ text, style }) => (
  <Text style={[styles.text, style]}>{text}</Text>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Title;
