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

import Styles from "./ForgotPassword.Style";

import Header from "../../Component/Text/Header";
import Label from "../../Component/Text/Label";
import GeneralTextInput from "../../Component/TextInput/GeneralTextInput";
import GeneralButton from "../../Component/Button/GeneralButton";
import LinkButton from "../../Component/Button/LinkButton";

import icon from "../../Component/Icon/forgot_password.png";
import Subtitle from "../../Component/Text/Subtitle";

const initialState = {
  email: "",
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

const renderButtonSignIn = (t, navigation) => (
  <GeneralButton
    type="secondary"
    text={t("authentication.submit")}
    onPress={() => navigation.navigate("SuccessForgotPassword")}
  />
);

const renderInputArea = (t, method, navigation) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={Styles.inputContainer}
  >
    {renderImage()}
    <Header text={t("authentication.forgot_password")} />
    <Subtitle text="Don't worry! It happens. Please enter the address associated with you account." />
    {renderInputEmail(t, method)}
    {renderButtonSignIn(t, navigation)}
  </KeyboardAvoidingView>
);

const renderFooterLink = (t, navigation) => (
  <View style={Styles.footerContainer}>
    <Text>{t("authentication.have_account")}</Text>
    <LinkButton
      text={t("authentication.sign_in")}
      onPress={() => navigation.navigate("SignIn")}
    />
  </View>
);

const getForgotPasswordState = () => {
  const [signInData, setSignInData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  return {
    signInData,
    setSignInData,
    showPassword,
    setShowPassword,
  };
};

const ForgotPassword = () => {
  const method = getForgotPasswordState();
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={Styles.container}>
      {renderInputArea(t, method, navigation)}
      {renderFooterLink(t, navigation)}
    </SafeAreaView>
  );
};

export default ForgotPassword;
