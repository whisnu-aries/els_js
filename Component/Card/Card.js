import { View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Card.Style";

const Card = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

Card.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default Card;
