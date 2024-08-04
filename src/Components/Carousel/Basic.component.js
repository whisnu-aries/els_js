import { useCallback, useEffect, useRef, useState } from "react";
import { View, FlatList, Dimensions, TouchableOpacity } from "react-native";

import * as Icons from "react-native-heroicons/solid";
import PropTypes from "prop-types";

import Indicator from "./Indicator.component";
import AnnouncementCard from "../Card/EventCard";

import { styles } from "./Basic.component.style";
import { Colors } from "../../Constants/Colors";

const Carousel = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const FlatListRef = useRef(null);

  const renderItem = ({ item }) => {
    return <AnnouncementCard image={item.image} />;
  };

  const handleViewableItemsChanged = (event) => {
    let index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  const renderCarousel = (data) => (
    <FlatList
      ref={FlatListRef}
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onMomentumScrollEnd={handleViewableItemsChanged}
      contentContainerStyle={{
        width: screenWidth * data.length,
      }}
    />
  );

  const renderCarouselIndicator = (data, currentIndex) => (
    <View style={styles.indicators}>
      {Array.from({ length: data.length }, (_, index) => (
        <Indicator key={index} isActive={index === currentIndex} />
      ))}
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      {renderCarousel(data)}
      {renderCarouselIndicator(data, currentIndex)}
    </View>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Carousel;
