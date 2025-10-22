import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../../assets/images/carousel1.png"),
  require("../../assets/images/carousel2.png"),
  require("../../assets/images/carousel3.png"),
  require("../../assets/images/carousel4.png"),
  require("../../assets/images/carousel5.png"),
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Handle manual scroll (swipe)
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== activeIndex) setActiveIndex(slide);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <View className="w-full mt-4">
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <View style={{ width, padding: 3 }}>
            <Image source={item} resizeMode="cover" style={styles.image} />
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View className="flex-row justify-center mt-3">
        {images.map((_, index) => (
          <View
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === activeIndex ? "bg-orange-500 w-9" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 155,
    margin: 2,
    borderRadius: 16,
  },
});

export default Carousel;
