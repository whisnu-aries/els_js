import { Text } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Title.Style";

const Title = ({ text }) => <Text style={styles.text}>{text}</Text>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
