import { Dimensions, View } from "react-native";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import {
  ChevronLeftIcon as Back,
  HeartIcon as Like,
  ArrowUpTrayIcon as Share,
} from "react-native-heroicons/outline";

import SafeAreaHeader from "../../../Component/SafeArea/SafeAreaHeader";
import IconButton from "../../../Component/Button/IconButton";

import Styles from "./EventDetailHeader.Style";
import Title from "../../../Component/Text/Title";

const { height } = Dimensions.get("window");
const ImageHeight = Math.round(height / 3);

const handleBackButton = () => {
  console.log("back");
};

const handleLikeButton = () => {
  console.log("like");
};

const handleShareButton = () => {
  console.log("Share");
};

const getHeaderHeight = (event, detailHeaderMethod) => {
  const { height } = event.nativeEvent.layout;
  detailHeaderMethod.setHeaderHeight(height);
};

const setAlpha = (position, detailHeaderMethod) => {
  const calculation =
    (position - 50) / (ImageHeight - detailHeaderMethod.headerHeight);
  const alpha = Math.max(0, Math.min(1, calculation));

  detailHeaderMethod.setOpacity(alpha);
  detailHeaderMethod.setBackgroundColor(`rgba(255, 157, 92, ${alpha})`);
};

const renderLeftButton = () => (
  <View style={Styles.leftButtonContainer}>
    <IconButton style={Styles.iconButton} onPress={handleBackButton}>
      <Back style={Styles.icon} size={20} />
    </IconButton>
  </View>
);

const renderTitle = (detailHeaderMethod) => (
  <View style={Styles.titleContainer}>
    <Title
      text="Back to Barrack 2024: Reconnecting"
      style={[Styles.titleText, { opacity: detailHeaderMethod.opacity }]}
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

const renderHeader = (detailHeaderMethod) => (
  <View
    style={[
      Styles.headerContainer,
      { backgroundColor: detailHeaderMethod.backgroundColor },
    ]}
  >
    {renderLeftButton()}
    {renderTitle(detailHeaderMethod)}
    {renderRightButton()}
  </View>
);

const getEventDetailHeaderMethod = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [opacity, setOpacity] = useState(0);

  return {
    headerHeight,
    setHeaderHeight,
    backgroundColor,
    setBackgroundColor,
    opacity,
    setOpacity,
  };
};

const EventDetailHeader = ({ position }) => {
  const detailHeaderMethod = getEventDetailHeaderMethod();

  useEffect(() => {
    setAlpha(position, detailHeaderMethod);
  }, [position]);

  return (
    <View
      style={Styles.container}
      onLayout={(e) => getHeaderHeight(e, detailHeaderMethod)}
    >
      <SafeAreaHeader color={detailHeaderMethod.backgroundColor} />
      {renderHeader(detailHeaderMethod)}
    </View>
  );
};

EventDetailHeader.propTypes = {
  position: propTypes.number.isRequired,
};

export default EventDetailHeader;
