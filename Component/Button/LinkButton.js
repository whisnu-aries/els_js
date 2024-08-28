import { Pressable, Text } from "react-native";
import propTypes from "prop-types";

import Styles from "./LinkButton.Style";

const LinkButton = ({ text, onPress }) => {
  return (
    <Pressable style={Styles.container} onPress={onPress}>
      <Text style={Styles.text}>{text}</Text>
    </Pressable>
  );
};

LinkButton.propTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default LinkButton;
