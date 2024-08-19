import { useEffect, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  ChevronLeftIcon as Back,
  HeartIcon as Like,
  ShareIcon as Share,
} from "react-native-heroicons/outline";
import { HeartIcon as Liked } from "react-native-heroicons/solid";

import { styles } from "./Title.Style";
import { Colors } from "../../../Constants/Colors";

import SafeArea from "../../../Components/Header/Header";
import RoundedButton from "../../../Components/Button/Rounded";
const { height } = Dimensions.get("window");

const Title = ({ position }) => {
  const navigation = useNavigation();

  const [color, setColor] = useState("");

  useEffect(() => {
    renderColorOpacity(position);
  }, [position]);

  const renderColorOpacity = (position) => {
    const ImageHeight = Math.round(height / 3);
    let percentage = 100;

    if (position < 100) {
      setColor("");
    } else if (position > 100 && position <= ImageHeight) {
      percentage = position / ImageHeight;
      const alphaValue = Math.round(percentage * 255)
        .toString(16)
        .padStart(2, "0");

      setColor("#FF9D5C" + alphaValue);
    }
  };

  const renderSafeArea = () => (
    <>
      <StatusBar style="light" />
      <SafeArea />
    </>
  );

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleShareButton = () => {
    console.log("share");
  };

  const handleLikeButton = () => {
    console.log("like");
  };

  const renderButtonArea = () => (
    <View style={styles.headerContainer}>
      <RoundedButton clickHandler={handleBackButton}>
        <Back color={Colors.primary} size={18} />
      </RoundedButton>
      <Text>Back to Barrack 2024</Text>
      <View style={styles.rightArea}>
        <RoundedButton clickHandler={handleShareButton}>
          <Share color={Colors.primary} size={18} />
        </RoundedButton>
        <RoundedButton clickHandler={handleLikeButton}>
          <Like color={Colors.primary} size={18} />
        </RoundedButton>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {renderSafeArea()}
      {renderButtonArea()}
    </View>
  );
};

export default Title;
