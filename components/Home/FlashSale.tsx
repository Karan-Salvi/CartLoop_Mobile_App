import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

const flashItems = [
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
  require("../../assets/images/category.jpg"),
];

export default function FlashSale() {
  return (
    <View className="mt-4 px-4">
      {/* Header */}
      <View className="flex flex-row justify-between items-center mb-3">
        <View className="flex flex-row items-center">
          <Text className="text-xl font-semibold text-gray-900 mr-2">
            Flash Sale
          </Text>
        </View>

        {/* Timer */}
        <View className="flex flex-row gap-2 items-center">
          <Ionicons name="time-outline" size={24} color="#3B82F6" />
          <View className="bg-gray-200 px-2 py-1 rounded-md">
            <Text className="font-bold text-gray-700">00</Text>
          </View>
          <View className="bg-gray-200 px-2 py-1 rounded-md">
            <Text className="font-bold text-gray-700">36</Text>
          </View>
          <View className="bg-gray-200 px-2 py-1 rounded-md">
            <Text className="font-bold text-gray-700">58</Text>
          </View>
        </View>
      </View>

      {/* Flash Sale Grid */}

      <View className="flex-row flex-wrap justify-between gap-2">
        {flashItems.map((img, index) => (
          <View
            key={index}
            className="relative bg-white overflow-hidden w-[32%] h-32 rounded-2xl mb-1 p-2 shadow-black shadow-lg"
          >
            <Image source={img} className="w-full h-full rounded-xl" />
            <View className="absolute top-3 right-4 bg-red-500 px-2 py-1 rounded-lg">
              <Text className="text-white text-xs font-bold">-20%</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
