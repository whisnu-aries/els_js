import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import {
  MapPinIcon as Pin,
  CalendarDaysIcon as Calendar,
} from "react-native-heroicons/outline";

import { styles } from "./Index.Style";
import { Colors } from "../../../Constants/Colors";

import Title from "./Title";
import TitleText from "../../../Components/Text/Title";
import Subtitle from "../../../Components/Text/Subtitle";

const renderEventPhoto = () => (
  <Image
    style={styles.eventImage}
    source={{
      uri: "https://images.unsplash.com/photo-1722503281689-04fea84df54a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    }}
  />
);

const renderEventBody = () => (
  <View style={styles.eventBody}>
    <TitleText text="Back to Barrack 2024: Reconnecting" />
    <Text>
      Donec ut sem eget nulla faucibus aliquet non id sem. Duis metus enim,
      finibus nec risus vel, consectetur dapibus sem. Proin sollicitudin, nibh
      ac condimentum dictum, elit nisl tincidunt lacus.
    </Text>
    <View style={styles.eventContainer}>
      <View style={styles.eventDescriptionContainer}>
        <Pin style={{ color: Colors.primary }} size={14} />
        <Text>BTC Fashion Mall</Text>
      </View>
      <View style={styles.eventDescriptionContainer}>
        <Calendar style={{ color: Colors.primary }} size={14} />
        <Text>Sat, 17 Aug 2024</Text>
      </View>
    </View>
    {/* <Subtitle text="Donec ut sem eget nulla faucibus aliquet non id sem. Duis metus enim, finibus nec risus vel, consectetur dapibus sem. Proin sollicitudin, nibh ac condimentum dictum, elit nisl tincidunt lacus." /> */}
  </View>
);

const renderEvent = () => (
  <>
    {renderEventPhoto()}
    {renderEventBody()}
  </>
);

const EventDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Title navigation={navigation} />
      {renderEvent()}
    </View>
  );
};

EventDetailScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default EventDetailScreen;
