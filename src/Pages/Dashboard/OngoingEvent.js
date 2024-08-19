import { Image, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import {
  MapPinIcon as Pin,
  CalendarDaysIcon as Calendar,
} from "react-native-heroicons/outline";

import Card from "../../Components/Card/Card";
import Title from "../../Components/Text/Title";
import Subtitle from "../../Components/Text/Subtitle";
import { Colors } from "../../Constants/Colors";
import { styles } from "./OngoingEvent.Style";
import Pill from "../../Components/Pill/Pills";

const OnGoingEvent = () => {
  const { t } = useTranslation();

  const renderImage = () => (
    <Image
      style={styles.eventImage}
      source={{
        uri: "https://images.unsplash.com/photo-1722503281689-04fea84df54a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
      }}
    />
  );

  const renderDate = () => (
    <View style={styles.eventDescriptionContainer}>
      <Calendar style={{ color: Colors.primary }} size={14} />
      <Text>Sat, 08:00-17.00. 17 Aug 2024</Text>
    </View>
  );

  const renderLocation = () => (
    <View style={styles.eventDescriptionContainer}>
      <Pin style={{ color: Colors.primary }} size={14} />
      <Text style={{ fontSize: 14, fontWeight: "thin" }}>BTC Fashion Mall</Text>
    </View>
  );

  const renderBody = () => (
    <View style={styles.eventContainer}>
      <Subtitle text="Back to Barrack 2024: Reconnecting" />
      {renderDate()}
      {renderLocation()}
    </View>
  );

  const renderButton = () => (
    <View style={styles.eventButtonContainer}>
      <Pill
        id={1}
        name={t("dashboard.show_qr")}
        isActive={false}
        handleClick={() => console.log("clicked")}
      />
      <Pill
        id={1}
        name={t("dashboard.attend")}
        isActive={true}
        handleClick={() => console.log("clicked")}
      />
    </View>
  );

  return (
    <Card>
      <View style={styles.eventContainer}>
        <Title text={t("dashboard.ongoing_event")} />
        {renderImage()}
        {renderBody()}
        {renderButton()}
      </View>
    </Card>
  );
};

export default OnGoingEvent;
