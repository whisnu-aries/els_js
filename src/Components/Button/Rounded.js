import { Pressable } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./Rounded.Style";

const RoundedButton = ({ clickHandler, children }) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={clickHandler}>
      {children}
    </Pressable>
  );
};

RoundedButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default RoundedButton;
