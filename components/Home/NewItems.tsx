import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const NewItemsList = [
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
];

const NewItems = () => {
  return (
    <View className="flex-1 p-2">
      <View className="flex-1 flex-row justify-between items-center p-2">
        <Text className="text-2xl font-extrabold text-gray-800">New Items</Text>
        <Link href={"/category"}>
          <View className="flex-row items-center gap-2">
            <Text className="text-lg font-semibold text-gray-800">See All</Text>
            <View className="bg-orange-500 w-8 h-8 rounded-full flex justify-center items-center">
              <FontAwesome size={16} name="arrow-right" color="white" />
            </View>
          </View>
        </Link>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-1 flex-row "
      >
        <View className="flex flex-row items-start justify-between gap-3">
          {NewItemsList.map((img, idx) => (
            <View key={idx} className="flex flex-col w-40 h-auto p-2">
              <View className="flex w-40 h-auto p-2 bg-gray-100 m-2 rounded-lg shadow-black shadow-lg">
                <Image source={img} className="w-full h-36 rounded-md" />
              </View>
              <View className="flex-1 justify-start items-start">
                <Text className="text-base pl-3 font-semibold text-gray-700">
                  Lorem ipsum di dolor sit fdih amet consectetur.
                </Text>
                <Text className="text-xl pl-4 font-extrabold">₹115</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewItems;
