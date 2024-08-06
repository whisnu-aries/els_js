import { Image, Pressable, Text, View } from "react-native";
import PropTypes from "prop-types";
import {
  HeartIcon as Love,
  ChatBubbleBottomCenterTextIcon as Comment,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";
import { HeartIcon as Liked } from "react-native-heroicons/solid";

import { styles } from "./AnnouncementCard.Style";
import Subtitle from "../../Components/Text/Subtitle";

const renderAnnouncementPhoto = (image) => {
  return (
    <Image
      style={styles.photo}
      source={{ uri: image }} // Replace with your image source
    />
  );
};

const renderAnnouncementBodyText = (title, description) => (
  <View>
    <Subtitle text={title} />
    <Text numberOfLines={3} ellipsizeMode="tail">
      {description}
    </Text>
  </View>
);

const handleClick = (action) => {
  console.log(action);
};

const renderLinkAnnouncementDetail = () => (
  <Pressable onPress={() => handleClick(1)}>
    <Text style={styles.link}>See detail</Text>
  </Pressable>
);

const renderAnnouncementButton = () => (
  <View style={styles.buttonContainer}>
    <Pressable onPress={() => handleClick("like")}>
      <Love style={styles.icon} size={20} />
      {/* <Loved style={styles.icon} size={20} /> */}
    </Pressable>
    <Pressable onPress={() => handleClick("comment")}>
      <Comment style={styles.icon} size={20} />
    </Pressable>
    <Pressable onPress={() => handleClick("share")}>
      <Share style={styles.icon} size={20} />
    </Pressable>
  </View>
);

const renderAnnouncementButtonContainer = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {renderLinkAnnouncementDetail()}
      {renderAnnouncementButton()}
    </View>
  );
};

const renderAnnouncementBody = (title, description) => (
  <View style={styles.bodyContainer}>
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      {renderAnnouncementBodyText(title, description)}
      {renderAnnouncementButtonContainer()}
    </View>
  </View>
);

const AnnouncementCard = ({ data }) => {
  return (
    <View style={styles.container}>
      {renderAnnouncementPhoto(data.image)}
      {renderAnnouncementBody(data.title, data.description)}
    </View>
  );
};

AnnouncementCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AnnouncementCard;
