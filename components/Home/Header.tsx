import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, TextInput, View } from "react-native";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <View className="flex-row justify-between items-center px-2 py-4 w-full">
      <Image
        source={require("../../assets/images/cartloop.png")}
        className="w-16 h-16 rounded-full "
      />
      <View className="w-4/5 bg-gray-200 flex-row justify-between items-center h-14 overflow-hidden rounded-3xl mx-3 relative">
        <TextInput
          placeholder="Search"
          onChangeText={setSearch}
          className="w-full px-6 h-full placeholder:font-semibold placeholder:text-gray-400 placeholder:text-lg"
        />
        <FontAwesome
          name="search"
          size={20}
          color={"gray"}
          className="absolute right-5"
        />
      </View>
    </View>
  );
};

export default Header;
