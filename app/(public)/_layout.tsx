import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
export default function PublicLayout() {
  return (
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
          title: "CATAGORY",
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
      {/* <Tabs.Screen
        name="GoldPlan"
        options={{
          title: "GOLD PLAN",
          tabBarButton: (props) => <GoldPlanTabButton {...props} />,
        }}
      /> */}

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
  );
}
