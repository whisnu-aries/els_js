import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./EventCard.style";

const AnnouncementCard = ({ image }) => {
  return (
    <View style={styles.cardInnerContainer}>
      <Image
        source={{
          uri: image,
        }}
        width={"100%"}
        height={200}
        style={styles.backgroundImage}
      />
    </View>
  );
};

AnnouncementCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default AnnouncementCard;
