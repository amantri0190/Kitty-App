// import Header from "@/components/drawer/Header";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import { useRouter } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   Animated,
//   Dimensions,
//   Image,
//   ImageBackground,
//   Modal,
//   Pressable,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { width, height } = Dimensions.get("window");

// // Free assets from Unsplash
// const OCCASIONS = [
//   {
//     id: 1,
//     name: "ANNIVERSARY",
//     img: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
//     story:
//       "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
//   },
//   {
//     id: 2,
//     name: "BIRTHDAY",
//     img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&q=80",
//     story:
//       "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
//   },
//   {
//     id: 3,
//     name: "WEDDING",
//     img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
//     story:
//       "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
//   },
//   {
//     id: 4,
//     name: "VALENTINES",
//     img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80",
//     story:
//       "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
//   },
//   {
//     id: 5,
//     name: "NEW BIRTH",
//     img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80",
//     story:
//       "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
//   },
// ];

// const PRODUCTS = [
//   {
//     id: 1,
//     title: "Diamond Solitaire Engagement Ring",
//     type: "video",
//     img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
//     price: "₹1,25,000",
//   },
//   {
//     id: 2,
//     title: "Vintage Gold Band with Filigree",
//     type: "image",
//     img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
//     price: "₹85,000",
//   },
//   {
//     id: 3,
//     title: "Platinum Three-Stone Ring",
//     type: "video",
//     img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80",
//     price: "₹2,50,000",
//   },
//   {
//     id: 4,
//     title: "Rose Gold Infinity Design Ring",
//     type: "image",
//     img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
//     price: "₹95,000",
//   },
// ];

// // Story Modal Component
// const StoryModal = ({ visible, onClose, occasion }: any) => {
//   const [progress] = useState(new Animated.Value(0));

//   React.useEffect(() => {
//     if (visible) {
//       progress.setValue(0);
//       Animated.timing(progress, {
//         toValue: 1,
//         duration: 5000,
//         useNativeDriver: false,
//       }).start(() => {
//         onClose();
//       });
//     }
//   }, [visible]);

//   if (!occasion) return null;

//   return (
//     <Modal
//       visible={visible}
//       transparent={false}
//       animationType="fade"
//       onRequestClose={onClose}
//     >
//       <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
//         <StatusBar style="light" />

//         {/* Progress Bar */}
//         <View
//           style={{
//             position: "absolute",
//             top: 50,
//             left: 10,
//             right: 10,
//             zIndex: 10,
//             height: 3,
//             backgroundColor: "rgba(255,255,255,0.3)",
//             borderRadius: 2,
//           }}
//         >
//           <Animated.View
//             style={{
//               height: "100%",
//               backgroundColor: "#fff",
//               borderRadius: 2,
//               width: progress.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: ["0%", "100%"],
//               }),
//             }}
//           />
//         </View>

//         {/* Close Button */}
//         <TouchableOpacity
//           onPress={onClose}
//           style={{
//             position: "absolute",
//             top: 50,
//             right: 20,
//             zIndex: 20,
//             width: 30,
//             height: 30,
//             borderRadius: 15,
//             backgroundColor: "rgba(0,0,0,0.5)",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Ionicons name="close" size={20} color="#fff" />
//         </TouchableOpacity>

//         {/* Story Content */}
//         <Pressable style={{ flex: 1 }} onPress={onClose}>
//           <ImageBackground
//             source={{ uri: occasion.story }}
//             style={{ flex: 1 }}
//             resizeMode="cover"
//           >
//             <LinearGradient
//               colors={["rgba(0,0,0,0.5)", "transparent", "rgba(0,0,0,0.7)"]}
//               style={{ flex: 1, justifyContent: "flex-end", padding: 20 }}
//             >
//               <View style={{ marginBottom: 40 }}>
//                 <Text
//                   style={{
//                     color: "#CE9900",
//                     fontSize: 12,
//                     fontWeight: "bold",
//                     letterSpacing: 2,
//                     marginBottom: 8,
//                   }}
//                 >
//                   PERFECT FOR
//                 </Text>
//                 <Text
//                   style={{
//                     color: "#fff",
//                     fontSize: 32,
//                     fontWeight: "bold",
//                     marginBottom: 12,
//                   }}
//                 >
//                   {occasion.name}
//                 </Text>
//                 <Text
//                   style={{
//                     color: "rgba(255,255,255,0.9)",
//                     fontSize: 16,
//                     lineHeight: 24,
//                   }}
//                 >
//                   Discover our handpicked collection of exquisite jewelry pieces
//                   perfect for this special occasion.
//                 </Text>

//                 <TouchableOpacity
//                   style={{
//                     backgroundColor: "#CE9900",
//                     paddingVertical: 14,
//                     paddingHorizontal: 32,
//                     borderRadius: 12,
//                     marginTop: 20,
//                     alignSelf: "flex-start",
//                   }}
//                   onPress={onClose}
//                 >
//                   <Text
//                     style={{
//                       color: "#fff",
//                       fontWeight: "bold",
//                       fontSize: 14,
//                     }}
//                   >
//                     Shop Now
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </LinearGradient>
//           </ImageBackground>
//         </Pressable>
//       </SafeAreaView>
//     </Modal>
//   );
// };

// export default function Gifting() {
//   const router = useRouter();
//   const [wishlist, setWishlist] = useState<number[]>([]);
//   const [selectedOccasion, setSelectedOccasion] = useState(null);
//   const [storyVisible, setStoryVisible] = useState(false);
//   const [viewedStories, setViewedStories] = useState<number[]>([]);

//   const toggleWishlist = (productId: number) => {
//     setWishlist((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId],
//     );
//   };

//   const openStory = (occasion: any) => {
//     setSelectedOccasion(occasion);
//     setStoryVisible(true);
//     if (!viewedStories.includes(occasion.id)) {
//       setViewedStories((prev) => [...prev, occasion.id]);
//     }
//   };

//   const navigateToPriceRange = (price: number) => {
//     console.log(`Navigate to products under ₹${price}`);
//     // router.push(`/products?maxPrice=${price}`);
//   };

//   const navigateToProduct = (product: any) => {
//     console.log(`Navigate to product: ${product.title}`);
//     // router.push(`/product/${product.id}`);
//   };

//   const navigateToAllProducts = () => {
//     // Navigate to the ProductsListingScreen
//     router.push("/ProductsListing");
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#FFFDF7" }}>
//       <StatusBar style="dark" />
//       <Header />

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 100 }}
//       >
//         {/* Section: Gift by Occasion */}
//         <View style={{ paddingVertical: 12 }}>
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: "bold",
//               paddingHorizontal: 16,
//               marginBottom: 16,
//               color: "#161513",
//             }}
//           >
//             Gift by Occasion
//           </Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{ paddingHorizontal: 16 }}
//           >
//             {OCCASIONS.map((item) => {
//               const isViewed = viewedStories.includes(item.id);
//               return (
//                 <TouchableOpacity
//                   key={item.id}
//                   style={{ alignItems: "center", marginRight: 24 }}
//                   onPress={() => openStory(item)}
//                   activeOpacity={0.7}
//                 >
//                   <View
//                     style={{
//                       width: 64,
//                       height: 64,
//                       borderRadius: 32,
//                       borderWidth: 2.5,
//                       borderColor: isViewed ? "#ddd" : "#CE9900",
//                       padding: 3,
//                     }}
//                   >
//                     <Image
//                       source={{ uri: item.img }}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: 28,
//                         backgroundColor: "#f5f5f5",
//                       }}
//                     />
//                   </View>
//                   <Text
//                     style={{
//                       fontSize: 10,
//                       fontWeight: "bold",
//                       marginTop: 8,
//                       color: isViewed ? "#999" : "#444",
//                       letterSpacing: 1,
//                     }}
//                   >
//                     {item.name}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>
//         </View>

//         {/* Hero Banner */}
//         <View style={{ paddingHorizontal: 16, marginBottom: 28 }}>
//           <ImageBackground
//             source={{
//               uri: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
//             }}
//             style={{
//               width: "100%",
//               height: 450,
//               borderRadius: 24,
//               overflow: "hidden",
//               justifyContent: "flex-end",
//             }}
//             imageStyle={{ borderRadius: 24 }}
//           >
//             <LinearGradient
//               colors={["transparent", "rgba(0,0,0,0.7)"]}
//               style={{ padding: 24 }}
//             >
//               <Text
//                 style={{
//                   color: "#CE9900",
//                   letterSpacing: 2,
//                   fontSize: 10,
//                   fontWeight: "bold",
//                   marginBottom: 4,
//                 }}
//               >
//                 PREMIUM COLLECTION
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 30,
//                   fontWeight: "bold",
//                   color: "#fff",
//                   marginBottom: 16,
//                 }}
//               >
//                 Curated Gift Sets
//               </Text>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: "#CE9900",
//                   paddingVertical: 12,
//                   paddingHorizontal: 32,
//                   borderRadius: 12,
//                   alignSelf: "flex-start",
//                 }}
//                 activeOpacity={0.8}
//               >
//                 <Text
//                   style={{
//                     fontSize: 14,
//                     fontWeight: "bold",
//                     color: "#fff",
//                   }}
//                 >
//                   Shop the Collection
//                 </Text>
//               </TouchableOpacity>
//             </LinearGradient>
//           </ImageBackground>
//         </View>

//         {/* Shop by Price */}
//         <View style={{ marginBottom: 24 }}>
//           <Text
//             style={{
//               paddingHorizontal: 16,
//               marginBottom: 16,
//               fontSize: 18,
//               fontWeight: "bold",
//               color: "#161513",
//             }}
//           >
//             Shop by Price
//           </Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{ paddingHorizontal: 16 }}
//           >
//             {[5000, 10000, 25000].map((price, idx) => (
//               <TouchableOpacity
//                 key={idx}
//                 style={{
//                   width: 90,
//                   aspectRatio: 1,
//                   borderRadius: 12,
//                   borderWidth: 1,
//                   borderColor: "#CE9900",
//                   marginRight: 16,
//                   alignItems: "center",
//                   justifyContent: "center",
//                   backgroundColor: "#fff",
//                   shadowColor: "#000",
//                   shadowOffset: { width: 0, height: 2 },
//                   shadowOpacity: 0.1,
//                   shadowRadius: 4,
//                   elevation: 3,
//                 }}
//                 onPress={() => navigateToPriceRange(price)}
//                 activeOpacity={0.7}
//               >
//                 <MaterialCommunityIcons
//                   name="gift-outline"
//                   size={24}
//                   color="#CE9900"
//                 />
//                 <Text
//                   style={{
//                     fontSize: 8,
//                     color: "#CE9900",
//                     fontWeight: "bold",
//                     marginTop: 4,
//                     letterSpacing: 0.5,
//                   }}
//                 >
//                   GIFTS UNDER
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: 12,
//                     fontWeight: "bold",
//                     color: "#CE9900",
//                   }}
//                 >
//                   ₹{price.toLocaleString()}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity
//               style={{
//                 width: 90,
//                 aspectRatio: 1,
//                 borderRadius: 12,
//                 backgroundColor: "#CE9900",
//                 marginRight: 16,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 shadowColor: "#CE9900",
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 8,
//                 elevation: 5,
//               }}
//               onPress={() => console.log("Navigate to premium gifts")}
//               activeOpacity={0.8}
//             >
//               <MaterialCommunityIcons
//                 name="gift-outline"
//                 size={24}
//                 color="white"
//               />
//               <Text
//                 style={{
//                   fontSize: 8,
//                   color: "#fff",
//                   fontWeight: "bold",
//                   marginTop: 4,
//                   letterSpacing: 0.5,
//                 }}
//               >
//                 PREMIUM
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: "bold",
//                   color: "#fff",
//                 }}
//               >
//                 Gifts
//               </Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>

//         {/* Top Picks Grid */}
//         <View style={{ paddingHorizontal: 16 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "flex-end",
//               justifyContent: "space-between",
//               marginBottom: 24,
//             }}
//           >
//             <View>
//               <Text
//                 style={{ fontSize: 20, fontWeight: "bold", color: "#161513" }}
//               >
//                 Top Gift Picks
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 10,
//                   color: "#CE9900",
//                   fontWeight: "bold",
//                   letterSpacing: 1.5,
//                   marginTop: 2,
//                 }}
//               >
//                 RECOMMENDED FOR YOU
//               </Text>
//             </View>
//             <TouchableOpacity
//               style={{ borderBottomWidth: 1, borderBottomColor: "#CE9900" }}
//               activeOpacity={0.7}
//               onPress={navigateToAllProducts}
//             >
//               <Text
//                 style={{
//                   color: "#CE9900",
//                   fontSize: 10,
//                   fontWeight: "bold",
//                   marginBottom: 2,
//                   letterSpacing: 0.5,
//                 }}
//               >
//                 VIEW ALL
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <View
//             style={{
//               flexDirection: "row",
//               flexWrap: "wrap",
//               justifyContent: "space-between",
//               marginBottom: -80,
//             }}
//           >
//             {PRODUCTS.map((product) => {
//               const isWishlisted = wishlist.includes(product.id);

//               return (
//                 <TouchableOpacity
//                   key={product.id}
//                   style={{
//                     width: width * 0.44,
//                     marginBottom: 24,
//                     backgroundColor: "#fff",
//                     borderRadius: 16,
//                     overflow: "hidden",
//                     borderWidth: 1,
//                     borderColor: "#f0f0f0",
//                     shadowColor: "#000",
//                     shadowOffset: { width: 0, height: 2 },
//                     shadowOpacity: 0.05,
//                     shadowRadius: 4,
//                     elevation: 2,
//                   }}
//                   onPress={() => navigateToProduct(product)}
//                   activeOpacity={0.9}
//                 >
//                   <View
//                     style={{
//                       position: "relative",
//                       height: 176,
//                       backgroundColor: "#F9F9F9",
//                     }}
//                   >
//                     <Image
//                       source={{ uri: product.img }}
//                       style={{ width: "100%", height: "100%" }}
//                       resizeMode="cover"
//                     />

//                     {/* Wishlist Button */}
//                     <TouchableOpacity
//                       style={{
//                         position: "absolute",
//                         top: 8,
//                         left: 8,
//                         backgroundColor: "rgba(255,255,255,0.9)",
//                         borderRadius: 20,
//                         padding: 6,
//                         shadowColor: "#000",
//                         shadowOffset: { width: 0, height: 1 },
//                         shadowOpacity: 0.1,
//                         shadowRadius: 2,
//                         elevation: 2,
//                       }}
//                       onPress={() => toggleWishlist(product.id)}
//                       activeOpacity={0.7}
//                     >
//                       <Ionicons
//                         name={isWishlisted ? "heart" : "heart-outline"}
//                         size={18}
//                         color={isWishlisted ? "#FF0000" : "#444"}
//                       />
//                     </TouchableOpacity>

//                     {/* Video Indicator */}
//                     {product.type === "video" && (
//                       <View
//                         style={{
//                           position: "absolute",
//                           top: 8,
//                           right: 8,
//                           backgroundColor: "rgba(0,0,0,0.5)",
//                           borderRadius: 12,
//                           padding: 4,
//                         }}
//                       >
//                         <Ionicons name="play" size={14} color="white" />
//                       </View>
//                     )}
//                   </View>

//                   <View style={{ padding: 12, alignItems: "center" }}>
//                     <Text
//                       style={{
//                         fontSize: 11,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                         color: "#333",
//                         height: 32,
//                         marginBottom: 8,
//                       }}
//                       numberOfLines={2}
//                     >
//                       {product.title}
//                     </Text>

//                     <TouchableOpacity
//                       style={{
//                         borderWidth: 1,
//                         borderColor: "rgba(206,153,0,0.4)",
//                         width: "100%",
//                         paddingVertical: 8,
//                         borderRadius: 8,
//                         backgroundColor: "#fff",
//                       }}
//                       onPress={() => navigateToProduct(product)}
//                       activeOpacity={0.7}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 10,
//                           textAlign: "center",
//                           color: "#CE9900",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         Price on Request
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </View>
//       </ScrollView>

//       {/* Story Modal */}
//       <StoryModal
//         visible={storyVisible}
//         onClose={() => setStoryVisible(false)}
//         occasion={selectedOccasion}
//       />
//     </View>
//   );
// }

import Header from "@/components/drawer/Header";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

// Free assets from Unsplash
const OCCASIONS = [
  {
    id: 1,
    name: "ANNIVERSARY",
    img: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
    story:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
  },
  {
    id: 2,
    name: "BIRTHDAY",
    img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&q=80",
    story:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  },
  {
    id: 3,
    name: "WEDDING",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
    story:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
  },
  {
    id: 4,
    name: "VALENTINES",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80",
    story:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
  },
  {
    id: 5,
    name: "NEW BIRTH",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80",
    story:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: "Diamond Solitaire Engagement Ring",
    type: "video",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    price: "₹1,25,000",
    category: "diamond",
  },
  {
    id: 2,
    title: "Vintage Gold Band with Filigree",
    type: "image",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    price: "₹85,000",
    category: "gold",
  },
  {
    id: 3,
    title: "Platinum Three-Stone Ring",
    type: "video",
    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80",
    price: "₹2,50,000",
    category: "platinum",
  },
  {
    id: 4,
    title: "Rose Gold Infinity Design Ring",
    type: "image",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    price: "₹95,000",
    category: "gold",
  },
  {
    id: 5,
    title: "Emerald Cut Diamond Cocktail Ring",
    type: "image",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    category: "diamond",
  },
  {
    id: 6,
    title: "Yellow Gold Eternity Band",
    type: "video",
    img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    category: "gold",
  },
  {
    id: 7,
    title: "White Gold Halo Ring",
    type: "image",
    img: "https://images.unsplash.com/photo-1589128777073-263566ae5e5d?w=600&q=80",
    category: "gold",
  },
  {
    id: 8,
    title: "Art Deco Inspired Statement Ring",
    type: "video",
    img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
    category: "diamond",
  },
  {
    id: 9,
    title: "Platinum Engagement Ring",
    type: "image",
    img: "https://images.unsplash.com/photo-1588444837495-c6c4155d2f97?w=600&q=80",
    category: "platinum",
  },
  {
    id: 10,
    title: "Gold Stackable Band Set",
    type: "image",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    category: "gold",
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "gold", label: "Gold" },
  { id: "diamond", label: "Diamond" },
  { id: "platinum", label: "Platinum" },
  { id: "price", label: "Price" },
];

// Story Modal Component
const StoryModal = ({ visible, onClose, occasion }: any) => {
  const [progress] = useState(new Animated.Value(0));

  React.useEffect(() => {
    if (visible) {
      progress.setValue(0);
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }).start(() => {
        onClose();
      });
    }
  }, [visible]);

  if (!occasion) return null;

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <StatusBar style="light" />

        {/* Progress Bar */}
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 10,
            right: 10,
            zIndex: 10,
            height: 3,
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 2,
          }}
        >
          <Animated.View
            style={{
              height: "100%",
              backgroundColor: "#fff",
              borderRadius: 2,
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            }}
          />
        </View>

        {/* Close Button */}
        <TouchableOpacity
          onPress={onClose}
          style={{
            position: "absolute",
            top: 50,
            right: 20,
            zIndex: 20,
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "rgba(0,0,0,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="close" size={20} color="#fff" />
        </TouchableOpacity>

        {/* Story Content */}
        <Pressable style={{ flex: 1 }} onPress={onClose}>
          <ImageBackground
            source={{ uri: occasion.story }}
            style={{ flex: 1 }}
            resizeMode="cover"
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.5)", "transparent", "rgba(0,0,0,0.7)"]}
              style={{ flex: 1, justifyContent: "flex-end", padding: 20 }}
            >
              <View style={{ marginBottom: 40 }}>
                <Text
                  style={{
                    color: "#CE9900",
                    fontSize: 12,
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginBottom: 8,
                  }}
                >
                  PERFECT FOR
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 32,
                    fontWeight: "bold",
                    marginBottom: 12,
                  }}
                >
                  {occasion.name}
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: 16,
                    lineHeight: 24,
                  }}
                >
                  Discover our handpicked collection of exquisite jewelry pieces
                  perfect for this special occasion.
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#CE9900",
                    paddingVertical: 14,
                    paddingHorizontal: 32,
                    borderRadius: 12,
                    marginTop: 20,
                    alignSelf: "flex-start",
                  }}
                  onPress={onClose}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    Shop Now
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

// Products Listing View (Nested Component)
const ProductsListingView = ({ onBack, wishlist, toggleWishlist }: any) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter products based on active filter
  const filteredProducts =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeFilter);

  const navigateToProduct = (product: any) => {
    console.log(`Navigate to product detail: ${product.title}`);
  };

  const renderProduct = ({ item }: any) => {
    const isWishlisted = wishlist.includes(item.id);

    return (
      <TouchableOpacity
        style={{
          width: width * 0.46,
          marginBottom: 16,
          backgroundColor: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 3,
        }}
        onPress={() => navigateToProduct(item)}
        activeOpacity={0.9}
      >
        {/* Product Image */}
        <View
          style={{
            position: "relative",
            height: 200,
            backgroundColor: "#F5F5F5",
          }}
        >
          <Image
            source={{ uri: item.img }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />

          {/* Wishlist Heart */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              backgroundColor: "rgba(255,255,255,0.95)",
              borderRadius: 20,
              padding: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.15,
              shadowRadius: 3,
              elevation: 3,
            }}
            onPress={() => toggleWishlist(item.id)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isWishlisted ? "heart" : "heart-outline"}
              size={20}
              color={isWishlisted ? "#FF0000" : "#666"}
            />
          </TouchableOpacity>

          {/* Video Indicator */}
          {item.type === "video" && (
            <View
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: 20,
                padding: 8,
              }}
            >
              <Ionicons name="play" size={16} color="white" />
            </View>
          )}
        </View>

        {/* Product Info */}
        <View style={{ padding: 12 }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "600",
              color: "#1a1a1a",
              marginBottom: 10,
              height: 36,
            }}
            numberOfLines={2}
          >
            {item.title}
          </Text>

          {/* Price on Request Button */}
          <TouchableOpacity
            style={{
              borderWidth: 1.5,
              borderColor: "#CE9900",
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "#FFFDF7",
            }}
            onPress={() => navigateToProduct(item)}
            activeOpacity={0.8}
          >
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                color: "#CE9900",
                fontWeight: "bold",
                letterSpacing: 0.3,
              }}
            >
              Price on Request
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFDF7" }}>
      {/* Header */}
      <SafeAreaView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 2,
          backgroundColor: "#FFFDF7",
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
        }}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={onBack}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#1a1a1a",
            letterSpacing: 0.3,
          }}
        >
          Rings
        </Text>

        {/* Right Icons */}
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name="tune-variant"
              size={24}
              color="#1a1a1a"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            activeOpacity={0.7}
          >
            <Ionicons name="search" size={24} color="#1a1a1a" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Filter Pills */}
      <View style={{ backgroundColor: "#FFFDF7", paddingVertical: 14 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <TouchableOpacity
                key={filter.id}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 20,
                  marginRight: 10,
                  marginBottom: 4,
                  backgroundColor: isActive ? "#CE9900" : "#fff",
                  borderWidth: 1,
                  borderColor: isActive ? "#CE9900" : "#e0e0e0",
                  shadowColor: isActive ? "#CE9900" : "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: isActive ? 0.2 : 0.05,
                  shadowRadius: 4,
                  elevation: isActive ? 3 : 1,
                }}
                onPress={() => setActiveFilter(filter.id)}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? "bold" : "600",
                    color: isActive ? "#fff" : "#666",
                    letterSpacing: 0.3,
                  }}
                >
                  {filter.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 4,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Main Gifting Component
export default function Gifting() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [storyVisible, setStoryVisible] = useState(false);
  const [viewedStories, setViewedStories] = useState<number[]>([]);
  const [showProductsListing, setShowProductsListing] = useState(false);

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const openStory = (occasion: any) => {
    setSelectedOccasion(occasion);
    setStoryVisible(true);
    if (!viewedStories.includes(occasion.id)) {
      setViewedStories((prev) => [...prev, occasion.id]);
    }
  };

  const navigateToPriceRange = (price: number) => {
    console.log(`Navigate to products under ₹${price}`);
  };

  const navigateToProduct = (product: any) => {
    console.log(`Navigate to product: ${product.title}`);
  };

  const navigateToAllProducts = () => {
    setShowProductsListing(true);
  };

  const handleBackFromProducts = () => {
    setShowProductsListing(false);
  };

  // Show Products Listing if toggled
  if (showProductsListing) {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFDF7" }}>
        <StatusBar style="dark" />
        <ProductsListingView
          onBack={handleBackFromProducts}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      </View>
    );
  }

  // Main Gifting Page
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFDF7" }}>
      <StatusBar style="dark" />
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Section: Gift by Occasion */}
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingHorizontal: 16,
              marginBottom: 16,
              color: "#161513",
            }}
          >
            Gift by Occasion
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {OCCASIONS.map((item) => {
              const isViewed = viewedStories.includes(item.id);
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{ alignItems: "center", marginRight: 24 }}
                  onPress={() => openStory(item)}
                  activeOpacity={0.7}
                >
                  <View
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 32,
                      borderWidth: 2.5,
                      borderColor: isViewed ? "#ddd" : "#CE9900",
                      padding: 3,
                    }}
                  >
                    <Image
                      source={{ uri: item.img }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 28,
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      marginTop: 8,
                      color: isViewed ? "#999" : "#444",
                      letterSpacing: 1,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Hero Banner */}
        <View style={{ paddingHorizontal: 16, marginBottom: 32 }}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
            }}
            style={{
              width: "100%",
              height: 450,
              borderRadius: 24,
              overflow: "hidden",
              justifyContent: "flex-end",
            }}
            imageStyle={{ borderRadius: 24 }}
          >
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.7)"]}
              style={{ padding: 24 }}
            >
              <Text
                style={{
                  color: "#CE9900",
                  letterSpacing: 2,
                  fontSize: 10,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                PREMIUM COLLECTION
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                Curated Gift Sets
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#CE9900",
                  paddingVertical: 12,
                  paddingHorizontal: 32,
                  borderRadius: 12,
                  alignSelf: "flex-start",
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Shop the Collection
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Shop by Price */}
        <View style={{ marginBottom: 32 }}>
          <Text
            style={{
              paddingHorizontal: 16,
              marginBottom: 16,
              fontSize: 18,
              fontWeight: "bold",
              color: "#161513",
            }}
          >
            Shop by Price
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {[5000, 10000, 25000].map((price, idx) => (
              <TouchableOpacity
                key={idx}
                style={{
                  width: 90,
                  aspectRatio: 1,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "#CE9900",
                  marginRight: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                }}
                onPress={() => navigateToPriceRange(price)}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons
                  name="gift-outline"
                  size={24}
                  color="#CE9900"
                />
                <Text
                  style={{
                    fontSize: 8,
                    color: "#CE9900",
                    fontWeight: "bold",
                    marginTop: 4,
                    letterSpacing: 0.5,
                  }}
                >
                  GIFTS UNDER
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#CE9900",
                  }}
                >
                  ₹{price.toLocaleString()}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                width: 90,
                aspectRatio: 1,
                borderRadius: 12,
                backgroundColor: "#CE9900",
                marginRight: 16,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#CE9900",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 5,
              }}
              onPress={() => console.log("Navigate to premium gifts")}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons
                name="gift-outline"
                size={24}
                color="white"
              />
              <Text
                style={{
                  fontSize: 8,
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: 4,
                  letterSpacing: 0.5,
                }}
              >
                PREMIUM
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Gifts
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Top Picks Grid */}
        <View style={{ paddingHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#161513" }}
              >
                Top Gift Picks
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "#CE9900",
                  fontWeight: "bold",
                  letterSpacing: 1.5,
                  marginTop: 2,
                }}
              >
                RECOMMENDED FOR YOU
              </Text>
            </View>
            <TouchableOpacity
              style={{ borderBottomWidth: 1, borderBottomColor: "#CE9900" }}
              activeOpacity={0.7}
              onPress={navigateToAllProducts}
            >
              <Text
                style={{
                  color: "#CE9900",
                  fontSize: 10,
                  fontWeight: "bold",
                  marginBottom: 2,
                  letterSpacing: 0.5,
                }}
              >
                VIEW ALL
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginBottom: -100,
            }}
          >
            {PRODUCTS.slice(0, 4).map((product) => {
              const isWishlisted = wishlist.includes(product.id);

              return (
                <TouchableOpacity
                  key={product.id}
                  style={{
                    width: width * 0.44,
                    marginBottom: 24,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#f0f0f0",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                  onPress={() => navigateToProduct(product)}
                  activeOpacity={0.9}
                >
                  <View
                    style={{
                      position: "relative",
                      height: 176,
                      backgroundColor: "#F9F9F9",
                    }}
                  >
                    <Image
                      source={{ uri: product.img }}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="cover"
                    />

                    {/* Wishlist Button */}
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        borderRadius: 20,
                        padding: 6,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2,
                      }}
                      onPress={() => toggleWishlist(product.id)}
                      activeOpacity={0.7}
                    >
                      <Ionicons
                        name={isWishlisted ? "heart" : "heart-outline"}
                        size={18}
                        color={isWishlisted ? "#FF0000" : "#444"}
                      />
                    </TouchableOpacity>

                    {/* Video Indicator */}
                    {product.type === "video" && (
                      <View
                        style={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          backgroundColor: "rgba(0,0,0,0.5)",
                          borderRadius: 12,
                          padding: 4,
                        }}
                      >
                        <Ionicons name="play" size={14} color="white" />
                      </View>
                    )}
                  </View>

                  <View style={{ padding: 12, alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#333",
                        height: 32,
                        marginBottom: 8,
                      }}
                      numberOfLines={2}
                    >
                      {product.title}
                    </Text>

                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: "rgba(206,153,0,0.4)",
                        width: "100%",
                        paddingVertical: 8,
                        borderRadius: 8,
                        backgroundColor: "#fff",
                      }}
                      onPress={() => navigateToProduct(product)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          textAlign: "center",
                          color: "#CE9900",
                          fontWeight: "bold",
                        }}
                      >
                        Price on Request
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Story Modal */}
      <StoryModal
        visible={storyVisible}
        onClose={() => setStoryVisible(false)}
        occasion={selectedOccasion}
      />
    </View>
  );
}
