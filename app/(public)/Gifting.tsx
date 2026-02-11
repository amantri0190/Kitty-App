import Header from "@/components/drawer/Header";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Gifting() {
  return (
    <View className="flex-1 bg-[#FFFDF7]">
      <StatusBar style="dark" />
      <Header />
      <View className="flex items-center justify-center h-screen">
        <Text>Gifting</Text>
      </View>
    </View>
  );
}
