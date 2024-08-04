import { FlatList, Image, Pressable, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import { useTranslation } from "react-i18next";
import { FlatGrid } from "react-native-super-grid";

import CardProfile from "./CardProfile";
import Carousel from "../../Components/Carousel/Basic.component";

import { Colors } from "../../Constants/Colors";
import { styles } from "./Index.style";

/**
 * This is the dummy data for card profile.
 */
const BuildingIcon = (
  <Icons.BuildingOfficeIcon color={Colors.primary} size={32} />
);

const HomeIcon = <Icons.HomeIcon color={Colors.primary} size={32} />;

const homecells = [
  {
    id: 3,
    icon: BuildingIcon,
    title: "Bridge Jakarta",
    description: "Hello Team",
  },
  {
    id: 1,
    icon: HomeIcon,
    title: "South 1",
    description: "Member",
  },
  {
    id: 2,
    icon: HomeIcon,
    title: "Bridge Community College",
    description: "Core Team",
  },
];

const userData = {
  church: "ECC Jakarta",
  name: "John Doe",
  code: "ECC-JKT 123QWE",
  homecells,
};

const eventData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    // title: "Event 1",
    // date: "01 Jan 2024, 08:30 - 10:00",
    // location: "Autograph Tower",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400",
    // title: "Event 2",
    // date: "01 Jan 2024, 08:30 - 10:00",
    // location: "Autograph Tower",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400",
    // title: "Event 3",
    // date: "01 Jan 2024, 08:30 - 10:00",
    // location: "Autograph Tower",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400",
    // title: "Event 4",
    // date: "01 Jan 2024, 08:30 - 10:00",
    // location: "Autograph Tower",
  },
];

const announcementData = [
  {
    id: 1,
    image: "https://via.placeholder.com/200",
    title: "Announcement 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/200",
    title: "Announcement 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "Announcement 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/200",
    title: "Announcement 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
];
/**
 * End dummy data.
 */

const Dashboard = () => {
  const { t } = useTranslation();

  const renderCardProfile = (userData) => (
    <CardProfile
      church={userData.church}
      name={userData.name}
      code={userData.code}
      homecells={userData.homecells}
    />
  );

  const renderEventTitle = () => {
    return <Text style={styles.sectionTitle}>{t("Event")}</Text>;
  };

  const renderEventLink = () => {
    return (
      <Pressable onPress={() => console.log("all announcements")}>
        <Text style={styles.announcementLink}>{t("EventLink")}</Text>
      </Pressable>
    );
  };

  const renderEventHeader = () => (
    <View style={styles.announcementTitleContainer}>
      {renderEventTitle()}
      {renderEventLink()}
    </View>
  );

  const renderEventCarousel = (eventData) => <Carousel data={eventData} />;

  const renderEvent = () => (
    <View style={styles.announcementContainer}>
      {renderEventHeader()}
      {renderEventCarousel(eventData)}
    </View>
  );

  const renderMenuHeader = () => {
    return <Text style={styles.sectionTitle}>{t("Menu")}</Text>;
  };

  const renderMenu = () => (
    <View style={styles.announcementContainer}>
      {renderMenuHeader()}
      {/* {renderMenuCarousel(eventData)} */}
      <FlatGrid
        itemDimension={130}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1 }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );

  return (
    <>
      {renderCardProfile(userData)}
      {renderEvent()}
      {renderMenu()}
    </>
  );
};

export default Dashboard;
