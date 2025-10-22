import React from "react";
import { Image, Text, View } from "react-native";

const TopProductList = [
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
];
const TopProducts = () => {
  return (
    <View className="flex-1 p-4 gap-2">
      <Text className="text-2xl font-extrabold text-gray-800">
        Top Products
      </Text>
      <View className="flex flex-row justify-between items-center">
        {TopProductList.map((img, idx) => (
          <View
            key={idx}
            className="flex justify-center items-center overflow-hidden rounded-full w-24 h-24 p-2 bg-gray-100 shadow-black shadow-lg"
          >
            <Image source={img} className="w-full h-full rounded-full" />
          </View>
        ))}
      </View>
    </View>
  );
};

export default TopProducts;
