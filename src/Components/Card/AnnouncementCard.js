import { Image, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import PropTypes from "prop-types";

import { styles } from "./EventCard.style";
import { Colors } from "../../Constants/Colors";

const DateIcon = <Icons.CalendarIcon color={Colors.primary} size={16} />;
const LocationIcon = <Icons.MapPinIcon color={Colors.primary} size={16} />;

const AnnouncementCard = ({ image, title, date, location }) => {
  return (
    <View style={styles.cardInnerContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          width={"100%"}
          height={200}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.descriptionContainer}>
          {DateIcon}
          <Text style={styles.descriptionText}>{date}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          {LocationIcon}
          <Text style={styles.descriptionText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

AnnouncementCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default AnnouncementCard;
