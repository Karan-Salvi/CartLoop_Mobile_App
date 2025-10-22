import React from "react";
import { Image, Text, View } from "react-native";

const TailoredItems = [
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
];

const TailoredProducts = () => {
  return (
    <View className="mt-4 px-4">
      {/* Header */}
      <View className="flex flex-row justify-between items-center mb-3">
        <View className="flex flex-row items-center">
          <Text className="text-xl font-semibold text-gray-900 mr-2">
            Just For You
          </Text>
        </View>
      </View>

      {/* Flash Sale Grid */}

      <View className="flex-row flex-wrap justify-between gap-2">
        {TailoredItems.map((img, index) => (
          <View key={index} className="w-[48%]">
            <View className="relative bg-white overflow-hidden w-full h-72 rounded-2xl mb-1 p-2 shadow-black shadow-lg">
              <Image source={img} className="w-full h-full rounded-xl" />
            </View>
            <View className="flex-1 justify-start items-start pl-3 gap-1">
              <Text className="text-base font-normal text-gray-700">
                Lorem ipsum di dolor sit fdih amet consectetur.
              </Text>
              <Text className="text-xl font-extrabold">₹ 115</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TailoredProducts;
