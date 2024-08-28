import { Text, View } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Styles from "./ForgotPassword.Style";

import GeneralTextInput from "../../Component/TextInput/GeneralTextInput";
import GeneralButton from "../../Component/Button/GeneralButton";
import Card from "../../Component/Card/Card";

const handleSignIn = (method) => {
  console.log(method.email);
};

const renderInputEmail = (setEmail, t) => (
  <GeneralTextInput
    label={t("authentication.label.email")}
    inputMode="email"
    placeholder={t("authentication.label.email")}
    autoCapitalize="none"
    changeHandler={setEmail}
  />
);

const renderForgotPasswordButton = (method, t) => (
  <GeneralButton
    type="secondary"
    text={t("authentication.forgot_password")}
    onPress={() => handleSignIn(method)}
  />
);

const renderInputArea = (ForgotPasswordMethod, t) => (
  <View style={Styles.inputContainer}>
    <Text style={Styles.title}>{t("authentication.forgot_password")}</Text>
    {renderInputEmail(ForgotPasswordMethod.setEmail, t)}
    {renderForgotPasswordButton(ForgotPasswordMethod, t)}
  </View>
);

const getForgotPasswordState = () => {
  const [email, setEmail] = useState("");

  return {
    email,
    setEmail,
  };
};

const ForgotPassword = () => {
  const ForgotPasswordMethod = getForgotPasswordState();
  const { t } = useTranslation();

  return <Card>{renderInputArea(ForgotPasswordMethod, t)}</Card>;
};

export default ForgotPassword;
