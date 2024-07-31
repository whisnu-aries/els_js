import { Image, ScrollView, Pressable, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import PropTypes from "prop-types";

import { styles } from "./CardProfile.style";

import Divider from "../../Components/Divider";
import IconPills from "../../Components/Pills/PillsDescWithIcon/IconPills";

import { useTranslation } from "react-i18next";

const handleClick = (action) => console.log(action); // Generic handler

const renderWelcomeChurch = (church) => {
  const { t } = useTranslation();
  return <Text style={styles.title}>{t("welcomeTitle", { church })}</Text>;
};

const renderProfileImage = () => (
  <Image
    style={styles.avatar}
    source={{ uri: "https://via.placeholder.com/50" }} // Replace with your image source
  />
);

const renderProfileAccount = (name, code) => (
  <Pressable
    style={styles.nameContainer}
    onPress={() => handleClick("profile")}
  >
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.code}>{code}</Text>
    </View>
  </Pressable>
);

const renderProfileButton = () => (
  <View style={styles.iconContainer}>
    <Pressable onPress={() => handleClick("qr")}>
      <Icons.QrCodeIcon style={styles.icon} size={30} />
    </Pressable>
    <Pressable onPress={() => handleClick("notification")}>
      <Icons.BellIcon style={styles.icon} size={30} />
    </Pressable>
  </View>
);

const renderProfile = (name, code) => (
  <View style={styles.cardHeader}>
    {renderProfileImage()}
    {renderProfileAccount(name, code)}
    {renderProfileButton()}
  </View>
);

const renderPill = (item) => (
  <IconPills
    key={item.id}
    icon={item.icon}
    title={item.title}
    description={item.description}
  />
);

const renderProfilePills = (service, homecells) => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.homecellContainer}>
      {renderPill(service)}
      {homecells.map((item) => renderPill(item))}
    </View>
  </ScrollView>
);

const CardProfile = ({ church, name, code, service, homecells }) => {
  return (
    <View style={styles.container}>
      {renderWelcomeChurch(church)}
      <View style={styles.cardContainer}>
        {renderProfile(name, code)}
        <Divider />
        {renderProfilePills(service, homecells)}
      </View>
    </View>
  );
};

CardProfile.propTypes = {
  church: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  service: PropTypes.object.isRequired,
  homecells: PropTypes.array.isRequired,
};

export default CardProfile;
