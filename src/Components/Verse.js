import { Text, View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Verse.Style";

const Verse = ({ verse }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{verse}</Text>
  </View>
);

Verse.propTypes = {
  verse: PropTypes.string.isRequired,
};

export default Verse;
