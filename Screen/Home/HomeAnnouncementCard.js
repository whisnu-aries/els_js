import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import propTypes from "prop-types";
import {
  HeartIcon as Love,
  ChatBubbleBottomCenterTextIcon as Comment,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";
import { HeartIcon as Liked } from "react-native-heroicons/solid";

import Styles from "./HomeAnnouncementCard.Style";

import Title from "../../Component/Text/Title";

const renderAnnouncementPhoto = (image) => (
  <Image style={Styles.photo} source={{ uri: image }} />
);

const renderAnnouncementBodyText = (title, description) => (
  <View style={Styles.bodyTextContainer}>
    <Title text={title} />
    <Text numberOfLines={3} ellipsizeMode="tail">
      {description}
    </Text>
  </View>
);

const handleClick = (action) => {
  console.log(action);
};

const renderLinkAnnouncementDetail = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <Pressable onPress={() => navigation.navigate("EventDetail", { id: 1 })}>
      <Text style={Styles.link}>{t("announcement.see_detail")}</Text>
    </Pressable>
  );
};

const renderAnnouncementButton = () => (
  <View style={Styles.buttonActionContainer}>
    <Pressable onPress={() => handleClick("like")}>
      <Love style={Styles.icon} size={20} />
      {/* <Loved style={Styles.icon} size={20} /> */}
    </Pressable>
    <Pressable onPress={() => handleClick("share")}>
      <Share style={Styles.icon} size={20} />
    </Pressable>
  </View>
);

const renderAnnouncementButtonContainer = () => (
  <View style={Styles.buttonContainer}>
    {renderLinkAnnouncementDetail()}
    {renderAnnouncementButton()}
  </View>
);

const renderAnnouncementBody = (title, description) => (
  <View style={Styles.bodyContainer}>
    {renderAnnouncementBodyText(title, description)}
    {renderAnnouncementButtonContainer()}
  </View>
);

const HomeAnnouncementCard = ({ item }) => {
  return (
    <View style={Styles.container}>
      {renderAnnouncementPhoto(item.image)}
      {renderAnnouncementBody(item.title, item.description)}
    </View>
  );
};

HomeAnnouncementCard.propTypes = {
  item: propTypes.object.isRequired,
};

export default HomeAnnouncementCard;
