import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

// Product categories/filters
const FILTERS = [
  { id: "all", label: "All" },
  { id: "gold", label: "Gold" },
  { id: "diamond", label: "Diamond" },
  { id: "platinum", label: "Platinum" },
  { id: "price", label: "Price" },
];

// Complete product list with free Unsplash images
const ALL_PRODUCTS = [
  {
    id: 1,
    title: "Diamond Solitaire Engagement Ring",
    type: "video",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    category: "diamond",
  },
  {
    id: 2,
    title: "Vintage Gold Band with Filigree",
    type: "image",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    category: "gold",
  },
  {
    id: 3,
    title: "Platinum Three-Stone Ring",
    type: "video",
    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80",
    category: "platinum",
  },
  {
    id: 4,
    title: "Rose Gold Infinity Design Ring",
    type: "image",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
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

export default function ProductsListingScreen({ navigation, route }: any) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Filter products based on active filter
  const filteredProducts =
    activeFilter === "all"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((product) => product.category === activeFilter);

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const navigateToProduct = (product: any) => {
    console.log(`Navigate to product detail: ${product.title}`);
    // navigation.navigate('ProductDetail', { product });
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFDF7" }}>
      <StatusBar style="dark" />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "#FFFDF7",
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
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
      </View>

      {/* Filter Pills */}
      <View style={{ backgroundColor: "#FFFDF7", paddingVertical: 16 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <TouchableOpacity
                key={filter.id}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                  marginRight: 10,
                  backgroundColor: isActive ? "#CE9900" : "#fff",
                  borderWidth: 1.5,
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
          paddingHorizontal: 8,
          gap: 10,
        }}
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: 80,
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          backgroundColor: "#fff",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", paddingVertical: 4 }}
          activeOpacity={0.7}
        >
          <Ionicons name="home" size={24} color="#666" />
          <Text
            style={{
              fontSize: 10,
              color: "#666",
              marginTop: 4,
              fontWeight: "500",
            }}
          >
            HOME
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", paddingVertical: 4 }}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="view-grid" size={24} color="#CE9900" />
          <Text
            style={{
              fontSize: 10,
              color: "#CE9900",
              marginTop: 4,
              fontWeight: "bold",
            }}
          >
            CATEGORY
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", paddingVertical: 4 }}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="gold" size={24} color="#666" />
          <Text
            style={{
              fontSize: 10,
              color: "#666",
              marginTop: 4,
              fontWeight: "500",
            }}
          >
            GOLD PLAN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", paddingVertical: 4 }}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="gift-outline" size={24} color="#666" />
          <Text
            style={{
              fontSize: 10,
              color: "#666",
              marginTop: 4,
              fontWeight: "500",
            }}
          >
            GIFTING
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", paddingVertical: 4 }}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="ruler" size={24} color="#666" />
          <Text
            style={{
              fontSize: 10,
              color: "#666",
              marginTop: 4,
              fontWeight: "500",
            }}
          >
            SIZER
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
