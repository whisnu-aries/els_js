import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import Styles from "./SignIn.Style";

import Header from "../../Component/Text/Header";

import icon from "../../Component/Icon/otp.png";
import Subtitle from "../../Component/Text/Subtitle";
import OTPInput from "../../Component/TextInput/OTPInput";

const renderImage = () => (
  <Image source={icon} style={Styles.imageContainer} resizeMode="cover" />
);

const handleOTP = (text, navigation) => {
  if (text == "123456") {
    navigation.navigate("Dashboard");
  }
};

const renderInputArea = (t, navigation) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={Styles.inputContainer}
  >
    {renderImage()}
    <Header text={t("authentication.otp")} />
    <Subtitle text={t("authentication.otp_description")} />
    <OTPInput
      inputMode="numeric"
      changeHandler={(text) => handleOTP(text, navigation)}
    />
  </KeyboardAvoidingView>
);

const OTP = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.container}>
      {renderInputArea(t, navigation)}
    </SafeAreaView>
  );
};

export default OTP;
