import { Image, Text, View } from "react-native";
import { styles } from "./CarouselAnnouncement_style";
import Carousel from "../../Components/Carousel/Index";

export default function CarouselAnnouncement() {
  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/400",
      title: "Announcement 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      title: "Announcement 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400",
      title: "Announcement 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Announcement 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci.",
    },
  ];

  const Announcement = data.map((data, i) => {
    return (
      <View key={i} style={styles.cardInnerContainer}>
        <Image
          source={{
            uri: data.image,
          }}
          width={"100%"}
          height={200}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Text style={styles.descriptionText}>{data.description}</Text>
        </View>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Carousel data={Announcement} />
    </View>
  );
}
