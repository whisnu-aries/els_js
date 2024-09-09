import { Pressable, Text, View } from "react-native";
import propTypes from "prop-types";

import Styles from "./GeneralButton.Style";
import { Colors } from "../../Constants/Colors";

const GeneralButton = ({ text, type, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[Styles.container, { backgroundColor: Colors[type] }]}>
        <Text style={Styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

GeneralButton.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default GeneralButton;
