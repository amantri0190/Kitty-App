import AppDrawer from "@/components/AppDrawer";
import Header from "@/components/Header";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

export default function TabsHome() {
  const { userId, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View className="flex-1 bg-[#FFFDF7]">
      {/* Status / Notification bar */}
      <StatusBar style="dark" backgroundColor="#FFFDF7" />

      {/* Header handles safe area */}
      <Header />

      {/* Screen Content */}
      <View className="items-center justify-center flex-1 px-6 bg-white">
        <Text className="mb-2 text-3xl font-bold">🎉 Welcome</Text>

        <Text className="mb-10 text-gray-500">User ID: {userId}</Text>

        <Pressable
          onPress={handleLogout}
          className="items-center justify-center px-10 bg-black h-14 rounded-xl"
        >
          <Text className="text-lg font-semibold text-white">Logout</Text>
        </Pressable>
      </View>

      <AppDrawer />
    </View>
  );
}
