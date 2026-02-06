import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, Image, ImageBackground, Text, View } from "react-native";

const Splash = () => {
  const dot1 = useRef(new Animated.Value(0.3)).current;
  const dot2 = useRef(new Animated.Value(0.3)).current;
  const dot3 = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animateDot = (dot: Animated.Value) =>
      Animated.sequence([
        Animated.timing(dot, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0.3,
          duration: 300,
          useNativeDriver: true,
        }),
      ]);

    Animated.loop(
      Animated.sequence([animateDot(dot1), animateDot(dot2), animateDot(dot3)]),
    ).start();
  }, []);

  return (
    <View className="flex-1 bg-[#121418]">
      {/* Background Image */}
      <ImageBackground
        source={require("../../assets/images/splash.png")}
        resizeMode="cover"
        className="absolute inset-0 opacity-30"
      />

      {/* Dark Overlay for better contrast */}
      {/* <View className="absolute inset-0 bg-black/50" /> */}

      {/* Bottom Gradient */}
      <LinearGradient
        colors={["rgba(18, 20, 24, 0)", "rgba(18, 20, 24, 0.4)", "#121418"]}
        locations={[0, 0.6, 1]}
        className="absolute inset-0"
      />

      {/* Decorative Corners */}
      <View className="absolute top-10 left-8 w-10 h-10 border-t border-l border-[#cc9900]/15" />
      <View className="absolute top-10 right-8 w-10 h-10 border-t border-r border-[#cc9900]/15" />
      <View className="absolute bottom-10 left-8 w-10 h-10 border-b border-l border-[#cc9900]/15" />
      <View className="absolute bottom-10 right-8 w-10 h-10 border-b border-r border-[#cc9900]/15" />

      {/* Center Content */}
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-[140px] h-[140px] rounded-2xl border-2 border-[rgb(204,153,0)] bg-white items-center justify-center p-4">
          <Image
            source={require("../../assets/images/PunjabLogo.png")}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>

        <Text
          style={{ fontFamily: "CinzelBold" }}
          // className="mt-10 text-[#cc9900] text-[30px] tracking-[8px] font-bold text-center leading-[40px]"
          className="mt-10 text-[#cc9900] text-[30px] tracking-[8px] text-center leading-[40px]"
        >
          PUNJAB{"\n"}JEWELLERS
        </Text>
        <View className="flex-row items-center mt-2">
          <View className="w-12 h-[1px] bg-[#cc9900]/40" />
          <Text
            style={{ fontFamily: "CinzelMedium" }}
            // className="mx-4 text-[#cc9900]/80 text-sm tracking-[4px] font-medium"
            className="mx-4 text-[#cc9900]/80 text-sm tracking-[4px]"
          >
            SINCE 1996
          </Text>
          <View className="w-12 h-[1px] bg-[#cc9900]/40" />
        </View>
      </View>

      {/* Bottom Branding */}
      <View className="pb-16 items-center">
        <View className="w-12 h-[1px] bg-[#cc9900]/30 mb-4" />
        <Text className="text-[#cc9900]/60 text-[10px] tracking-[6px] font-light">
          KEWEL SINGH
        </Text>

        {/* Loading Dots */}
        {/* <View className="flex-row mt-8 gap-2">
          <View className="w-1.5 h-1.5 rounded-full bg-[#cc9900]/70" />
          <View className="w-1.5 h-1.5 rounded-full bg-[#cc9900]/40" />
          <View className="w-1.5 h-1.5 rounded-full bg-[#cc9900]/15" />
        </View> */}
        <View className="flex-row mt-8 gap-2">
          <Animated.View
            style={{ opacity: dot1 }}
            className="w-1.5 h-1.5 rounded-full bg-[#cc9900]"
          />
          <Animated.View
            style={{ opacity: dot2 }}
            className="w-1.5 h-1.5 rounded-full bg-[#cc9900]"
          />
          <Animated.View
            style={{ opacity: dot3 }}
            className="w-1.5 h-1.5 rounded-full bg-[#cc9900]"
          />
        </View>
      </View>
    </View>
  );
};

export default Splash;
