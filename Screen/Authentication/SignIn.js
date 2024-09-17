import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import Styles from "./SignIn.Style";

import Header from "../../Component/Text/Header";
import Label from "../../Component/Text/Label";
import GeneralTextInput from "../../Component/TextInput/GeneralTextInput";
import GeneralButton from "../../Component/Button/GeneralButton";
import LinkButton from "../../Component/Button/LinkButton";

import icon from "../../Component/Icon/login.png";
import GeneralPasswordInput from "../../Component/TextInput/GeneralPasswordInput";

const initialState = {
  email: "",
  password: "",
};

const renderImage = () => (
  <Image source={icon} style={Styles.imageContainer} resizeMode="cover" />
);

const renderInputEmail = (t, method) => (
  <View>
    <Label text={t("authentication.label.email")} />
    <GeneralTextInput
      value={method.signInData.email}
      inputMode="email"
      changeHandler={(text) =>
        method.setSignInData((prevState) => ({ ...prevState, email: text }))
      }
    />
  </View>
);

const renderInputPassword = (t, method) => (
  <View>
    <Label text={t("authentication.label.password")} />
    <GeneralPasswordInput
      value={method.signInData.password}
      inputMode="text"
      changeHandler={(text) =>
        method.setSignInData((prevState) => ({ ...prevState, password: text }))
      }
      showPassword={method.showPassword}
      toggleShowPassword={() =>
        method.setShowPassword((prevState) => !prevState)
      }
    />
  </View>
);

const renderForgotPasswordButton = (t, navigation) => (
  <View style={Styles.forgotPasswordContainer}>
    <LinkButton
      text={t("authentication.forgot_password")}
      onPress={() => navigation.navigate("ForgotPassword")}
    />
  </View>
);

const renderButtonSignIn = (t, navigation) => (
  <GeneralButton
    type="secondary"
    text={t("authentication.sign_in")}
    onPress={() => navigation.replace("Dashboard")}
  />
);

const renderInputArea = (t, method, navigation) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={Styles.inputContainer}
  >
    {renderImage()}
    <Header text={t("authentication.sign_in")} />
    {renderInputEmail(t, method)}
    {renderInputPassword(t, method)}
    {renderForgotPasswordButton(t, navigation)}
    {renderButtonSignIn(t, navigation)}
  </KeyboardAvoidingView>
);

const renderFooterLink = (t, navigation) => (
  <View style={Styles.footerContainer}>
    <Text>{t("authentication.no_account")}</Text>
    <LinkButton
      text={t("authentication.sign_up")}
      onPress={() => navigation.navigate("SignUp")}
    />
  </View>
);

const getSignInState = () => {
  const [signInData, setSignInData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  return {
    signInData,
    setSignInData,
    showPassword,
    setShowPassword,
  };
};

const SignIn = () => {
  const method = getSignInState();
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={Styles.container}>
      {renderInputArea(t, method, navigation)}
      {renderFooterLink(t, navigation)}
    </SafeAreaView>
  );
};

export default SignIn;
