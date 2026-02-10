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
      <ImageBackground
        source={require("../../assets/images/splash.png")}
        resizeMode="cover"
        className="absolute inset-0 opacity-30"
      />

      <LinearGradient
        colors={["rgba(18, 20, 24, 0)", "rgba(18, 20, 24, 0.4)", "#121418"]}
        locations={[0, 0.6, 1]}
        className="absolute inset-0"
      />
      <View className="absolute top-10 left-8 w-10 h-10 border-t border-l border-[#cc9900]/15" />
      <View className="absolute top-10 right-8 w-10 h-10 border-t border-r border-[#cc9900]/15" />
      <View className="absolute bottom-10 left-8 w-10 h-10 border-b border-l border-[#cc9900]/15" />
      <View className="absolute bottom-10 right-8 w-10 h-10 border-b border-r border-[#cc9900]/15" />

      <View className="items-center justify-center flex-1 px-6">
        <View className="w-[120px] h-[120px] rounded-2xl border-2 border-[rgb(204,153,0)] bg-white items-center justify-center p-4">
          <Image
            source={require("../../assets/images/PunjabLogo.png")}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>

        <Text
          style={{ fontFamily: "CinzelBold" }}
          className="mt-10 text-[#cc9900] text-[30px] tracking-[8px] text-center leading-[40px]"
        >
          PUNJAB{"\n"}JEWELLERS
        </Text>
        <View className="flex-row items-center mt-2">
          <View className="w-12 h-[1px] bg-[#cc9900]/40" />
          <Text
            style={{ fontFamily: "CinzelMedium" }}
            className="mx-4 text-[#cc9900]/80 text-sm tracking-[4px]"
          >
            SINCE 1996
          </Text>
          <View className="w-12 h-[1px] bg-[#cc9900]/40" />
        </View>
      </View>
      <View className="items-center pb-16">
        <View className="w-12 h-[1px] bg-[#cc9900]/30 mb-4" />
        <Text className="text-[#cc9900]/60 text-[10px] tracking-[6px] font-light">
          KEWEL SINGH
        </Text>
        <View className="flex-row gap-2 mt-8">
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
