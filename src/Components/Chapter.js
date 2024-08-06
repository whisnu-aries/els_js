import { Text } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Chapter.Style";

const Chapter = ({ chapter }) => <Text style={styles.text}>{chapter}</Text>;

Chapter.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default Chapter;
