import { useState } from "react";
import { FlatList, View } from "react-native";
import { useTranslation } from "react-i18next";

import AnnouncementCard from "./AnnouncementCard";
import DashboardTitle from "./DashboardTitle";
import VerseTheDay from "./VerseTheDay";

import { styles } from "./Dashboard.Style";
import Title from "../../Components/Text/Title";
import Pill from "../../Components/Pill/Pills";

import { announcementData, announcementFilter } from "../../Data/data";
import OnGoingEvent from "./OngoingEvent";

const Dashboard = () => {
  const [activeAnnouncement, setActiveAnnouncement] = useState(0);
  const [announcement, setAnnouncement] = useState(announcementData);

  const { t } = useTranslation();

  const handleAnnouncementFilterClick = (id) => {
    setActiveAnnouncement(id);

    const filteredArray =
      id === 0
        ? announcementData
        : announcementData.filter((data) => data.type === id);
    setAnnouncement(filteredArray);
  };

  const renderAnnouncementFilters = ({ item }) => {
    return (
      <Pill
        id={item.id}
        name={item.name}
        isActive={activeAnnouncement === item.id}
        handleClick={handleAnnouncementFilterClick}
      />
    );
  };

  const renderAnnouncementHeader = () => {
    return (
      <View style={styles.announcementHeader}>
        <Title text={t("dashboard.announcement")} />
        <FlatList
          renderItem={renderAnnouncementFilters}
          data={announcementFilter}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.announcementPillContainer}
        />
      </View>
    );
  };

  const renderAnnouncementCard = ({ item }) => <AnnouncementCard data={item} />;

  const renderBody = () => (
    <FlatList
      data={announcement}
      renderItem={renderAnnouncementCard}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.bodyContainer}>
          <OnGoingEvent />
          <VerseTheDay />
          {renderAnnouncementHeader()}
        </View>
      }
      contentContainerStyle={styles.bodyOuter}
    />
  );

  return (
    <View style={styles.container}>
      <DashboardTitle />
      {renderBody()}
    </View>
  );
};

export default Dashboard;
