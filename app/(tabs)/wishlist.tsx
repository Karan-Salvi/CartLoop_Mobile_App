import RecentlyViewed from "@/components/Profile/RecentlyViewed";
import Header from "@/components/Wishlist/Header";
import WishlistList from "@/components/Wishlist/WishlistList";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const wishlist = () => {
  return (
    <View className="flex-1 justify-start items-start bg-white">
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Header />
          <RecentlyViewed />
          <WishlistList />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default wishlist;
