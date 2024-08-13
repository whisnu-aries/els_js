import { Image, Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
  BellIcon,
  ChevronDownIcon as ArrowDown,
} from "react-native-heroicons/outline";

import { styles } from "./DashboardTitle.Style";

const renderCurrentLocation = () => (
  <View style={styles.currentLocationContainer}>
    <Text style={styles.currentLocationText}>ECC Kuala Lumpur</Text>
    <ArrowDown style={styles.currentLocationArrow} size={14} />
  </View>
);

const renderLocation = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={styles.locationLabel}>{t("dashboard.location")}</Text>
      {renderCurrentLocation()}
    </View>
  );
};

const renderNotificationButton = () => (
  <Pressable onPress={() => console.log("bell")}>
    <BellIcon style={styles.notificationIcon} size={24} />
  </Pressable>
);

const renderProfileButton = () => (
  <Pressable onPress={() => console.log("photo")}>
    <Image
      style={styles.profilePicture}
      source={{ uri: "https://via.placeholder.com/40" }} // Replace with your image source
    />
  </Pressable>
);

const renderProfile = () => (
  <View style={styles.profileContainer}>
    {renderNotificationButton()}
    {renderProfileButton()}
  </View>
);

const DashboardTitle = () => (
  <View style={styles.container}>
    {renderLocation()}
    {renderProfile()}
  </View>
);

export default DashboardTitle;
