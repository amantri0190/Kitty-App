import { useDrawer } from "@/context/DrawerContext";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const { openDrawer } = useDrawer();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className="bg-[#FFFDF7]">
      {/* Top Row */}
      <View className="flex-row items-center justify-between px-4 h-14">
        {/* Menu */}
        <View className="flex-row items-center gap-4">
          <Pressable hitSlop={10} onPress={openDrawer}>
            <Ionicons name="menu" size={26} color="#111" />
          </Pressable>

          <Image
            source={require("../../assets/images/PunjabLogo.png")}
            className="w-10 h-10"
            resizeMode="contain"
          />
        </View>

        {/* Right Icons */}
        <View className="flex-row items-center gap-4">
          <Pressable className="relative">
            <Ionicons name="notifications-outline" size={24} color="#111" />
            <View className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C9A227] rounded-full" />
          </Pressable>

          <Pressable>
            <Ionicons name="logo-whatsapp" size={24} color="#111" />
          </Pressable>
        </View>
      </View>

      {/* Divider */}
      <View className="h-[1px] bg-[#C9A227]" />
    </View>
  );
}
