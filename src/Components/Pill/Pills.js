import { Pressable, Text, View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Pills.Style";

const Pill = ({ data, handleClick }) => {
  return (
    <Pressable onPress={() => handleClick(data.id)}>
      <View style={data.isActive ? styles.activeContainer : styles.container}>
        <Text style={data.isActive ? styles.textActive : styles.text}>
          {data.name}
        </Text>
      </View>
    </Pressable>
  );
};

Pill.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pill;
