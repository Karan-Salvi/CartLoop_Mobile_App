import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { View } from "react-native";

const TabIcon = ({
  focused,
  title,
  icon,
}: {
  focused: boolean;
  title: string;
  icon: any;
}) => {
  if (!focused) {
    return (
      <View className="flex-1 justify-center items-center">
        <IconSymbol
          size={28}
          name={icon}
          color={focused ? "black" : "orange"}
        />
        {/* <Text className="text-[7px] font-extrabold">{title}</Text> */}
      </View>
    );
  }
  return (
    <View className="flex-1 justify-center items-center">
      <IconSymbol size={28} name={icon} color={focused ? "black" : "orange"} />
      <View className="bg-black w-4 h-1 rounded-md"></View>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 40,
          paddingVertical: 5,
          paddingTop: 10,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon="house.fill" />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Heart" icon="heart.fill" />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              focused={focused}
              title="Category"
              icon="list.dash.header.rectangle"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused} title="Cart" icon="gym.bag.fill" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused} title="Profile" icon="person.fill" />
          ),
        }}
      />
    </Tabs>
  );
}
