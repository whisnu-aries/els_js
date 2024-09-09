import { Pressable, Text, TextInput, View } from "react-native";
import propTypes from "prop-types";
import {
  EyeSlashIcon as ShowPassword,
  EyeIcon as HidePassword,
} from "react-native-heroicons/outline";

import Styles from "./GeneralPasswordInput.Style";

const renderErrorMessage = (errorMessage) => (
  <Text style={Styles.errorMessage}>{errorMessage}</Text>
);

const GeneralPasswordInput = ({
  errorMessage,
  changeHandler,
  showPassword,
  toggleShowPassword,
  ...props
}) => {
  return (
    <View style={Styles.outerContainer}>
      <View style={Styles.container}>
        <TextInput
          secureTextEntry={!showPassword}
          style={Styles.textContainer}
          onChangeText={(text) => changeHandler(text)}
          {...props}
        />
        <Pressable onPress={() => toggleShowPassword()}>
          {showPassword ? (
            <HidePassword style={Styles.icon} size={14} />
          ) : (
            <ShowPassword style={Styles.icon} size={14} />
          )}
        </Pressable>
      </View>
      {errorMessage && renderErrorMessage(errorMessage)}
    </View>
  );
};

GeneralPasswordInput.propTypes = {
  errorMessage: propTypes.string,
  changeHandler: propTypes.func.isRequired,
  showPassword: propTypes.bool.isRequired,
  toggleShowPassword: propTypes.func.isRequired,
};

export default GeneralPasswordInput;
