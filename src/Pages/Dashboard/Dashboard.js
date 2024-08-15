import { Button, FlatList, Image, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  MapPinIcon as Pin,
  CalendarDaysIcon as Calendar,
} from "react-native-heroicons/outline";

import AnnouncementCard from "./AnnouncementCard";
import DashboardTitle from "./DashboardTitle";
import VerseTheDay from "./VerseTheDay";

import { styles } from "./Dashboard.Style";
import Title from "../../Components/Text/Title";
import Pill from "../../Components/Pill/Pills";
import Card from "../../Components/Card/Card";
import Subtitle from "../../Components/Text/Subtitle";
import { Colors } from "../../Constants/Colors";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    title: "Sensus ECC Church Global 2024",
    description:
      "Aliquam ut euismod nunc. Aenean posuere eget metus id tristique. Donec pulvinar mi a vestibulum lobortis. Integer faucibus nunc vel mi accumsan bibendum. Sed arcu justo, lobortis sed magna vitae.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1722482032940-3827f2a349ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
    title: "Looking For Volunteer Interpreter",
    description:
      "Duis pulvinar est consectetur vestibulum laoreet. Nulla ante nulla, egestas sed nulla vitae, mattis placerat enim. Sed est tellus, varius ut consequat sed, laoreet in metus. Sed risus quam, pellentesque.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1722503281689-04fea84df54a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    title: "Back to Barrack 2024: Reconnecting",
    description:
      "Donec ut sem eget nulla faucibus aliquet non id sem. Duis metus enim, finibus nec risus vel, consectetur dapibus sem. Proin sollicitudin, nibh ac condimentum dictum, elit nisl tincidunt lacus.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1722809431357-9403c62c46dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D",
    title: "Encounter Class 2-24 (Batch 2024)",
    description:
      "Quisque dapibus leo risus, id viverra dolor lacinia nec. Praesent sagittis nisl sem, sit amet sagittis tortor facilisis ut. Aenean ut diam id orci molestie commodo. Maecenas ac ante a.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1722185128411-456d36207767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sweet Escape 2025: Making Marriage Works",
    description:
      "Aenean vitae magna ex. Nullam laoreet eleifend orci in viverra. Mauris iaculis dui eu risus aliquet sollicitudin. Vivamus fringilla hendrerit libero a vulputate. Nunc mattis auctor diam a fringilla. Nam.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1722239319483-d8bf42f6035b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D",
    title: "Premarital Class Registration",
    description:
      "Quisque convallis dignissim dolor at ullamcorper. Duis non quam ac tortor aliquet hendrerit. Fusce elementum porta malesuada. Aliquam pulvinar mi quis suscipit luctus. Curabitur nec dapibus sem. Quisque eget euismod.",
  },
];

const announcementData = [
  {
    id: 1,
    name: "All",
    isActive: true,
  },
  {
    id: 2,
    name: "News",
    isActive: false,
  },
  {
    id: 3,
    name: "Event",
    isActive: false,
  },
  {
    id: 4,
    name: "Service",
    isActive: false,
  },
];

const renderOnGoingEvent = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <View style={styles.eventContainer}>
        <Title text={t("dashboard.ongoing_event")} />
        <Image
          style={styles.eventImage}
          source={{
            uri: "https://images.unsplash.com/photo-1722503281689-04fea84df54a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <View style={styles.eventContainer}>
          <Subtitle text="Back to Barrack 2024: Reconnecting" />
          <View style={styles.eventDescriptionContainer}>
            <Pin style={{ color: Colors.primary }} size={14} />
            <Text style={{ fontSize: 14, fontWeight: "thin" }}>
              BTC Fashion Mall
            </Text>
          </View>
          <View style={styles.eventDescriptionContainer}>
            <Calendar style={{ color: Colors.primary }} size={14} />
            <Text>Sat, 17 Aug 2024</Text>
          </View>
        </View>
        <View style={styles.eventButtonContainer}>
          <Pill
            id={1}
            name={t("dashboard.show_qr")}
            isActive={false}
            handleClick={handleAnnouncementFilterClick}
          />
          <Pill
            id={1}
            name={t("dashboard.attend")}
            isActive={true}
            handleClick={handleAnnouncementFilterClick}
          />
        </View>
      </View>
    </Card>
  );
};

const handleAnnouncementFilterClick = (id) => {
  console.log(id);
};

const renderAnnouncementFilters = ({ item }) => {
  return (
    <Pill
      id={item.id}
      name={item.name}
      isActive={item.isActive}
      handleClick={handleAnnouncementFilterClick}
    />
  );
};

const renderAnnouncementHeader = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.announcementHeader}>
      <Title text={t("dashboard.announcement")} />
      <FlatList
        renderItem={renderAnnouncementFilters}
        data={announcementData}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.announcementPillContainer}
      />
    </View>
  );
};

const renderAnnouncementCard = ({ item }) => <AnnouncementCard data={item} />;

const renderBody = ({ navigation }) => (
  <FlatList
    data={data}
    renderItem={renderAnnouncementCard}
    keyExtractor={(item) => item.id}
    ListHeaderComponent={
      <View style={styles.bodyContainer}>
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details", { id: 1 })}
        /> */}
        {renderOnGoingEvent()}
        <VerseTheDay />
        {renderAnnouncementHeader()}
      </View>
    }
    contentContainerStyle={styles.bodyOuter}
  />
);

const Dashboard = ({ navigation }) => (
  <View style={styles.container}>
    <DashboardTitle />
    {renderBody({ navigation })}
  </View>
);

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Dashboard;
