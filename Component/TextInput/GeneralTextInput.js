import { Text, TextInput, View } from "react-native";
import propTypes from "prop-types";

import Styles from "./GeneralTextInput.Style";

const renderErrorMessage = (errorMessage) => (
  <Text style={Styles.errorMessage}>{errorMessage}</Text>
);

const GeneralTextInput = ({ errorMessage, changeHandler, ...props }) => (
  <View style={Styles.container}>
    <TextInput
      style={[Styles.textContainer, errorMessage && Styles.textContainerError]}
      onChangeText={(text) => changeHandler(text)}
      {...props}
    />
    {errorMessage && renderErrorMessage(errorMessage)}
  </View>
);

GeneralTextInput.propTypes = {
  errorMessage: propTypes.string,
  changeHandler: propTypes.func.isRequired,
};

export default GeneralTextInput;
