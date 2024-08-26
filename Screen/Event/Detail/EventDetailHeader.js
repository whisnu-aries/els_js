import { Dimensions, Text, View } from "react-native";
import {
  ChevronLeftIcon as Back,
  HeartIcon as Like,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";

import SafeAreaHeader from "../../../Component/SafeArea/SafeAreaHeader";
import IconButton from "../../../Component/Button/IconButton";

import Styles from "./EventDetailHeader.Style";
import { Colors } from "../../../Constants/Colors";
import Title from "../../../Component/Text/Title";
import { useEffect, useState } from "react";

const handleBackButton = () => {
  console.log("back");
};

const handleLikeButton = () => {
  console.log("like");
};

const handleShareButton = () => {
  console.log("Share");
};

const EventDetailHeader = ({ position }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [opacity, setOpacity] = useState(0);
  const { height } = Dimensions.get("window");
  const ImageHeight = Math.round(height / 3);

  useEffect(() => {
    setAlpha(position);
  }, [position]);

  const getHeaderHeight = (event) => {
    const { height } = event.nativeEvent.layout;
    setHeaderHeight(height);
  };

  const setAlpha = (position) => {
    const alpha = Math.max(
      0,
      Math.min(1, (position - 50) / (ImageHeight - headerHeight))
    );

    setOpacity(alpha);
    setBackgroundColor(`rgba(255, 157, 92, ${alpha})`);
  };

  const renderLeftButton = () => (
    <View style={Styles.leftButtonContainer}>
      <IconButton style={Styles.iconButton} onPress={handleBackButton}>
        <Back style={Styles.icon} size={20} />
      </IconButton>
    </View>
  );

  const renderTitle = () => (
    <View style={Styles.titleContainer}>
      <Title
        text="Back to Barrack 2024: Reconnecting"
        style={[Styles.titleText, { opacity: opacity }]}
      />
    </View>
  );

  const renderRightButton = () => (
    <View style={Styles.rightButtonContainer}>
      <IconButton style={Styles.iconButton} onPress={handleShareButton}>
        <Share style={Styles.icon} size={20} />
      </IconButton>
      <IconButton style={Styles.iconButton} onPress={handleLikeButton}>
        <Like style={Styles.icon} size={20} />
      </IconButton>
    </View>
  );

  const renderHeader = () => (
    <View
      style={[Styles.headerContainer, { backgroundColor: backgroundColor }]}
    >
      {renderLeftButton()}
      {renderTitle()}
      {renderRightButton()}
    </View>
  );

  return (
    <View style={Styles.container} onLayout={getHeaderHeight}>
      <SafeAreaHeader color={backgroundColor} />
      {renderHeader()}
    </View>
  );
};

export default EventDetailHeader;
