import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const products = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit amet consectetur.",
    price: 17,
    discountPrice: null,
    color: "Pink",
    size: "M",
    image: require("../../assets/images/category.jpg"), // Replace with your image
  },
  {
    id: "2",
    name: "Lorem ipsum dolor sit amet consectetur.",
    price: 17,
    discountPrice: 12,
    color: "Pink",
    size: "M",
    image: require("../../assets/images/category.jpg"),
  },
  {
    id: "3",
    name: "Lorem ipsum dolor sit amet consectetur.",
    price: 27,
    discountPrice: null,
    color: "Pink",
    size: "M",
    image: require("../../assets/images/category.jpg"),
  },
  {
    id: "4",
    name: "Lorem ipsum dolor sit amet consectetur.",
    price: 19,
    discountPrice: null,
    color: "Pink",
    size: "M",
    image: require("../../assets/images/category.jpg"),
  },
];

const WishlistList = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View className="flex-row items-center justify-between bg-white rounded-lg shadow-md mb-4 p-1">
      {/* Left Side - Image */}
      <View className="relative">
        <Image
          source={item.image}
          className="w-32 h-32 rounded-lg"
          resizeMode="cover"
        />

        {/* Delete Icon */}
        <TouchableOpacity className="absolute bottom-2 left-2 bg-white p-2 rounded-full">
          <Ionicons name="trash" size={16} color="#ef4444" />
        </TouchableOpacity>
      </View>

      {/* Middle - Product Info */}
      <View className="flex-1 px-3">
        <Text className="text-sm text-gray-700">{item.name}</Text>

        {/* Price */}
        <View className="flex-row items-center mt-1">
          {item.discountPrice ? (
            <>
              <Text className="text-gray-400 line-through mr-2">
                ${item.price.toFixed(2)}
              </Text>
              <Text className="text-lg font-bold text-black">
                ${item.discountPrice.toFixed(2)}
              </Text>
            </>
          ) : (
            <Text className="text-lg font-bold text-black">
              ${item.price.toFixed(2)}
            </Text>
          )}
        </View>

        {/* Color & Size */}
        <View className="flex-row gap-2 mt-2">
          <Text className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs">
            {item.color}
          </Text>
          <Text className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs">
            {item.size}
          </Text>
        </View>
      </View>

      {/* Right Side - Cart Icon */}
      <TouchableOpacity className="p-2 bg-orange-50 rounded-full absolute bottom-2 right-2">
        <Ionicons name="cart-outline" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 12, paddingBottom: 100 }}
    />
  );
};

export default WishlistList;
