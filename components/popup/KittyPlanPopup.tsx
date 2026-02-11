import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function KittyPlanPopup({ onClose }: { onClose: () => void }) {
  return (
    <View className="absolute inset-0 z-50 items-center justify-center">
      {/* Backdrop */}
      <BlurView
        intensity={30}
        tint="dark"
        className="absolute inset-0 bg-black/60"
      />

      {/* Card */}
      <View className="w-[92%] max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* Close */}
        <Pressable className="absolute z-20 p-2 rounded-full right-4 top-4 bg-white/30" onPress={onClose}>
          <MaterialIcons name="close" size={22} color="#fff" />
        </Pressable>

        {/* Header Image */}
        <ImageBackground
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLxx1_SHIhLyxf0b8zm9LnC5cfo6lRESxi5eOb3pbb3P8B4wECbX5k9XgX4wZsRBDzOccTOCc0qDb7pSyjHMbYEpgYzEVZRyVukg1_pAlIMtxKiNuQvkPekhG_USJY3uZxaQCf8KG86VxK_Bp2eduI2FhAeIk47p6jS6np0xa7RSNu9EjXM_-cqWF_wv5N8fwq7bXoLXjSxpVPBf0MyTCkdiZga5f25gwDvCLFnhpNXtLCFjsfLeBksmAhST-HHAFAxltFunbc4cBK",
          }}
          className="justify-end h-48"
        >
          <LinearGradient
            colors={["transparent", "white"]}
            className="absolute inset-0"
          />
        </ImageBackground>

        {/* Floating Icon */}
        <View className="absolute left-0 right-0 items-center top-40">
          <View className="items-center justify-center w-16 h-16 bg-white border-4 border-white rounded-full shadow-lg">
            <MaterialIcons name="diamond" size={32} color="#d9a630" />
          </View>
        </View>

        {/* Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
          className="px-6 pt-12"
        >
          <Text className="mb-2 text-xs font-bold tracking-widest text-center text-primary">
            EXCLUSIVE OFFER
          </Text>

          <Text className="mb-3 text-2xl font-bold text-center text-text-main">
            Unlock Your {"\n"}
            <Text className="text-primary">Golden Future!</Text>
          </Text>

          <Text className="mb-6 text-sm leading-6 text-center text-text-secondary">
            Invest in your dreams with the Punjab Jewellers Kitty Plan. Save
            monthly and enjoy{" "}
            <Text className="font-bold">exclusive bonuses</Text> on your final
            jewelry purchase.
          </Text>

          {/* Features */}
          <View className="gap-3 mb-8">
            <Feature
              icon="verified-user"
              title="100% Secure"
              desc="Your investment is safe."
            />
            <Feature
              icon="savings"
              title="Bonus on Maturity"
              desc="Get extra value on redeem."
            />
          </View>

          {/* CTA */}
          <Pressable className="flex-row items-center justify-center h-12 gap-2 shadow-lg rounded-xl bg-primary shadow-primary/30 active:scale-95">
            <Text className="text-base font-bold text-white">
              Start Your Savings Journey
            </Text>
            <MaterialIcons name="arrow-forward" size={20} color="#fff" />
          </Pressable>

          <Pressable className="items-center mt-4" onPress={onClose}>
            <Text className="text-sm font-semibold text-text-secondary">
              No thanks, maybe later
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}

/* Feature Item */
function Feature({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <View className="flex-row items-center gap-3 p-3 rounded-lg bg-surface-light border border-[#e5e2dc]">
      <View className="items-center justify-center w-10 h-10 rounded-full bg-primary/10">
        <MaterialIcons name={icon} size={22} color="#d9a630" />
      </View>
      <View>
        <Text className="text-sm font-bold text-text-main">{title}</Text>
        <Text className="text-xs text-text-secondary">{desc}</Text>
      </View>
    </View>
  );
}
