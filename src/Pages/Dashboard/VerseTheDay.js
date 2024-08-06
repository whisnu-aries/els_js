import { Pressable, Text, View } from "react-native";
import {
  HeartIcon as Love,
  ChatBubbleBottomCenterTextIcon as Comment,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";
import { HeartIcon as Loved } from "react-native-heroicons/solid";

import Verse from "../../Components/Verse";
import Chapter from "../../Components/Chapter";

import { styles } from "./VerseTheDay.Style";
import Card from "../../Components/Card/Card";

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

const verseTheDay = () => (
  <Card>
    <>
      <Text style={styles.verseTheDayTitle}>Verse of the Day</Text>
      <Chapter chapter="Hebrew 11:1 ICB" />
      <Verse verse="Faith means being sure of the things we hope for. And faith means knowing that something is real even id we do not see it." />
      {renderVerseTheDayButton()}
    </>
  </Card>
);

export default verseTheDay;
