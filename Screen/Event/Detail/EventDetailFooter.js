import { Text, View } from "react-native";

import Styles from "./EventDetailFooter.Style";
import { Colors } from "../../../Constants/Colors";

import PrimaryButton from "../../../Component/Button/PrimaryButton";
import SafeAreaFooter from "../../../Component/SafeArea/SafeAreaFooter";

const handlePrimaryButton = () => {
  console.log("a");
};

const EventDetailFooter = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 2,
        backgroundColor: Colors.slate,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.75,
        shadowRadius: 4,
      }}
    >
      <PrimaryButton text="Register" onPress={handlePrimaryButton} />
      <SafeAreaFooter color={Colors.slate} />
    </View>
  );
};

export default EventDetailFooter;
