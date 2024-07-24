import { useState } from "react";
import { View, FlatList, Dimensions, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/solid";

import { styles } from "./Index_style";
import { Colors } from "../../Constants/Colors";
import Indicator from "./Indicator";

const { width } = Dimensions.get("window");

export default function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const IndicatorsView = data.map((data, i) => {
    return <Indicator key={i} isActive={i === currentIndex} />;
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <View style={styles.carouselContainer}>
      {data[currentIndex]}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id || Math.random().toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{ width: width * data.length }}
      />
      <View style={styles.indicators}>{IndicatorsView}</View>
      <TouchableOpacity onPress={handlePrev} style={styles.prevButton}>
        <Icons.ArrowSmallLeftIcon color={Colors.primary} size={32} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Icons.ArrowSmallRightIcon color={Colors.primary} size={32} />
      </TouchableOpacity>
    </View>
  );
}
