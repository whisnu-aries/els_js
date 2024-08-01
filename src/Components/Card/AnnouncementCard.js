import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./AnnouncementCard.style";

const AnnouncementCard = ({ image, title, description }) => {
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
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

AnnouncementCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AnnouncementCard;
