import { useState } from "react";
import { FlatList, Text, View } from "react-native";
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

import GeneralBottomSheet from "./../../Component/BottomSheet/GeneralButtonSheet";
import GeneralPicker from "./../../Component/Picker/GeneralPicker";
import Title from "../../Component/Text/Title";
import Header from "../../Component/Text/Header";
import GeneralButton from "../../Component/Button/GeneralButton";

const locations = [
  {
    id: "1",
    name: "Bandung",
  },
  {
    id: "2",
    name: "Jakarta",
  },
  {
    id: "3",
    name: "Sydney",
  },
  {
    id: "4",
    name: "Bali",
  },
  {
    id: "5",
    name: "Malang",
  },
  {
    id: "6",
    name: "Kuala Lumpur",
  },
];

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

const getHomeMethod = () => {
  const [location, setLocation] = useState(6);
  const [locationIsOpen, setLocationIsOpen] = useState(-1);

  return {
    location,
    setLocation,
    locationIsOpen,
    setLocationIsOpen,
  };
};

const handleLocationChange = (value, method) => {
  method.setLocation(value);
};

const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const homeMethod = getHomeMethod();

  return (
    <View
      // style={[Styles.screenBackground, { marginBottom: tabBarHeight + 24 }]}
      style={Styles.screenBackground}
    >
      {renderHomeHeader()}
      {/* {renderAnnouncement()} */}
      <GeneralBottomSheet isOpen={homeMethod.isOpen}>
        <View
          style={{
            paddingVertical: 16,
            backgroundColor: "red",
          }}
        >
          <Header text="ini title" />
          <GeneralPicker
            datalist={locations}
            selectedValue={homeMethod.location}
            onChange={(value) => handleLocationChange(value, homeMethod)}
          />
          <GeneralButton
            type="primary"
            text="Select"
            onPress={() => console.log("confirm")}
          />
        </View>
      </GeneralBottomSheet>
    </View>
  );
};

export default Home;
