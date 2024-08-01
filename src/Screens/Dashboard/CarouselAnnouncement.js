import { View } from "react-native";
import { styles } from "./CarouselAnnouncement_style";
import Carousel from "../../Components/Carousel/Basic";

/**
 * This is the dummy data for announcement.
 */
const data = [
  {
    id: 1,
    image: "https://via.placeholder.com/400",
    title: "Announcement 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400",
    title: "Announcement 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400",
    title: "Announcement 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400",
    title: "Announcement 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci adipiscing elit. Mauris orci.",
  },
];
/**
 * End dummy data.
 */

const CarouselAnnouncement = () => {
  return (
    <View style={styles.container}>
      <Carousel data={data} />
    </View>
  );
};

export default CarouselAnnouncement;
