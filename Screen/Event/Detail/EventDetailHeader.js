import { Text, View } from "react-native";
import {
  ChevronLeftIcon as Back,
  HeartIcon as Like,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";

import SafeAreaHeader from "../../../Component/SafeArea/SafeAreaHeader";
import IconButton from "../../../Component/Button/IconButton";

import Styles from "./EventDetailHeader.Style";
import { Colors } from "../../../Constants/Colors";
import Title from "../../../Component/Text/Title";

const handleBackButton = () => {
  console.log("back");
};

const handleLikeButton = () => {
  console.log("like");
};

const handleShareButton = () => {
  console.log("Share");
};

const EventDetailHeader = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 2,
      }}
    >
      <SafeAreaHeader color={Colors.primary} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: Colors.primary,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            flex: 1,

            alignItems: "center",
          }}
        >
          <IconButton
            style={{
              backgroundColor: Colors.backgroundWhite,
              padding: 8,
              borderRadius: 24,
            }}
            onPress={handleBackButton}
          >
            <Back style={Styles.icon} size={20} />
          </IconButton>
        </View>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Title
            text="Back to Barrack 2024: Reconnecting"
            style={{ textAlign: "center" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            gap: 16,
            flex: 1,

            alignItems: "center",
          }}
        >
          <IconButton
            style={{
              backgroundColor: Colors.backgroundWhite,
              padding: 8,
              borderRadius: 24,
            }}
            onPress={handleShareButton}
          >
            <Share style={Styles.icon} size={20} />
          </IconButton>
          <IconButton
            style={{
              backgroundColor: Colors.backgroundWhite,
              padding: 8,
              borderRadius: 24,
            }}
            onPress={handleLikeButton}
          >
            <Like style={Styles.icon} size={20} />
          </IconButton>
        </View>
      </View>
    </View>
  );
};

export default EventDetailHeader;
