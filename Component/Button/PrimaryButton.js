import { Pressable, Text, View } from "react-native";
import propTypes from "prop-types";

import Styles from "./PrimaryButton.Style";

const PrimaryButton = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={Styles.container}>
        <Text style={Styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

PrimaryButton.propTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default PrimaryButton;
