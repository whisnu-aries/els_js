import { Text } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Subtitle.Style";

const Subtitle = ({ text }) => <Text style={styles.text}>{text}</Text>;

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
