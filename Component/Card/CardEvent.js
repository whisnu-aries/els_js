import { Image, Text, View } from "react-native";
import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  MapPinIcon as Pin,
  CalendarDaysIcon as Calendar,
} from "react-native-heroicons/outline";

import Styles from "./CardEvent.Style";
import { Colors } from "../../Constants/Colors";

import Card from "./Card";
import Title from "../Text/Title";
import Subtitle from "../Text/Subtitle";
import GeneralButton from "../Button/GeneralButton";

const renderImage = (image) => (
  <Image
    style={Styles.image}
    source={{
      uri: image,
    }}
  />
);

const renderDate = (date) => (
  <View style={Styles.itemContainer}>
    <Calendar style={{ color: Colors.black }} size={20} />
    <Text>{date}</Text>
  </View>
);

const renderLocation = (location) => (
  <View style={Styles.itemContainer}>
    <Pin style={{ color: Colors.black }} size={20} />
    <Text>{location}</Text>
  </View>
);

const handleShowQRButton = () => {
  console.log("show qr");
};

const handleAttendButton = () => {
  console.log("attend");
};

const renderButton = () => (
  <View style={Styles.buttonContainer}>
    <GeneralButton type="white" text="Show QR" onPress={handleShowQRButton} />
    <GeneralButton type="primary" text="Attend" onPress={handleAttendButton} />
  </View>
);

const renderBody = (title, date, location) => (
  <>
    <Title text={title} />
    <View style={Styles.descriptionContainer}>
      {renderDate(date)}
      {renderLocation(location)}
      {renderButton()}
    </View>
  </>
);

const CardEvent = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <View style={Styles.container}>
        <Subtitle text={t("dashboard.ongoing_event")} />
        {renderImage(data.image)}
        {renderBody(data.title, data.date, data.location)}
      </View>
    </Card>
  );
};

CardEvent.propTypes = {
  data: propTypes.shape({
    id: propTypes.number.isRequired,
    type: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};

export default CardEvent;
