import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const categories = [
  {
    id: 1,
    title: "Clothing",
    count: 109,
    images: [
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
    ],
  },
  {
    id: 2,
    title: "Shoes",
    count: 530,
    images: [
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
    ],
  },
  {
    id: 3,
    title: "Bags",
    count: 87,
    images: [
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
    ],
  },
  {
    id: 4,
    title: "Lingerie",
    count: 218,
    images: [
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
    ],
  },
  {
    id: 5,
    title: "Watch",
    count: 218,
    images: [
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
    ],
  },
  {
    id: 6,
    title: "Hoodies",
    count: 218,
    images: [
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
      require("../../assets/images/category.jpg"),
    ],
  },
];

const Category = () => {
  return (
    <View className="flex-1 p-2">
      <View className="flex-1 flex-row justify-between items-center p-2">
        <Text className="text-2xl font-extrabold text-gray-800">
          Categories
        </Text>
        <Link href={"/category"}>
          <View className="flex-row items-center gap-2">
            <Text className="text-lg font-semibold text-gray-800">See All</Text>
            <View className="bg-orange-500 w-8 h-8 rounded-full flex justify-center items-center">
              <FontAwesome size={16} name="arrow-right" color="white" />
            </View>
          </View>
        </Link>
      </View>

      <View className="flex-row flex-wrap justify-between">
        {categories.map((cat) => (
          <View
            key={cat.id}
            className="w-[48%] mb-5 bg-white rounded-2xl shadow-md p-2"
          >
            {/* Images Grid */}
            <View className="flex-row flex-wrap justify-between">
              {cat.images.map((img, idx) => (
                <Image
                  key={idx}
                  source={img}
                  className="w-[48%] h-20 rounded-xl mb-1"
                />
              ))}
            </View>

            {/* Title & Count */}
            <View className="flex-row items-center justify-between mt-2">
              <Text className="text-base font-semibold text-gray-800">
                {cat.title}
              </Text>
              <View className="bg-orange-100 px-2 py-0.5 rounded-lg">
                <Text className="text-orange-700 text-xs font-semibold">
                  {cat.count}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Category;
