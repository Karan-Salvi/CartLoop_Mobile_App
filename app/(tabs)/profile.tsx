import Category from "@/components/Home/Category";
import FlashSale from "@/components/Home/FlashSale";
import NewItems from "@/components/Home/NewItems";
import Popular from "@/components/Home/Popular";
import TailoredProducts from "@/components/Home/TailoredProducts";
import TopProducts from "@/components/Home/TopProducts";
import Header from "@/components/Profile/Header";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
    <View className="flex-1 justify-start items-center bg-white">
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100, 
          }}
        >
          <Header />
          <NewItems />
          <Popular />
          <Category />
          <FlashSale />
          <TopProducts />
          <TailoredProducts />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default profile;
