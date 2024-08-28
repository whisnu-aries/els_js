import { Text, View } from "react-native";

import Styles from "./EventDetailFooter.Style";
import { Colors } from "../../../Constants/Colors";

import PrimaryButton from "../../../Component/Button/PrimaryButton";
import SafeAreaFooter from "../../../Component/SafeArea/SafeAreaFooter";

const handlePrimaryButton = () => {
  console.log("a");
};

const EventDetailFooter = () => (
  <View style={Styles.container}>
    <PrimaryButton text="Register" onPress={handlePrimaryButton} />
    <SafeAreaFooter color={Colors.slate} />
  </View>
);

export default EventDetailFooter;
