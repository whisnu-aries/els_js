import { Pressable, Text, View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./IconPills.style";

const IconPills = ({ icon, title, description }) => {
  return (
    <Pressable onPress={() => console.log("Service / Homecell")}>
      <View style={styles.pillContainer}>
        {icon}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
};

IconPills.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default IconPills;
