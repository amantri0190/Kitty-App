import AppDrawer from "@/components/drawer/AppDrawer";
import Header from "@/components/drawer/Header";
import KittyPlanPopup from "@/components/popup/KittyPlanPopup";
import { DrawerProvider } from "@/context/DrawerContext";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import { useState } from "react";

export default function PublicLayout() {
  const [showKittyPopup, setShowKittyPopup] = useState(true);

  return (
    <DrawerProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#C9A227",
          tabBarInactiveTintColor: "#111",
          tabBarStyle: {
            backgroundColor: "#FFFDF7",
            height: 64,
            paddingBottom: 8,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "HOME",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Category"
          options={{
            title: "CATEGORY",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="GoldPlan"
          options={{
            title: "GOLD PLAN",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="gold" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Gifting"
          options={{
            title: "GIFTING",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="gift" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Sizer"
          options={{
            title: "SIZER",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="ruler-horizontal" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      <AppDrawer />

      {/* 🔥 GLOBAL KITTY POPUP OVER EVERYTHING */}
      {showKittyPopup && (
        <KittyPlanPopup onClose={() => setShowKittyPopup(false)} />
      )}
    </DrawerProvider>
  );
}
