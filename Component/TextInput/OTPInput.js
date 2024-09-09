import { Text, TextInput, View } from "react-native";
import propTypes from "prop-types";

import Styles from "./OTPInput.Style";

const renderErrorMessage = (errorMessage) => (
  <Text style={Styles.errorMessage}>{errorMessage}</Text>
);

const OTPInput = ({ errorMessage, changeHandler, ...props }) => {
  return (
    <View style={Styles.outerContainer}>
      <View style={Styles.container}>
        <TextInput
          secureTextEntry={true}
          style={Styles.textContainer}
          onChangeText={(text) => changeHandler(text)}
          {...props}
          maxLength={6}
        />
      </View>
      {errorMessage && renderErrorMessage(errorMessage)}
    </View>
  );
};

OTPInput.propTypes = {
  errorMessage: propTypes.string,
  changeHandler: propTypes.func.isRequired,
};

export default OTPInput;
