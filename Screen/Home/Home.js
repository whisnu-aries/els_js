import { FlatList, Text, View } from "react-native";
import propTypes from "prop-types";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import Styles from "./Home.Style";
import { announcementData } from "../../Data/data";

import SafeAreaHeader from "../../Component/SafeArea/SafeAreaHeader";
import HomeHeader from "./HomeHeader";
import CardEvent from "../../Component/Card/CardEvent";
import CardVerseTheDay from "../../Component/Card/CardVerseTheDay";
import HomeAnnouncementTitle from "./HomeAnnouncementTitle";
import HomeAnnouncementCard from "./HomeAnnouncementCard";

const renderHomeHeader = () => (
  <View>
    <SafeAreaHeader />
    <HomeHeader />
  </View>
);

const renderAnnouncementHeader = () => {
  const data = announcementData[0];
  return (
    <View style={Styles.container}>
      <CardEvent data={data} />
      <CardVerseTheDay />
      <HomeAnnouncementTitle />
    </View>
  );
};

const renderAnnouncementCard = ({ item }) => (
  <HomeAnnouncementCard item={item} />
);

const renderAnnouncement = () => (
  <FlatList
    data={announcementData}
    renderItem={renderAnnouncementCard}
    keyExtractor={(item) => item.id}
    ListHeaderComponent={renderAnnouncementHeader()}
  />
);

const Home = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View
      style={[Styles.screenBackground, { marginBottom: tabBarHeight + 24 }]}
    >
      {renderHomeHeader()}
      {renderAnnouncement()}
    </View>
  );
};

Home.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default Home;
