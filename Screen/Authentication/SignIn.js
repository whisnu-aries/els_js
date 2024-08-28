import { useState } from "react";
import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import Styles from "./SignIn.Style";

import Card from "../../Component/Card/Card";
import GeneralTextInput from "../../Component/TextInput/GeneralTextInput";
import GeneralButton from "../../Component/Button/GeneralButton";
import LinkButton from "../../Component/Button/LinkButton";

const handleSignIn = (method) => {
  navigation.navigate("Dashboard");
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

const renderInputPassword = (setPassword, t) => (
  <GeneralTextInput
    label={t("authentication.label.password")}
    placeholder={t("authentication.label.password")}
    changeHandler={setPassword}
    secureTextEntry={true}
  />
);

const renderSignInButton = (t, navigation) => (
  <GeneralButton
    type="secondary"
    text={t("authentication.sign_in")}
    onPress={() => navigation.navigate("Dashboard")}
  />
);

const renderForgetPassButton = ({ method }, t) => (
  <LinkButton
    text={t("authentication.forgot_password")}
    onPress={() => method.setShowedSection("ForgotPassword")}
  />
);

const renderInputArea = (method, signInMethod, t, navigation) => (
  <View style={Styles.inputContainer}>
    <Text style={Styles.title}>{t("authentication.sign_in")}</Text>
    {renderInputEmail(signInMethod.setEmail, t)}
    {renderInputPassword(signInMethod.setPassword, t)}
    {renderSignInButton(t, navigation)}
    {renderForgetPassButton(method, t)}
  </View>
);

const getSignInState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return {
    email,
    setEmail,
    password,
    setPassword,
  };
};

const SignIn = (method) => {
  const signInMethod = getSignInState();
  const navigation = useNavigation();
  const { t } = useTranslation();

  return <Card>{renderInputArea(method, signInMethod, t, navigation)}</Card>;
};

export default SignIn;
