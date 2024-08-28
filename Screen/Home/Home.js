import { FlatList, View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { Colors } from "../../Constants/Colors";
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
    <SafeAreaHeader color={Colors.primary} />
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

const Home = () => {
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

export default Home;
