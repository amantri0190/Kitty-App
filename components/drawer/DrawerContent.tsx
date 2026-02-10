import { useAuth } from "@/context/AuthContext";
import { useDrawer } from "@/context/DrawerContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DrawerContent() {
  const { userId, logout } = useAuth();

  const { closeDrawer, resetDrawer } = useDrawer();
  const handleLogout = async () => {
    await logout();
    closeDrawer();
    resetDrawer();
    router.replace("/login");
  };
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pb-4 pt-11">
        <View className="flex-row items-center gap-4">
          {/* Avatar */}
          <View className="w-10 h-10 rounded-full bg-[#EAD38A] items-center justify-center">
            <Text className="text-sm font-semibold text-[#6B4F1D]">U</Text>
          </View>

          {/* Identity */}
          <View>
            <Text className="text-[18px] font-semibold text-gray-900">
              Hi Ujjwal
            </Text>
          </View>
        </View>

        <Pressable onPress={closeDrawer} hitSlop={8}>
          <Ionicons name="close" size={22} color="#9CA3AF" />
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 12 }}
      >
        {/* Primary */}
        <DrawerItem title="My Profile" emphasis />
        <DrawerItem title="Wishlist" />
        <Section title="SHOP BY" />
        <DrawerItem title="All Jewellery" hasChevron />
        <DrawerItem title="Metal" hasChevron />
        <DrawerItem title="Collections" hasChevron />

        <Section title="SHOP FOR" />
        <DrawerItem title="Men" hasChevron />
        <DrawerItem title="Women" hasChevron />

        <Section title="MORE" />
        <DrawerItem title="Jewellery Plans" hasChevron />
        <DrawerItem title="Gold Rate" badge="LIVE" />
        <DrawerItem title="Get In Touch" hasChevron />
        <DrawerItem title="Store Locator" hasChevron />
      </ScrollView>

      {/* Footer */}
      <View className="flex-row items-center justify-between px-5 py-4 border-t border-gray-100">
        <Pressable
          className="flex-row items-center gap-2"
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={18} color="#6B7280" />
          <Text className="text-sm text-gray-700">Logout</Text>
        </Pressable>

        <Text className="text-[10px] text-gray-400">v 2.4.1</Text>
      </View>
    </View>
  );
}

/* ---------- helpers ---------- */

function Section({ title }: { title: string }) {
  return (
    <Text className="px-5 pt-4 pb-2 text-[11px] font-semibold tracking-widest text-[#C9A227]">
      {title}
    </Text>
  );
}

function DrawerItem({
  title,
  badge,
  emphasis,
  hasChevron,
}: {
  title: string;
  badge?: string;
  emphasis?: boolean;
  hasChevron?: boolean;
}) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between h-12 px-5">
      <Text
        className={`text-[15px] ${
          emphasis ? "font-semibold text-gray-900" : "text-gray-800"
        }`}
      >
        {title}
      </Text>

      {badge ? (
        <View className="px-2 py-0.5 rounded-full bg-green-100">
          <Text className="text-[10px] font-semibold text-green-600">
            {badge}
          </Text>
        </View>
      ) : hasChevron ? (
        <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
      ) : null}
    </TouchableOpacity>
  );
}
