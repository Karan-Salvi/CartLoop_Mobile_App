import React from "react";
import { Image, Text, View } from "react-native";

const recentList = [
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
];

const RecentlyViewed = () => {
  return (
    <View className="flex-1 p-4 gap-2">
      <Text className="text-2xl font-extrabold text-gray-800">
        Recently viewed
      </Text>
      <View className="flex flex-row justify-between items-center">
        {recentList.map((img, idx) => (
          <View
            key={idx}
            className="flex justify-center items-center overflow-hidden rounded-full w-20 h-20 p-2 bg-gray-100 shadow-black shadow-lg"
          >
            <Image source={img} className="w-full h-full rounded-full" />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecentlyViewed;
