import { Pressable, Text, View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Pills.Style";

const Pill = ({ id, name, isActive, handleClick }) => {
  return (
    <Pressable onPress={() => handleClick(id)}>
      <View style={isActive ? styles.activeContainer : styles.container}>
        <Text style={isActive ? styles.textActive : styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
};

Pill.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pill;
