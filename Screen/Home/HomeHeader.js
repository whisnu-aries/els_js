import { Image, Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
  BellIcon,
  ChevronDownIcon as ArrowDown,
} from "react-native-heroicons/outline";

import Styles from "./HomeHeader.Style";

const renderCurrentLocation = () => (
  <View style={Styles.currentLocationContainer}>
    <Text style={Styles.currentLocationText}>ECC Kuala Lumpur</Text>
    <ArrowDown style={Styles.currentLocationArrow} size={14} />
  </View>
);

const renderLocation = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={Styles.locationLabel}>{t("dashboard.location")}</Text>
      {renderCurrentLocation()}
    </View>
  );
};

const renderNotificationButton = () => (
  <Pressable onPress={() => console.log("bell")}>
    <BellIcon style={Styles.notificationIcon} size={24} />
  </Pressable>
);

const renderProfileButton = () => (
  <Pressable onPress={() => console.log("photo")}>
    <Image
      style={Styles.profilePicture}
      source={{ uri: "https://via.placeholder.com/40" }} // Replace with your image source
    />
  </Pressable>
);

const renderProfile = () => (
  <View style={Styles.profileContainer}>
    {renderNotificationButton()}
    {renderProfileButton()}
  </View>
);

const HomeHeader = () => (
  <View style={Styles.container}>
    {renderLocation()}
    {renderProfile()}
  </View>
);

export default HomeHeader;
