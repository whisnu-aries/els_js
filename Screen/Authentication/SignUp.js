import { useState } from "react";
import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import Styles from "./SignUp.Style";

import GeneralTextInput from "../../Component/TextInput/GeneralTextInput";
import GeneralButton from "../../Component/Button/GeneralButton";
import Card from "../../Component/Card/Card";

const handleSignUp = (method) => {
  console.log(method.fullName);
  console.log(method.email);
  console.log(method.password);
};

const renderInputFullName = (setFullName, t) => (
  <GeneralTextInput
    label={t("authentication.label.full_name")}
    placeholder={t("authentication.label.full_name")}
    changeHandler={setFullName}
  />
);

const renderInputEmail = (setEmail, t) => (
  <GeneralTextInput
    label={t("authentication.label.email")}
    inputMode="email"
    placeholder={t("authentication.label.email")}
    autoCapitalize="none"
    changeHandler={setEmail}
  />
);

const renderInputPassword = (setPassword, t) => (
  <GeneralTextInput
    label={t("authentication.label.password")}
    placeholder={t("authentication.label.password")}
    changeHandler={setPassword}
    secureTextEntry={true}
  />
);

const renderSignUpButton = (signInMethod, t) => (
  <GeneralButton
    type="secondary"
    text={t("authentication.sign_up")}
    onPress={() => handleSignUp(signInMethod)}
  />
);

const renderInputArea = (signUpMethod, t) => (
  <View style={Styles.inputContainer}>
    <Text style={Styles.title}>{t("authentication.sign_up")}</Text>
    {renderInputFullName(signUpMethod.setFullName, t)}
    {renderInputEmail(signUpMethod.setEmail, t)}
    {renderInputPassword(signUpMethod.setPassword, t)}
    {renderSignUpButton(signUpMethod, t)}
  </View>
);

const getSignUpState = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
  };
};

const SignUp = () => {
  const signUpMethod = getSignUpState();
  const { t } = useTranslation();

  return <Card>{renderInputArea(signUpMethod, t)}</Card>;
};

export default SignUp;
