import { SafeAreaView, View, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import icon from "../../Component/Icon/otp.png";
import styles from "./SuccessForgotPassword.Style";

import Header from "../../Component/Text/Header";
import Subtitle from "../../Component/Text/Subtitle";
import GeneralButton from "../../Component/Button/GeneralButton";

const renderImage = () => (
  <Image source={icon} style={styles.imageContainer} resizeMode="cover" />
);

const renderInputArea = (t, navigation) => (
  <View style={styles.inputContainer}>
    {renderImage()}
    <Header text={t("authentication.success_forgot_password")} />
    <Subtitle text={t("authentication.success_forgot_password_description")} />
    <GeneralButton
      type="secondary"
      text={t("authentication.sign_in")}
      onPress={() => navigation.replace("SignIn")}
    />
  </View>
);

const SuccessForgotPassword = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {renderInputArea(t, navigation)}
    </SafeAreaView>
  );
};

export default SuccessForgotPassword;
