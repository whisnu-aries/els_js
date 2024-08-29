import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
  HeartIcon as Love,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";

import Styles from "./CardVerseTheDay.Style";

import Card from "./Card";
import Subtitle from "../Text/Subtitle";
import Title from "../Text/Title";
import IconButton from "../Button/IconButton";

const renderBody = () => (
  <>
    <Title text="Hebrew 11:1 ICB" />
    <Text style={{ paddingVertical: 24 }}>
      Faith means being sure of the things we hope for. And faith means knowing
      that something is real even id we do not see it.
    </Text>
  </>
);

const handleLikeButton = () => {
  console.log("like");
};

const handleShareButton = () => {
  console.log("share");
};

const renderButton = () => (
  <View style={Styles.buttonContainer}>
    <IconButton onPress={handleLikeButton}>
      <Love style={Styles.icon} size={20} />
    </IconButton>
    <IconButton onPress={handleShareButton}>
      <Share style={Styles.icon} size={20} />
    </IconButton>
  </View>
);

const CardVerseTheDay = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <View style={Styles.container}>
        <Subtitle text={t("verse_the_day.title")} />
        {renderBody()}
        {renderButton()}
      </View>
    </Card>
  );
};

export default CardVerseTheDay;
