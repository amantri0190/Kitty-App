// import { useDrawer } from "@/context/DrawerContext";
// import { Ionicons } from "@expo/vector-icons";
// import { Pressable, ScrollView, Text, View } from "react-native";

// export default function DrawerContent() {
//   const { closeDrawer } = useDrawer();

//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center justify-between px-5 pt-8 pb-6">
//         <View className="flex-row items-center gap-4">
//           {/* Avatar */}
//           <View className="w-11 h-11 rounded-full bg-[#EAD38A] items-center justify-center">
//             <Text className="text-base font-semibold text-[#6B4F1D]">U</Text>
//           </View>

//           {/* Text */}
//           <View className="mt-0.5">
//             <Text className="text-[17px] font-semibold text-gray-900">
//               Ujjwal
//             </Text>
//             <Text className="text-xs tracking-wide text-gray-400">
//               Welcome back
//             </Text>
//           </View>
//         </View>

//         <Pressable onPress={closeDrawer}>
//           <Ionicons name="close" size={22} color="#9CA3AF" />
//         </Pressable>
//       </View>

//       <ScrollView>
//         {/* Primary */}
//         <DrawerItem title="My Profile" subItems={"subItems"} />
//         <DrawerItem title="Wishlist" subItems={"subItems"} />

//         <Section title="SHOP BY" />
//         <DrawerItem title="All Jewellery" subItems={"subItems"} />
//         <DrawerItem title="Metal" subItems={"subItems"} />
//         <DrawerItem title="Collections" subItems={"subItems"} />

//         <Section title="SHOP FOR" />
//         <DrawerItem title="Men" subItems={"subItems"} />
//         <DrawerItem title="Women" subItems={"subItems"} />

//         <DrawerItem title="Jewellery Plans" subItems={"subItems"} />
//         <DrawerItem
//           title="Gold Rate"
//           badge="LIVE"
//           badgeType="live"
//           subItems={"subItems"}
//         />
//         <DrawerItem title="Get In Touch" subItems={"subItems"} />
//         <DrawerItem title="Store Locator" subItems={"subItems"} />
//       </ScrollView>

//       <View className="flex-row items-center justify-between px-5 py-4 border-t border-gray-100">
//         <Pressable className="flex-row items-center gap-2">
//           <Ionicons name="log-out-outline" size={20} color="#6B7280" />
//           <Text className="text-base text-gray-700">Logout</Text>
//         </Pressable>

//         <Text className="text-xs text-gray-400">v 2.4.1</Text>
//       </View>
//     </View>
//   );
// }

// /* ---------- helpers ---------- */

// function Section({ title }: { title: string }) {
//   return (
//     <Text className="px-5 pt-4 pb-2 text-xs font-semibold tracking-widest text-[#C9A227]">
//       {title}
//     </Text>
//   );
// }

// function DrawerItem({
//   title,
//   badge,
//   badgeType,
//   subItems,
// }: {
//   title: string;
//   badge?: string;
//   badgeType?: "live";
//   subItems?: string;
// }) {
//   return (
//     <Pressable className="flex-row items-center justify-between px-5 py-4">
//       <Text className="text-base text-gray-800">{title}</Text>

//       {badge ? (
//         <View
//           className={`px-2 py-0.5 rounded-full ${
//             badgeType === "live" ? "bg-green-100" : "bg-yellow-100"
//           }`}
//         >
//           <Text
//             className={`text-xs font-semibold ${
//               badgeType === "live" ? "text-green-600" : "text-[#C9A227]"
//             }`}
//           >
//             {badge}
//           </Text>
//         </View>
//       ) : (
//         subItems && (
//           <Ionicons name="chevron-forward" size={18} color="#D1D5DB" />
//         )
//       )}
//     </Pressable>
//   );
// }

import { useDrawer } from "@/context/DrawerContext";
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DrawerContent() {
  const { closeDrawer } = useDrawer();

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
        <Pressable className="flex-row items-center gap-2">
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
