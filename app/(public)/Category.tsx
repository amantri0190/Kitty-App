// import { View, Text } from 'react-native'
// import React from 'react'
// import { StatusBar } from 'expo-status-bar';
// import Header from '@/components/drawer/Header';

// export default function Category() {
//   return (
//     <View className="flex-1 bg-[#FFFDF7]">
//       <StatusBar style="dark" />
//       <Header />
//       <View className="flex items-center justify-center h-screen">
//         <Text>Category</Text>
//       </View>
//     </View>
//   );
// }

import Header from "@/components/drawer/Header";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

// Categories filter
const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "earrings", name: "Earrings" },
  { id: "rings", name: "Rings" },
  { id: "bangles", name: "Bangles" },
  { id: "necklaces", name: "Necklaces" },
];

// Hero Banners
const HERO_BANNERS = [
  {
    id: 1,
    title: "Diamond\nCollection",
    subtitle: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
  },
  {
    id: 2,
    title: "Bridal\nNecklaces",
    subtitle: "Traditional",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1200&q=80",
  },
];

// Shop by Category items
const SHOP_CATEGORIES = [
  {
    id: 1,
    name: "Elegant Rings",
    count: "840+ Designs",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
  },
  {
    id: 2,
    name: "Bracelets",
    count: "320+ Designs",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
  },
  {
    id: 3,
    name: "Pendants",
    count: "150+ Designs",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
  },
  {
    id: 4,
    name: "Stud Earrings",
    count: "560+ Designs",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
];

// Gender Collections
const GENDER_COLLECTIONS = [
  {
    id: 1,
    title: "For Him",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
  },
  {
    id: 2,
    title: "For Her",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
];

export default function Category() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(2);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Category Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            gap: 12,
          }}
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <TouchableOpacity
                key={category.id}
                onPress={() => setActiveCategory(category.id)}
                style={{
                  paddingHorizontal: 21,
                  paddingVertical: 8,
                  borderRadius: 24,
                  backgroundColor: isActive ? "#D4AF37" : "#F5F5F5",
                  shadowColor: isActive ? "#D4AF37" : "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: isActive ? 0.3 : 0.05,
                  shadowRadius: 4,
                  elevation: isActive ? 4 : 1,
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    color: isActive ? "#FFF" : "#666",
                    fontWeight: isActive ? "bold" : "600",
                    fontSize: 14,
                  }}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={{ paddingHorizontal: 16, gap: 12, marginBottom: 16 }}>
          {HERO_BANNERS.map((banner) => (
            <TouchableOpacity
              key={banner.id}
              activeOpacity={0.9}
              style={{
                height: 142,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <ImageBackground
                source={{ uri: banner.image }}
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                }}
                resizeMode="cover"
              >
                <LinearGradient
                  colors={["rgba(0,0,0,0.6)", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    paddingHorizontal: 32,
                  }}
                >
                  <Text
                    style={{
                      color: "#D4AF37",
                      fontSize: 10,
                      fontWeight: "bold",
                      letterSpacing: 2,
                      marginBottom: 4,
                    }}
                  >
                    {banner.subtitle.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "CinzelBold",
                      fontSize: 28,
                      color: "#FFF",
                      lineHeight: 34,
                    }}
                  >
                    {banner.title}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>

        {/* Shop by Category */}
        <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "CinzelBold",
                fontSize: 20,
                color: "#1a1a1a",
              }}
            >
              Shop by Category
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  color: "#D4AF37",
                  fontSize: 13,
                  fontWeight: "600",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            {SHOP_CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={{
                  width: (width - 48) / 2,
                  backgroundColor: "#F9F7F2",
                  borderRadius: 16,
                  padding: 16,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "transparent",
                }}
                activeOpacity={0.9}
              >
                <View
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                    backgroundColor: "#FFF",
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                    padding: 8,
                  }}
                >
                  <Image
                    source={{ uri: category.image }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#1a1a1a",
                    textAlign: "center",
                    marginBottom: 4,
                  }}
                >
                  {category.name}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {category.count}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* For Him / For Her */}
        <View style={{ paddingHorizontal: 16, marginBottom: 32 }}>
          <View style={{ flexDirection: "row", gap: 16 }}>
            {GENDER_COLLECTIONS.map((collection) => (
              <TouchableOpacity
                key={collection.id}
                style={{
                  flex: 1,
                  height: 320,
                  borderRadius: 20,
                  overflow: "hidden",
                }}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={{ uri: collection.image }}
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "flex-end",
                  }}
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={{
                      padding: 24,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "CinzelBold",
                        fontSize: 24,
                        color: "#FFF",
                      }}
                    >
                      {collection.title}
                    </Text>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: "rgba(212,175,55,0.9)",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons name="arrow-forward" size={18} color="#FFF" />
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Special Offer Banner */}
        <View style={{ paddingHorizontal: 16, marginBottom: -80 }}>
          <View
            style={{
              backgroundColor: "#D4AF37",
              borderRadius: 20,
              padding: 24,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              shadowColor: "#D4AF37",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
              overflow: "hidden",
            }}
          >
            {/* Decorative Circle */}
            <View
              style={{
                position: "absolute",
                right: -16,
                top: -16,
                width: 96,
                height: 96,
                borderRadius: 48,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            />

            <View style={{ flex: 1, zIndex: 1 }}>
              <Text
                style={{
                  fontFamily: "CinzelBold",
                  fontSize: 20,
                  color: "#FFF",
                  lineHeight: 24,
                }}
              >
                Making Charges
              </Text>
              <Text
                style={{
                  fontFamily: "CinzelBold",
                  fontSize: 32,
                  color: "#FFF",
                  marginTop: 4,
                }}
              >
                0% OFF
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.9)",
                  marginTop: 4,
                }}
              >
                On Gold & Diamond Designs
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.3)",
                zIndex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "#FFF",
                }}
              >
                Limited Offer
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
