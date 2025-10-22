import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex-1 p-3 w-full h-auto pt-6">
      {/* HEADER PROFILE */}
      <View className="w-full flex-row items-center justify-start">
        <Text className="text-3xl font-extrabold text-left">Wishlist</Text>
      </View>
    </View>
  );
};

export default Header;
