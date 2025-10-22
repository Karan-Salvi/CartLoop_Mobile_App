import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import RecentlyViewed from "./RecentlyViewed";

const Header = () => {
  return (
    <View className="flex-1 p-2 w-full h-auto pt-6">
      {/* HEADER PROFILE */}
      <View className="flex-row justify-between items-center w-full h-16 ">
        <View className="flex flex-row h-full gap-1">
          <View className="w-16 h-16 flex justify-center items-center overflow-hidden border border-gray-200 p-1 shadow-black shadow-lg rounded-full">
            <Image
              source={require("../../assets/images/category.jpg")}
              className="w-full h-full rounded-full "
            />
          </View>
          <View className="flex justify-center items-center bg-orange-400 h-full px-6 rounded-full">
            <Text className="text-white font-bold text-lg">My Activity</Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center h-full gap-2">
          <View className="bg-orange-100 flex justify-center items-center h-full px-5 rounded-full">
            <FontAwesome name="cog" size={28} color={"orange"} />
          </View>

          <View className="bg-orange-100 flex justify-center items-center h-full px-5  rounded-full">
            <FontAwesome name="bell" size={28} color={"orange"} />
          </View>
        </View>
      </View>

      {/* HEADER TITLE */}
      <View className="flex-1 justify-start items-start px-2 pt-8 gap-3">
        <Text className="text-4xl font-bold text-gray-800">Hello, Karan!</Text>

        <View className="bg-gray-100 w-full rounded-xl p-4">
          <Text className="text-lg font-semibold ">Announcement</Text>
          <View className="flex-row items-center gap-2 w-10/12">
            <Text className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea
              cupiditate.
            </Text>
            <View className="bg-orange-500 w-10 h-10 rounded-full flex justify-center items-center">
              <FontAwesome size={20} name="arrow-right" color="white" />
            </View>
          </View>
        </View>
      </View>

      {/* RECENTLY VIEWED */}
      <RecentlyViewed />

      {/* MY ORDERS */}
      <View className="flex-1 p-4 gap-2">
        <Text className="text-2xl font-extrabold text-gray-800">My Orders</Text>
        <View className="flex flex-row justify-between items-center gap-2">
          <View className="flex justify-center items-center rounded-full w-1/3 py-2   bg-orange-100 ">
            <Text className="text-orange-400 text-lg">To Pay</Text>
          </View>
          <View className="flex justify-center items-center rounded-full w-1/3 py-2   bg-orange-100 ">
            <Text className="text-orange-400 text-lg">To Receive</Text>
          </View>
          <View className="flex justify-center items-center rounded-full w-1/3 py-2  bg-orange-100 ">
            <Text className="text-orange-400 text-lg">To Review</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
