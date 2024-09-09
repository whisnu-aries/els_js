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

import icon from "../../Component/Icon/register.png";
import GeneralPasswordInput from "../../Component/TextInput/GeneralPasswordInput";

const initialState = {
  full_name: "",
  email: "",
  password: "",
};

const renderImage = () => (
  <Image source={icon} style={Styles.imageContainer} resizeMode="cover" />
);

const renderInputFullName = (t, method) => (
  <View>
    <Label text={t("authentication.label.full_name")} />
    <GeneralTextInput
      value={method.signUpData.full_name}
      inputMode="text"
      changeHandler={(text) =>
        method.setSignUpData((prevState) => ({ ...prevState, full_name: text }))
      }
    />
  </View>
);

const renderInputEmail = (t, method) => (
  <View>
    <Label text={t("authentication.label.email")} />
    <GeneralTextInput
      value={method.signUpData.email}
      inputMode="email"
      changeHandler={(text) =>
        method.setSignUpData((prevState) => ({ ...prevState, email: text }))
      }
    />
  </View>
);

const renderInputPassword = (t, method) => (
  <View>
    <Label text={t("authentication.label.password")} />
    <GeneralPasswordInput
      value={method.signUpData.password}
      inputMode="text"
      changeHandler={(text) =>
        method.setSignUpData((prevState) => ({ ...prevState, password: text }))
      }
      showPassword={method.showPassword}
      toggleShowPassword={() =>
        method.setShowPassword((prevState) => !prevState)
      }
    />
  </View>
);

const renderButtonSignUp = (t, navigation) => (
  <GeneralButton
    type="secondary"
    text={t("authentication.sign_up")}
    onPress={() => navigation.navigate("OTP")}
  />
);

const renderInputArea = (t, method, navigation) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={Styles.inputContainer}
  >
    {renderImage()}
    <Header text={t("authentication.sign_up")} />
    {renderInputFullName(t, method)}
    {renderInputEmail(t, method)}
    {renderInputPassword(t, method)}
    {renderButtonSignUp(t, navigation)}
  </KeyboardAvoidingView>
);

const renderFooterLink = (t, navigation) => (
  <View style={{ flexDirection: "row" }}>
    <Text>{t("authentication.have_account")}</Text>
    <LinkButton
      text={t("authentication.sign_in")}
      onPress={() => navigation.navigate("SignIn")}
    />
  </View>
);

const getSignUpState = () => {
  const [signUpData, setSignUpData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  return {
    signUpData,
    setSignUpData,
    showPassword,
    setShowPassword,
  };
};

const SignUp = () => {
  const method = getSignUpState();
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={Styles.container}>
      {renderInputArea(t, method, navigation)}
      {renderFooterLink(t, navigation)}
    </SafeAreaView>
  );
};

export default SignUp;
