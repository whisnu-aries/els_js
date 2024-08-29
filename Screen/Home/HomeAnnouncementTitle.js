import { FlatList, View } from "react-native";
import { useTranslation } from "react-i18next";

import Styles from "./HomeAnnouncementTitle.Style";
import { announcementFilter } from "../../Data/data";

import Title from "../../Component/Text/Title";
import GeneralButton from "../../Component/Button/GeneralButton";

const renderAnnouncementFilters = ({ item }) => {
  return <GeneralButton text={item.name} onPress={() => console.log("a")} />;
};

const HomeAnnouncementTitle = () => {
  const { t } = useTranslation();
  return (
    <View style={Styles.container}>
      <Title text={t("dashboard.announcement")} />
      <FlatList
        renderItem={renderAnnouncementFilters}
        data={announcementFilter}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.container}
      />
    </View>
  );
};

export default HomeAnnouncementTitle;
