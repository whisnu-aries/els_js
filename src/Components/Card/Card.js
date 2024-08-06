import { View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./Card.Style";

const Card = ({ children }) => <View style={styles.container}>{children}</View>;

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
