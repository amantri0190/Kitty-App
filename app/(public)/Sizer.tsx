// import Header from "@/components/drawer/Header";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Text, View } from "react-native";

// export default function Sizer() {
//   return (
//     <View className="flex-1 bg-[#FFFDF7]">
//       <StatusBar style="dark" />
//       <Header />
//       <View className="flex items-center justify-center h-screen">
//         <Text>Sizer</Text>
//       </View>
//     </View>
//   );
// }
import Header from "@/components/drawer/Header";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const RING_STEPS = [
  {
    id: "01",
    title: "Position on Scale",
    desc: "Place your favorite ring on a millimeter scale, ensuring it sits perfectly flat.",
  },
  {
    id: "02",
    title: "Measure Inner Diameter",
    desc: "Measure the inside diameter from one inner edge to the other.",
  },
  {
    id: "03",
    title: "Match with Chart",
    desc: "Compare the measurement with our official ring size chart.",
  },
];

const BANGLE_STEPS = [
  {
    id: "01",
    title: "Hand Position",
    desc: "Bring fingers together as if wearing a bangle.",
  },
  {
    id: "02",
    title: "Measure Width",
    desc: "Measure the widest part of your hand using a ruler.",
  },
  {
    id: "03",
    title: "Check Fit",
    desc: "Ensure smooth movement without tight pressure.",
  },
];

export default function Sizer() {
  const [active, setActive] = useState<"ring" | "bangle">("ring");
  const steps = active === "ring" ? RING_STEPS : BANGLE_STEPS;

  return (
    <View className="flex-1 bg-[#FFFDF7]">
      <StatusBar style="dark" />
      <Header />

      {/* Divider */}
      <View className="h-[1px] bg-[#E8DDBF]" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View className="items-center mt-6">
          <Text className="text-[26px] font-semibold text-[#1F2937]">
            Sizing Guide
          </Text>
          <Text className="mt-1 text-[11px] tracking-[3px] text-[#D4A017]">
            PUNJAB JEWELLERS
          </Text>
        </View>

        {/* Toggle */}
        <View className="mx-6 mt-6 bg-[#F3EFE6] p-2 rounded-full flex-row">
          {["ring", "bangle"].map((type) => (
            <Pressable
              key={type}
              onPress={() => setActive(type as any)}
              className={`flex-1 py-3 rounded-full flex-row items-center justify-center ${
                active === type ? "bg-white" : ""
              }`}
            >
              <View
                className={`w-2.5 h-2.5 rounded-full mr-2 ${
                  active === type ? "bg-[#1F2937]" : "bg-[#9CA3AF]"
                }`}
              />
              <Text
                className={`text-sm ${
                  active === type ? "text-[#1F2937]" : "text-[#6B7280]"
                }`}
              >
                {type === "ring" ? "Ring Sizer" : "Bangle Sizer"}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Quote */}
        <Text className="mx-10 mt-6 text-center text-[13px] italic leading-6 text-[#6B7280]">
          "Accuracy is the hallmark of fine jewelry. Use our professional guide
          to find your perfect fit from the comfort of your home."
        </Text>

        {/* How to Measure */}
        <View className="flex-row items-center mx-6 mt-8">
          <View className="bg-[#D4A017] w-9 h-9 rounded-full items-center justify-center">
            <Feather name="play" size={16} color="white" />
          </View>
          <Text className="ml-3 text-lg font-semibold text-[#1F2937]">
            How to Measure
          </Text>
          <Text className="ml-auto text-xs tracking-widest text-[#D4A017]">
            EXPERT GUIDE
          </Text>
        </View>

        {/* Video Card */}
        <View className="mx-6 mt-4 rounded-[22px] overflow-hidden bg-[#B89A6A]">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
            }}
            className="w-full h-[170px]"
            resizeMode="cover"
          />

          <View className="absolute inset-0 items-center justify-center">
            <View className="items-center justify-center w-12 h-12 rounded-full bg-white/90">
              <Feather name="play" size={18} color="#D4A017" />
            </View>
          </View>

          <View className="absolute flex-row items-center bottom-3 left-3 right-3">
            <View className="flex-1 px-4 py-2 bg-black/40 rounded-xl">
              <Text className="text-[11px] text-white/80">Step-by-step</Text>
              <Text className="font-semibold text-white">
                Perfect Fit Secrets
              </Text>
            </View>
            <View className="ml-3 bg-black/50 px-3 py-1.5 rounded-full">
              <Text className="text-xs text-white">0:45</Text>
            </View>
          </View>
        </View>

        {/* Steps */}
        <View className="mx-6 mt-10 mb-10">
          <Text className="text-2xl font-semibold text-[#1F2937]">
            Step-by-Step Guide
          </Text>
          <Text className="mt-1 text-[#6B7280]">
            Follow these precise steps using an existing{" "}
            {active === "ring" ? "ring" : "bangle"}.
          </Text>

          {steps.map((s) => (
            <View key={s.id} className="flex-row mt-6">
              <View className="w-10 h-10 rounded-full bg-[#F5EEDC] items-center justify-center">
                <Text className="text-[#D4A017] font-semibold">{s.id}</Text>
              </View>
              <View className="flex-1 ml-4">
                <View className="flex-row items-center mb-1">
                  <FontAwesome5
                    name="ruler-horizontal"
                    size={12}
                    color={"#d9a630"}
                  />

                  <Text className="ml-2 font-semibold text-[#1F2937]">
                    {s.title}
                  </Text>
                </View>
                <Text className="text-[#6B7280] leading-6">{s.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
