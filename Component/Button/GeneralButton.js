import { Pressable, Text, View } from "react-native";
import propTypes from "prop-types";

import Styles from "./GeneralButton.Style";

const GeneralButton = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={Styles.container}>
        <Text style={Styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

GeneralButton.propTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default GeneralButton;
