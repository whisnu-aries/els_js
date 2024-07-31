import { useState } from "react";
import { View, FlatList, Dimensions, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import * as Icons from "react-native-heroicons/solid";

import Indicator from "./Indicator.component";
import AnnouncementCard from "../Card/AnnouncementCard";

import { styles } from "./Basic.style";
import { Colors } from "../../Constants/Colors";

const screenWidth = Dimensions.get("window").width;

const renderItem = ({ item }) => {
  return (
    <AnnouncementCard
      image={item.image}
      title={item.title}
      description={item.description}
    />
  );
};

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const renderCarousel = () => (
    <FlatList
      data={data}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      snapToInterval={screenWidth}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      initialNumToRender={data.length} // Optimize rendering
      getItemLayout={(data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index,
      })} // Improve performance
    />
  );

  const renderCarouselIndicator = () => (
    <View style={styles.indicators}>
      {Array.from({ length: data.length }, (_, index) => (
        <Indicator key={index} isActive={index === currentIndex} />
      ))}
    </View>
  );

  const renderCarouselButton = () => (
    <>
      <TouchableOpacity onPress={handlePrev} style={styles.prevButton}>
        <Icons.ArrowSmallLeftIcon color={Colors.primary} size={32} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Icons.ArrowSmallRightIcon color={Colors.primary} size={32} />
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.carouselContainer}>
      {renderCarousel()}
      {renderCarouselIndicator()}
      {renderCarouselButton()}
    </View>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Carousel;
