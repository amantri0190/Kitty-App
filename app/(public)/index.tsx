// import Header from "@/components/drawer/Header";
// import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";
// import { ActivityIndicator, Text, View } from "react-native";

// export default function TabsHome() {
//   const [goldPrice, setGoldPrice] = useState("—");
//   const [silverPrice, setSilverPrice] = useState("—");
//   const [goldChange, setGoldChange] = useState("+0.0%");
//   const [silverChange, setSilverChange] = useState("+0.0%");
//   const [goldIsUp, setGoldIsUp] = useState(true);
//   const [silverIsUp, setSilverIsUp] = useState(true);
//   const [loading, setLoading] = useState(true);

//   const INR_RATE = 92.1;
//   const GRAMS_PER_OUNCE = 31.1034768;

//   useEffect(() => {
//     fetchPrices();
//     const interval = setInterval(fetchPrices, 350);
//     return () => clearInterval(interval);
//   }, []);

//   const fetchPrices = async () => {
//     try {
//       const [goldRes, silverRes] = await Promise.all([
//         fetch(
//           "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD",
//         ),
//         fetch(
//           "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAG/USD",
//         ),
//       ]);

//       const [goldJson, silverJson] = await Promise.all([
//         goldRes.json(),
//         silverRes.json(),
//       ]);

//       const parsePrice = (data: any) => {
//         const p = data[0].spreadProfilePrices[0];
//         const midUSD = (p.ask + p.bid) / 2;
//         const per10gUSD = (midUSD / GRAMS_PER_OUNCE) * 10;
//         return per10gUSD * INR_RATE;
//       };

//       const gold = parsePrice(goldJson);
//       const silver = parsePrice(silverJson);

//       setGoldPrice(
//         new Intl.NumberFormat("en-IN", {
//           style: "currency",
//           currency: "INR",
//           maximumFractionDigits: 0,
//         }).format(gold),
//       );

//       setSilverPrice(
//         new Intl.NumberFormat("en-IN", {
//           style: "currency",
//           currency: "INR",
//           maximumFractionDigits: 0,
//         }).format(silver),
//       );

//       setGoldChange("+0.42%");
//       setSilverChange("-0.18%");
//       setGoldIsUp(true);
//       setSilverIsUp(false);
//       setLoading(false);
//     } catch {
//       setLoading(false);
//     }
//   };

//   return (
// <View className="flex-1 bg-[#FFFDF7]">
//   <StatusBar style="dark" />
//   <Header />

//       <View className="px-3 pt-3 pb-2">
//         <Text className="mb-2 text-sm font-semibold text-gray-700">
//           Live Market Rates
//         </Text>

//         <View className="flex-row gap-3">
//           <StatCard
//             label="GOLD (10 GM)"
//             price={goldPrice}
//             change={goldChange}
//             isUp={goldIsUp}
//             loading={loading}
//           />
//           <StatCard
//             label="SILVER (10 GM)"
//             price={silverPrice}
//             change={silverChange}
//             isUp={silverIsUp}
//             loading={loading}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// /* ---------------- STAT CARD ---------------- */

// function StatCard({ label, price, change, isUp, loading }: any) {
//   return (
//     <View className="flex-1 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm min-h-[100px]">
//       {loading ? (
//         <View className="items-center justify-center flex-1">
//           <ActivityIndicator size="small" color="#9CA3AF" />
//         </View>
//       ) : (
//         <>
//           <View className="flex-row items-start justify-between mb-2">
//             <View>
//               <Text className="text-[11px] font-bold text-gray-500 tracking-wide">
//                 {label}
//               </Text>
//               <Text
//                 className={`text-[11px] font-semibold mt-1 ${
//                   isUp ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {change}
//               </Text>
//             </View>

//             <View
//               className={`w-8 h-8 rounded-full items-center justify-center ${
//                 isUp ? "bg-green-100" : "bg-red-100"
//               }`}
//             >
//               <Ionicons
//                 name={isUp ? "trending-up" : "trending-down"}
//                 size={16}
//                 color={isUp ? "#16A34A" : "#DC2626"}
//               />
//             </View>
//           </View>

//           <Text className="text-xl font-bold text-slate-900">{price}</Text>
//         </>
//       )}
//     </View>
//   );
// }

import Header from "@/components/drawer/Header";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="bg-[#FFFDF7]">
      <StatusBar style="dark" />
      <Header />
      <View className="flex items-center justify-center h-screen">
        <Text>index</Text>
      </View>
    </View>
  );
}
