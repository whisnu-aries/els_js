import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import Styles from "./Authentication.Style";

import SignInSection from "./SignIn";
import SignUpSection from "./SignUp";
import ForgotPasswordSection from "./ForgotPassword";
import { StatusBar } from "expo-status-bar";
import LinkButton from "../../Component/Button/LinkButton";

const renderSignInSection = (method) => <SignInSection method={method} />;

const renderSignUpSection = (method) => (
  <SignUpSection setShowedSection={method} />
);

const renderForgotPasswordSection = (method) => (
  <ForgotPasswordSection setShowedSection={method} />
);

const renderAuthenticationHeader = (t) => {
  return (
    <View style={Styles.headerContainer}>
      <Text style={Styles.titleText}>Welcome home!</Text>
      <Text style={Styles.subtitleText}>{t("authentication.description")}</Text>
    </View>
  );
};

const renderAuthenticationBody = (method) => {
  switch (method.showedSection) {
    case "SignIn":
      return renderSignInSection(method);
    case "SignUp":
      return renderSignUpSection(method.setShowedSection);
    case "ForgotPassword":
      return renderForgotPasswordSection(method.setShowedSection);
  }
};

const renderSignUpFooter = (method, t) => (
  <View style={Styles.signInContainer}>
    <Text>{t("authentication.no_account")}</Text>
    <LinkButton
      text={t("authentication.sign_up")}
      onPress={() => method.setShowedSection("SignUp")}
    />
  </View>
);

const renderSignInFooter = (method, t) => (
  <View style={Styles.signInContainer}>
    <Text>{t("authentication.have_account")}</Text>
    <LinkButton
      text={t("authentication.sign_in")}
      onPress={() => method.setShowedSection("SignIn")}
    />
  </View>
);

const renderAuthenticationFooter = (method, t) => {
  switch (method.showedSection) {
    case "SignIn":
      return renderSignUpFooter(method, t);
    case "SignUp":
    case "ForgotPassword":
      return renderSignInFooter(method, t);
  }
};

const getAuthenticationState = () => {
  const [showedSection, setShowedSection] = useState("SignIn");

  return {
    showedSection,
    setShowedSection,
  };
};

const Authentication = () => {
  const authenticationMethod = getAuthenticationState();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar style="dark" />
      <View style={Styles.bodyContainer}>
        {renderAuthenticationHeader(t)}
        {renderAuthenticationBody(authenticationMethod)}
      </View>
      {renderAuthenticationFooter(authenticationMethod, t)}
    </SafeAreaView>
  );
};

export default Authentication;
