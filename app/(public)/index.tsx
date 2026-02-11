// import AppDrawer from "@/components/drawer/AppDrawer";
// import Header from "@/components/drawer/Header";
// import { useAuth } from "@/context/AuthContext";
// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";
// import { ActivityIndicator, Pressable, Text, View } from "react-native";

// export default function TabsHome() {
//   const { userId, logout } = useAuth();
//   const [goldPrice, setGoldPrice] = useState<string>("0");
//   const [silverPrice, setSilverPrice] = useState<string>("0");
//   const [goldChange, setGoldChange] = useState<string>("+0.0%");
//   const [silverChange, setSilverChange] = useState<string>("+0.0%");
//   const [goldIsUp, setGoldIsUp] = useState<boolean>(true);
//   const [silverIsUp, setSilverIsUp] = useState<boolean>(true);
//   const [loadingPrices, setLoadingPrices] = useState(true);

//   const [prevGoldPrice, setPrevGoldPrice] = useState<number>(0);
//   const [prevSilverPrice, setPrevSilverPrice] = useState<number>(0);
//   const handleLogout = async () => {
//     await logout();
//     router.replace("/login");
//   };
//   const INR_RATE = 92.1;
//   const GRAMS_PER_OUNCE = 31.1034768;
//   const fetchLivePrices = async () => {
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

//       const getPriceData = (data: any) => {
//         const spreadProfile = data[0].spreadProfilePrices[0];
//         const midPriceUSD = (spreadProfile.ask + spreadProfile.bid) / 2;
//         const pricePer10GramUSD = (midPriceUSD / GRAMS_PER_OUNCE) * 10;
//         const priceINR = pricePer10GramUSD * INR_RATE;

//         const formattedPrice = new Intl.NumberFormat("en-IN", {
//           style: "currency",
//           currency: "INR",
//           maximumFractionDigits: 0,
//         }).format(priceINR);

//         return { price: priceINR, formatted: formattedPrice };
//       };

//       const goldData = getPriceData(goldJson);
//       const silverData = getPriceData(silverJson);

//       if (prevGoldPrice > 0) {
//         const goldChangePercent =
//           ((goldData.price - prevGoldPrice) / prevGoldPrice) * 100;
//         setGoldChange(
//           `${goldChangePercent >= 0 ? "+" : ""}${goldChangePercent.toFixed(2)}%`,
//         );
//         setGoldIsUp(goldChangePercent >= 0);
//       }

//       if (prevSilverPrice > 0) {
//         const silverChangePercent =
//           ((silverData.price - prevSilverPrice) / prevSilverPrice) * 100;
//         setSilverChange(
//           `${silverChangePercent >= 0 ? "+" : ""}${silverChangePercent.toFixed(2)}%`,
//         );
//         setSilverIsUp(silverChangePercent >= 0);
//       }

//       setGoldPrice(goldData.formatted);
//       setSilverPrice(silverData.formatted);
//       setPrevGoldPrice(goldData.price);
//       setPrevSilverPrice(silverData.price);
//       setLoadingPrices(false);
//     } catch (error) {
//       console.error("Error fetching live prices:", error);
//       setLoadingPrices(false);
//     }
//   };
//   useEffect(() => {
//     fetchLivePrices();

//     const interval = setInterval(() => {
//       fetchLivePrices();
//     }, 15000); // every 15 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View className="flex-1 bg-[#FFFDF7]">
//       {/* Status / Notification bar */}
//       <StatusBar style="dark" backgroundColor="#FFFDF7" />

//       {/* Header handles safe area */}
//       <Header />

//       {/* Screen Content */}
//       <View
//         style={{
//           paddingHorizontal: 12,
//           paddingTop: 12,
//           paddingBottom: 8,
//           backgroundColor: "#F9FAFB",
//         }}
//       >
//         <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
//           <StatCard
//             label="GOLD (10 GM)"
//             price={goldPrice}
//             change={goldChange}
//             isUp={goldIsUp}
//             loading={loadingPrices}
//           />
//           <StatCard
//             label="SILVER (10 GM)"
//             price={silverPrice}
//             change={silverChange}
//             isUp={silverIsUp}
//             loading={loadingPrices}
//           />
//         </View>

//         {/* Section Header */}
//       </View>
//       <View className="items-center justify-center flex-1 px-6 bg-white">
//         <Text className="mb-2 text-3xl font-bold">🎉 Welcome</Text>

//         <Text className="mb-10 text-gray-500">User ID: {userId}</Text>

//         <Pressable
//           onPress={handleLogout}
//           className="items-center justify-center px-10 bg-black h-14 rounded-xl"
//         >
//           <Text className="text-lg font-semibold text-white">Logout</Text>
//         </Pressable>
//       </View>

//       <AppDrawer />
//     </View>
//   );
// }

// const StatCard = ({ label, price, change, isUp, loading }: any) => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: "#FFFFFF",
//       borderRadius: 16,
//       padding: 16,
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.05,
//       shadowRadius: 8,
//       elevation: 2,
//       borderWidth: 1,
//       borderColor: "#F3F4F6",
//       minHeight: 100,
//     }}
//   >
//     {loading ? (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <ActivityIndicator size="small" color="#9CA3AF" />
//       </View>
//     ) : (
//       <>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "flex-start",
//             justifyContent: "space-between",
//             marginBottom: 8,
//           }}
//         >
//           <View style={{ flex: 1 }}>
//             <Text
//               style={{
//                 fontSize: 11,
//                 fontWeight: "700",
//                 color: "#6B7280",
//                 textTransform: "uppercase",
//                 letterSpacing: 0.5,
//               }}
//             >
//               {label}
//             </Text>
//             <Text
//               style={{
//                 color: isUp ? "#16A34A" : "#DC2626",
//                 fontSize: 11,
//                 fontWeight: "600",
//                 marginTop: 4,
//               }}
//             >
//               {change}
//             </Text>
//           </View>
//           <View
//             style={{
//               width: 32,
//               height: 32,
//               borderRadius: 16,
//               backgroundColor: isUp ? "#DCFCE7" : "#FEE2E2",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Ionicons
//               name={isUp ? "trending-up" : "trending-down"}
//               size={16}
//               color={isUp ? "#16A34A" : "#DC2626"}
//             />
//           </View>
//         </View>

//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "700",
//             color: "#0F172A",
//             marginTop: 4,
//           }}
//         >
//           {price}
//         </Text>
//       </>
//     )}
//   </View>
// );

import Header from "@/components/drawer/Header";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function TabsHome() {
  const [goldPrice, setGoldPrice] = useState("—");
  const [silverPrice, setSilverPrice] = useState("—");
  const [goldChange, setGoldChange] = useState("+0.0%");
  const [silverChange, setSilverChange] = useState("+0.0%");
  const [goldIsUp, setGoldIsUp] = useState(true);
  const [silverIsUp, setSilverIsUp] = useState(true);
  const [loading, setLoading] = useState(true);

  const INR_RATE = 92.1;
  const GRAMS_PER_OUNCE = 31.1034768;

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 350);
    return () => clearInterval(interval);
  }, []);

  const fetchPrices = async () => {
    try {
      const [goldRes, silverRes] = await Promise.all([
        fetch(
          "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD",
        ),
        fetch(
          "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAG/USD",
        ),
      ]);

      const [goldJson, silverJson] = await Promise.all([
        goldRes.json(),
        silverRes.json(),
      ]);

      const parsePrice = (data: any) => {
        const p = data[0].spreadProfilePrices[0];
        const midUSD = (p.ask + p.bid) / 2;
        const per10gUSD = (midUSD / GRAMS_PER_OUNCE) * 10;
        return per10gUSD * INR_RATE;
      };

      const gold = parsePrice(goldJson);
      const silver = parsePrice(silverJson);

      setGoldPrice(
        new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }).format(gold),
      );

      setSilverPrice(
        new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }).format(silver),
      );

      setGoldChange("+0.42%");
      setSilverChange("-0.18%");
      setGoldIsUp(true);
      setSilverIsUp(false);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-[#FFFDF7]">
      <StatusBar style="dark" />
      <Header />

      <View className="px-3 pt-3 pb-2">
        <Text className="mb-2 text-sm font-semibold text-gray-700">
          Live Market Rates
        </Text>

        <View className="flex-row gap-3">
          <StatCard
            label="GOLD (10 GM)"
            price={goldPrice}
            change={goldChange}
            isUp={goldIsUp}
            loading={loading}
          />
          <StatCard
            label="SILVER (10 GM)"
            price={silverPrice}
            change={silverChange}
            isUp={silverIsUp}
            loading={loading}
          />
        </View>
      </View>
    </View>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({ label, price, change, isUp, loading }: any) {
  return (
    <View className="flex-1 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm min-h-[100px]">
      {loading ? (
        <View className="items-center justify-center flex-1">
          <ActivityIndicator size="small" color="#9CA3AF" />
        </View>
      ) : (
        <>
          <View className="flex-row items-start justify-between mb-2">
            <View>
              <Text className="text-[11px] font-bold text-gray-500 tracking-wide">
                {label}
              </Text>
              <Text
                className={`text-[11px] font-semibold mt-1 ${
                  isUp ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}
              </Text>
            </View>

            <View
              className={`w-8 h-8 rounded-full items-center justify-center ${
                isUp ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <Ionicons
                name={isUp ? "trending-up" : "trending-down"}
                size={16}
                color={isUp ? "#16A34A" : "#DC2626"}
              />
            </View>
          </View>

          <Text className="text-xl font-bold text-slate-900">{price}</Text>
        </>
      )}
    </View>
  );
}
