import { View } from "react-native";

import Styles from "./EventDetailFooter.Style";
import { Colors } from "../../../Constants/Colors";

import GeneralButton from "../../../Component/Button/GeneralButton";
import SafeAreaFooter from "../../../Component/SafeArea/SafeAreaFooter";

const handlePrimaryButton = () => {
  console.log("a");
};

const EventDetailFooter = () => {
  return (
    <View style={Styles.container}>
      <GeneralButton
        type="primary"
        text="Register"
        onPress={handlePrimaryButton}
      />
      <SafeAreaFooter color={Colors.slate} />
    </View>
  );
};

export default EventDetailFooter;
