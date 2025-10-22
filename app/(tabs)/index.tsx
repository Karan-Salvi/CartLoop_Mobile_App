import Carousel from "@/components/Home/Carousel";
import Category from "@/components/Home/Category";
import FlashSale from "@/components/Home/FlashSale";
import Header from "@/components/Home/Header";
import NewItems from "@/components/Home/NewItems";
import Popular from "@/components/Home/Popular";
import TailoredProducts from "@/components/Home/TailoredProducts";
import TopProducts from "@/components/Home/TopProducts";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-start items-center bg-white">
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100, // ✅ prevents content from being hidden at bottom
          }}
        >
          <Header />
          <Carousel />
          <Category />
          <TopProducts />
          <NewItems />
          <FlashSale />
          <Popular />
          <TailoredProducts />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
