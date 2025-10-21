import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <View className="bg-white flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        className="bg-white"
      >
        <SafeAreaView className="relative flex-1 items-center justify-center gap-20">
          <Image
            source={require("../assets/images/bg1.png")}
            className="w-50 absolute left-0 top-0 h-60 -translate-x-1/3 -translate-y-1/3 "
          />
          <Image
            source={require("../assets/images/bg1.png")}
            className="h-70 w-50 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2  rotate-180 "
          />
          <Image
            source={require("../assets/images/bg2.png")}
            className="w-50 absolute left-0 top-0 h-60 -translate-x-1/3 -translate-y-1/3 rotate-90 "
          />

          <Image
            source={require("../assets/images/bg2.png")}
            className="h-70 w-50 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2  rotate-180 "
          />
          <View className="flex flex-col items-center gap-4 w-full">
            <Image
              source={require("../assets/images/brand.png")}
              className="h-10 w-48 "
            />
            <Text className="text-3xl font-extrabold text-orange-400 ">
              Get started with CartLoop
            </Text>
            <Text className="font-bold text-gray-600 text-center w-4/5 text-lg leading-tight">
              Start your shopping at CartLoop and get 5% off on your first
              order!
            </Text>
          </View>

          <View className="flex w-full flex-col gap-5 p-6">
            <View className="flex flex-col gap-2">
              <Text className="text-lg font-semibold text-gray-500">
                Enter Full Name{" "}
              </Text>
              <TextInput
                textContentType="name"
                placeholder="Enter Your Full Name"
                onChangeText={setName}
                className="rounded-lg border border-gray-300 p-2 placeholder:text-gray-400"
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="text-lg font-semibold text-gray-500">
                Enter Email
              </Text>
              <TextInput
                textContentType="emailAddress"
                placeholder="Enter Your Email"
                onChangeText={setEmail}
                className="rounded-lg border border-gray-300 p-2 placeholder:text-gray-400"
              />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="text-lg font-semibold text-gray-500">
                Enter Password
              </Text>
              <TextInput
                textContentType="password"
                placeholder="Enter Your Password"
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
                keyboardType="default"
                className="rounded-lg border border-gray-300 p-2 placeholder:text-gray-400"
              />
            </View>
            {/* <LinearGradient
              colors={['#FF9900', '#FF6600']} // orange colors
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="rounded-lg px-5 py-3">
              <TouchableOpacity onPress={() => console.log('Create account button pressed')}>
                <Text className="text-center text-lg font-semibold text-white">Create Account</Text>
              </TouchableOpacity>
            </LinearGradient> */}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => console.log("Create account button pressed")}
              className="flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 "
            >
              <Text className="text-center text-lg font-semibold text-white">
                Login
              </Text>
            </TouchableOpacity>

            <View className="flex flex-row items-center justify-center gap-1">
              <Text className="text-gray-500 font-bold">
                Already have an Account?
              </Text>
              <Link
                style={{
                  color: "orange",
                  fontWeight: 700,
                  textDecorationLine: "underline",
                }}
                href={"/Login"}
              >
                Sign In
              </Link>
            </View>

            {/* <View className="flex flex-row items-center justify-center gap-1">
              <Text className="text-gray-500 font-bold">
                Don't have an account?
              </Text>
              <Link
                style={{
                  color: "orange",
                  fontWeight: 700,
                  textDecorationLine: "underline",
                }}
                href={"/Login"}
              >
                Sign Up
              </Link>
            </View> */}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
