import { Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import {
  HeartIcon as Love,
  ChatBubbleBottomCenterTextIcon as Comment,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";
import { HeartIcon as Loved } from "react-native-heroicons/solid";

import Card from "../../Components/Card/Card";
import Verse from "../../Components/Verse";
import Chapter from "../../Components/Chapter";

import { styles } from "./VerseTheDay.Style";

const handleClick = (action) => {
  console.log(action);
};

const renderVerseTheDayButton = () => (
  <View style={styles.verseTheDayButtonContainer}>
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

const verseTheDay = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <>
        <Text style={styles.verseTheDayTitle}>{t("verse_the_day.title")}</Text>
        <Chapter chapter="Hebrew 11:1 ICB" />
        <Verse verse="Faith means being sure of the things we hope for. And faith means knowing that something is real even id we do not see it." />
        {renderVerseTheDayButton()}
      </>
    </Card>
  );
};

export default verseTheDay;
