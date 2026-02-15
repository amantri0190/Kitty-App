import Header from "@/components/drawer/Header";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { default as React, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

// Most Loved Products
const MOST_LOVED = [
  {
    id: 1,
    title: "Classic Gold Studs",
    price: "₹12,500",
    image: require("../../assets/images/ring.avif"),
  },
  {
    id: 2,
    title: "Antique Floral Ring",
    price: "₹35,000",
    image: require("../../assets/images/ring.jpg"),
  },
  {
    id: 3,
    title: "Solitaire Pendant",
    price: "₹55,000",
    image: require("../../assets/images/pendant.webp"),
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFDF7" }}>
      <StatusBar style="dark" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View
          style={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 16 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F6F7F9",
              borderRadius: 28, // pill shape
              paddingHorizontal: 16,
              height: 50,
            }}
          >
            {/* Search icon */}
            <Ionicons name="search" size={22} color="#9AA1AC" />

            {/* Input */}
            <TextInput
              placeholder="Search for jewellery..."
              placeholderTextColor="#9AA1AC"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 16,
                color: "#111",
                fontWeight: "500",
              }}
            />

            {/* Camera */}
            <TouchableOpacity style={{ marginRight: 12 }}>
              <Ionicons name="camera-outline" size={22} color="#C8A046" />
            </TouchableOpacity>

            {/* Divider */}
            <View
              style={{
                width: 1,
                height: 22,
                backgroundColor: "#D6DADF",
                marginRight: 12,
              }}
            />

            {/* Mic */}
            <TouchableOpacity>
              <Ionicons name="mic-outline" size={22} color="#C8A046" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Market Rates */}
        <MarketRatesLive />
        {/* Bridal Collection Banner */}
        <BridalCarousel />
        {/* Explore Collections */}
        <ExploreCollectionsSection />
        <NewArrivalsSection />
        {/* Gifting Banner */}
        <GiftingCarousel />
        {/* Gold Savings Kitty Banner */}
        <GoldSavingKittyBanner />
        {/* Most Loved */}
        <MostLovedSection data={MOST_LOVED} />
        {/* Wrapped with Love */}
        <WrappedWithLove />
        {/* Customer Stories */}
        <View>
          <CustomerStoriesCarousel />
        </View>
      </ScrollView>
    </View>
  );
}

// ----- Wrapped with Love Section -----
const CARD_WIDTH = (width - 64) / 3;
const CARD_HEIGHT = 150;

const WRAPPED_CATEGORIES = [
  {
    id: 1,
    title: "Shop For\nGift Card",
    image:
      "https://images.unsplash.com/photo-1549888834-3ec93abae044?w=600&q=80",
  },
  {
    id: 2,
    title: "Holiday\nGifts",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&q=80",
  },
  {
    id: 3,
    title: "Gifts under\n10K",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
  {
    id: 4,
    title: "Trending\nDesigns",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
  },
  {
    id: 5,
    title: "Anniversary\nGifts",
    image:
      "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=600&q=80",
  },
  {
    id: 6,
    title: "9KT\nDiamond\nDesign",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
  },
];

const WrappedWithLove = () => {
  return (
    <View
      style={{
        backgroundColor: "#FBF5EF",
        paddingHorizontal: 16,
        paddingBottom: 10,
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 34,
          fontWeight: "700",
          color: "#5B3A6E",
          textAlign: "center",
          marginVertical: 32,
          lineHeight: 42,
          marginBottom: 50,
        }}
      >
        Wrapped with{"\n"}love!
      </Text>

      {/* Cards */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {WRAPPED_CATEGORIES.map((item, index) => {
          const columnIndex = index % 3;
          const rowIndex = Math.floor(index / 3);

          let marginTop = 0;

          // ✨ STAGGER LOGIC (MOST IMPORTANT PART)
          if (columnIndex === 1 && rowIndex === 0) marginTop = -30; // top middle up
          if (columnIndex === 1 && rowIndex === 1) marginTop = -40; // bottom middle down

          return (
            <View
              key={item.id}
              style={{
                width: CARD_WIDTH,
                marginTop,
                marginBottom: 30,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  borderRadius: 26,
                  overflow: "hidden",
                  backgroundColor: "#EFE7DF",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </TouchableOpacity>

              {/* Label */}
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  color: "#6F6F6F",
                  textAlign: "center",
                  lineHeight: 20,
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

// ----- Most Loved Section -----

type Product = {
  id: number;
  title: string;
  image: ImageSourcePropType;
};

type Props = {
  data: Product[];
};

function MostLovedSection({ data }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#EEF0FF",
        borderRadius: 24,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 24,
      }}
    >
      {/* Header */}
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Ionicons name="heart-outline" size={22} color="#5B3E75" />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: "#5B3E75",
            }}
          >
            Most Loved
          </Text>
        </View>

        <Text
          style={{
            marginTop: 6,
            fontSize: 14,
            color: "#6E6A7C",
            fontWeight: "500",
          }}
        >
          New here? Start with our most popular designs
        </Text>
      </View>

      {/* Products */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
      >
        {data.map((item) => (
          <View key={item.id} style={{ width: width * 0.38 }}>
            {/* Image Card */}
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 24,
                height: 150,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.1,
                shadowRadius: 14,
                elevation: 4,
              }}
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: "85%",
                  height: "85%",
                }}
              />
            </TouchableOpacity>

            {/* Title OUTSIDE card */}
            <Text
              numberOfLines={1}
              style={{
                marginTop: 12,
                fontSize: 14,
                flex: 1,
                paddingLeft: 8,
                fontWeight: "500",
                color: "#6B6B6B",
              }}
            >
              {item.title}
            </Text>

            {/* Price OUTSIDE card */}
            <View
              style={{
                marginTop: 10,
                borderWidth: 1.4,
                borderColor: "#C8A6E2",
                borderRadius: 14,
                paddingVertical: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#B184D6",
                }}
              >
                Price on request
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// ----- Gifting Carousel -----

const GIFTING_DATA = [
  {
    id: "1",
    image: require("../../assets/images/weddingGift.jpg"),
  },
  {
    id: "2",
    image: require("../../assets/images/weddingGift1.png"),
  },
  {
    id: "3",
    image: require("../../assets/images/weddingGift2.jpg"),
  },
];

function GiftingCarousel() {
  const CARD_WIDTH = width * 0.83;
  const CARD_HEIGHT = 200;
  const CARD_SPACING = 16;
  const SIDE_PADDING = (width - CARD_WIDTH) / 2;
  const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const loopedData = [
    GIFTING_DATA[GIFTING_DATA.length - 1],
    ...GIFTING_DATA,
    GIFTING_DATA[0],
  ];

  useEffect(() => {
    // Start at first real item
    setTimeout(() => {
      flatListRef.current?.scrollToOffset({
        offset: SNAP_INTERVAL,
        animated: false,
      });
    }, 0);
  }, []);

  const onMomentumScrollEnd = (e: any) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SNAP_INTERVAL);

    // If scrolled to fake first (last clone)
    if (index === 0) {
      flatListRef.current?.scrollToOffset({
        offset: SNAP_INTERVAL * GIFTING_DATA.length,
        animated: false,
      });
      setActiveIndex(GIFTING_DATA.length - 1);
      return;
    }

    // If scrolled to fake last (first clone)
    if (index === loopedData?.length - 1) {
      flatListRef.current?.scrollToOffset({
        offset: SNAP_INTERVAL,
        animated: false,
      });
      setActiveIndex(0);
      return;
    }

    setActiveIndex(index - 1);
  };

  return (
    <View style={{ marginBottom: 32 }}>
      {/* Header */}
      <View style={{ paddingHorizontal: 16, marginBottom: 12 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 28, fontWeight: "700", marginRight: 12 }}>
            Gifting
          </Text>
          <View
            style={{
              height: 3,
              width: 48,
              backgroundColor: "#C8A046",
              borderRadius: 2,
            }}
          />
        </View>
      </View>

      {/* Carousel */}
      <FlatList
        ref={flatListRef}
        data={loopedData}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={({ item }) => (
          <View
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              marginRight: CARD_SPACING,
              borderRadius: 24,
              overflow: "hidden",
              backgroundColor: "#EEE",
            }}
          >
            <Image
              source={item.image}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        )}
      />

      {/* Pagination */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        {GIFTING_DATA.map((_, index) => (
          <View
            key={index}
            style={{
              height: 8,
              width: activeIndex === index ? 26 : 8,
              borderRadius: 4,
              backgroundColor: activeIndex === index ? "#C8A046" : "#D8D8D8",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
}
// ----- Gold Savings Kitty Banner -----

function GoldSavingKittyBanner() {
  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
      <View
        style={{
          backgroundColor: "#191710",
          borderRadius: 16,
          padding: 20,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <View
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: "rgba(197,155,48,0.1)",
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 140,
            height: 140,
            borderRadius: 70,
            backgroundColor: "rgba(197,155,48,0.08)",
          }}
        />

        <View style={{ position: "relative", zIndex: 1 }}>
          <View
            style={{
              backgroundColor: "rgba(197,155,48,0.2)",
              alignSelf: "flex-start",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 12,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "rgba(197,155,48,0.3)",
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "700",
                color: "#C59B30",
                letterSpacing: 1,
              }}
            >
              MONTHLY PLAN{" "}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: "#FFF",
              marginBottom: 6,
              letterSpacing: 0.3,
            }}
          >
            Gold Savings Kitty
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 16,
              lineHeight: 18,
            }}
          >
            Save small amounts monthly for your{"\n"}dream jewellery purchase
          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              backgroundColor: "#FFDA03",
              borderRadius: 12,
              paddingVertical: 14,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              shadowColor: "#C59E30",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 4,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "#000",
                letterSpacing: 0.3,
              }}
            >
              Start Saving Today
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//----- New Arrivals Section-----

const NEW_ARRIVALS = [
  {
    id: "1",
    title: "Diamond Solitaire Ring",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80",
  },
  {
    id: "2",
    title: "Pearl Drop Necklace",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
  },
  {
    id: "3",
    title: "Gold Stud Earrings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80",
  },
];

function NewArrivalsSection() {
  const CARD_WIDTH = width * 0.62; // 👈 smaller like reference
  const CARD_SPACING = 16;
  const SIDE_PADDING = (width - CARD_WIDTH) / 12;

  return (
    <View style={{ marginBottom: 16 }}>
      {/* Header */}
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: "#111",
              marginRight: 12,
              fontFamily: "serif",
            }}
          >
            New Arrivals
          </Text>
          <View
            style={{
              height: 3,
              width: 48,
              backgroundColor: "#C8A046",
              borderRadius: 2,
              marginTop: 6,
            }}
          />
        </View>
      </View>

      {/* Carousel */}
      <FlatList
        data={NEW_ARRIVALS}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: SIDE_PADDING,
          paddingBottom: 8, // 👈 breathing space
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: CARD_WIDTH,
              marginRight: CARD_SPACING,
              backgroundColor: "#FBF8F3",
              borderRadius: 18,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.04,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            {/* Image */}
            <View style={{ position: "relative" }}>
              <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: 165, // 👈 reduced
                }}
              />

              {/* Wishlist */}
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: "#FFFFFF",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.12,
                  shadowRadius: 4,
                  elevation: 2,
                }}
              >
                <Ionicons name="heart-outline" size={16} color="#111" />
              </View>
            </View>

            {/* Content */}
            <View style={{ padding: 14 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#111",
                  marginBottom: 12,
                  fontFamily: "serif",
                }}
              >
                {item.title}
              </Text>

              {/* CTA */}
              <View
                style={{
                  borderWidth: 1.4,
                  borderColor: "#C8A046",
                  borderRadius: 24,
                  paddingVertical: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: "#C8A046",
                    fontFamily: "serif",
                  }}
                >
                  Price on Request
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// ----- Customer Stories Carousel -----

const CUSTOMER_STORIES = [
  {
    id: 1,
    name: "Sharmishtha",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    review:
      "My husband knew I was obsessed with diamonds. He surprised me with this stunning Mangalsutra",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    review:
      "The bridal necklace set exceeded all my expectations. Perfect craftsmanship and beautiful design!",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Mehta",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    review:
      "Bought gold earrings for my daughter. The quality is outstanding and the service was excellent",
    rating: 5,
  },
  {
    id: 4,
    name: "Kavita Patel",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    review:
      "Amazing collection! I purchased a diamond ring and the experience was wonderful from start to finish",
    rating: 5,
  },
];
const CustomerStoriesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  return (
    <View
      style={{
        backgroundColor: "#F8F7FC",
        paddingBottom: 24,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          color: "#4A4458",
          textAlign: "center",
          letterSpacing: 0.3,
          marginTop: 10,
        }}
      >
        Customer Stories
      </Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {CUSTOMER_STORIES.map((story) => (
          <View
            key={story.id}
            style={{
              width: width,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "#F8F7FC",
                borderRadius: 20,
                padding: 12,
                alignItems: "center",
                minHeight: 340,
                justifyContent: "center",
                marginTop: -20,
              }}
            >
              {/* Profile Image */}
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  overflow: "hidden",
                  marginBottom: 16,
                  borderWidth: 3,
                  borderColor: "#FFF",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Image
                  source={{ uri: story.image }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>

              {/* Star Rating */}
              <View
                style={{
                  flexDirection: "row",
                  gap: 6,
                  marginBottom: 16,
                }}
              >
                {[...Array(5)].map((_, index) => (
                  <Ionicons key={index} name="star" size={24} color="#FDB022" />
                ))}
              </View>

              {/* Name */}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: "#4A4458",
                  marginBottom: 20,
                  letterSpacing: 0.3,
                }}
              >
                {story.name}
              </Text>

              {/* Review Text */}
              <Text
                style={{
                  fontSize: 15,
                  color: "#7A7588",
                  textAlign: "center",
                  lineHeight: 24,
                  fontWeight: "500",
                  paddingHorizontal: 8,
                }}
              >
                {story.review}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Pagination Dots */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          marginTop: 24,
        }}
      >
        {CUSTOMER_STORIES.map((_, index) => (
          <View
            key={index}
            style={{
              width: index === activeIndex ? 32 : 10,
              height: 6,
              borderRadius: 3,
              backgroundColor: index === activeIndex ? "#7C6BA6" : "#D8D3E3",
            }}
          />
        ))}
      </View>
    </View>
  );
};

// --- Explore Collections ----

const EXPLORECOLLECTIONS = [
  {
    id: 1,
    title: "Earrings",
    image: require("../../assets/images/collection1.png"),
  },
  {
    id: 2,
    title: "Rings",
    image: require("../../assets/images/collection2.png"),
  },
  {
    id: 3,
    title: "Necklace",
    image: require("../../assets/images/collection3.png"),
  },
  {
    id: 4,
    title: "Bangles",
    image: require("../../assets/images/collection4.png"),
  },
];

function ExploreCollectionsSection() {
  const ITEM_SIZE = (width - 64) / 4; // exact spacing like image

  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 28 }}>
      {/* Header */}
      <View style={{ marginBottom: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color: "#111",
              fontFamily: "serif",
              marginRight: 12,
            }}
          >
            Explore Collections
          </Text>
          <View
            style={{
              height: 3,
              width: 64,
              backgroundColor: "#C8A046",
              borderRadius: 2,
              marginTop: 6,
            }}
          />
        </View>
      </View>

      {/* Collections Row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {EXPLORECOLLECTIONS.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            style={{ alignItems: "center", width: ITEM_SIZE }}
          >
            {/* Image Card */}
            <View
              style={{
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                borderRadius: 18,
                backgroundColor: "#F3F0EB",
                overflow: "hidden",
                marginBottom: 10,
              }}
            >
              <Image
                source={item.image}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>

            {/* Label */}
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#111",
                textAlign: "center",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// ----- Bridal Collection Carousel -----
const BRIDAL_SLIDES = [
  {
    id: "1",
    title: "Bridal Collection",
    subtitle: "Up to 30% Off",

    image: require("../../assets/images/BridalCollection1.jpg"),
  },
  {
    id: "2",
    title: "Wedding Essentials",
    subtitle: "Timeless Elegance",
    image: require("../../assets/images/BridalCollection2.jpg"),
  },
  {
    id: "3",
    title: "Heirloom Jewellery",
    subtitle: "Crafted for Brides",
    image: require("../../assets/images/BridalCollection3.webp"),
  },
];

function BridalCarousel() {
  const CARD_HEIGHT = 175;
  const CARD_WIDTH = width; // FULL width page
  const INTERVAL = 3000;

  const data = [
    BRIDAL_SLIDES[BRIDAL_SLIDES.length - 1],
    ...BRIDAL_SLIDES,
    BRIDAL_SLIDES[0],
  ];

  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndex = useRef(1);

  useEffect(() => {
    // Start from first real slide
    requestAnimationFrame(() => {
      flatListRef.current?.scrollToOffset({
        offset: CARD_WIDTH,
        animated: false,
      });
    });

    const timer = setInterval(() => {
      currentIndex.current += 1;
      flatListRef.current?.scrollToOffset({
        offset: currentIndex.current * CARD_WIDTH,
        animated: true,
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const onMomentumScrollEnd = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);

    // Jump from fake last → real last
    if (index === 0) {
      flatListRef.current?.scrollToOffset({
        offset: BRIDAL_SLIDES.length * CARD_WIDTH,
        animated: false,
      });
      currentIndex.current = BRIDAL_SLIDES.length;
      setActiveIndex(BRIDAL_SLIDES.length - 1);
      return;
    }

    // Jump from fake first → real first
    if (index === data.length - 1) {
      flatListRef.current?.scrollToOffset({
        offset: CARD_WIDTH,
        animated: false,
      });
      currentIndex.current = 1;
      setActiveIndex(0);
      return;
    }

    currentIndex.current = index;
    setActiveIndex(index - 1);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        bounces={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width: CARD_WIDTH }}>
            <View
              style={{
                marginHorizontal: 16, // 👈 visual padding, not layout padding
                height: CARD_HEIGHT,
                borderRadius: 24,
                overflow: "hidden",
                backgroundColor: "#EEE",
              }}
            >
              <ImageBackground
                source={item.image}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 24,
                    backgroundColor: "rgba(0,0,0,0.35)",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "600",
                      color: "#FFF",
                      fontFamily: "serif",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: "500",
                    }}
                  >
                    {item.subtitle}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        )}
      />

      {/* Pagination */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {BRIDAL_SLIDES.map((_, index) => (
          <View
            key={index}
            style={{
              height: 8,
              width: activeIndex === index ? 18 : 8,
              borderRadius: 4,
              backgroundColor: activeIndex === index ? "#C8A046" : "#D6D6D6",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
}

// ----- MarketRatesLive Card -----

import { ActivityIndicator } from "react-native";

const INR_RATE = 92.1;
const GRAMS_PER_OUNCE = 31.1034768;

function MarketRatesLive() {
  const [loading, setLoading] = useState(true);

  const [goldPrice, setGoldPrice] = useState("—");
  const [silverPrice, setSilverPrice] = useState("—");

  const [goldChange, setGoldChange] = useState("+0.00%");
  const [silverChange, setSilverChange] = useState("+0.00%");

  const [goldUp, setGoldUp] = useState(true);
  const [silverUp, setSilverUp] = useState(true);

  const [prevGold, setPrevGold] = useState<number | null>(null);
  const [prevSilver, setPrevSilver] = useState<number | null>(null);

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

      const extract = (data: any) => {
        const spread = data[0].spreadProfilePrices[0];
        const mid = (spread.ask + spread.bid) / 2;
        return (mid / GRAMS_PER_OUNCE) * 10 * INR_RATE;
      };

      const gold = extract(goldJson);
      const silver = extract(silverJson);

      if (prevGold !== null) {
        const diff = ((gold - prevGold) / prevGold) * 100;
        setGoldChange(`${diff >= 0 ? "+" : ""}${diff.toFixed(2)}%`);
        setGoldUp(diff >= 0);
      }

      if (prevSilver !== null) {
        const diff = ((silver - prevSilver) / prevSilver) * 100;
        setSilverChange(`${diff >= 0 ? "+" : ""}${diff.toFixed(2)}%`);
        setSilverUp(diff >= 0);
      }

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

      setPrevGold(gold);
      setPrevSilver(silver);
      setLoading(false);
    } catch (e) {
      console.error("Price fetch failed", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const id = setInterval(fetchPrices, 200);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#191710" }}>
          Market Rates
        </Text>

        <Text style={{ fontSize: 12, color: "#22C55E", fontWeight: "600" }}>
          Live
        </Text>
      </View>

      {/* Cards */}
      <View style={{ flexDirection: "row", gap: 12 }}>
        {loading ? (
          <View
            style={{
              flex: 1,
              height: 96,
              borderRadius: 12,
              backgroundColor: "#FFF",
              borderWidth: 1,
              borderColor: "#F0EDE6",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="small" color="#9CA3AF" />
          </View>
        ) : (
          <>
            <RateCard
              label="Gold (10 GM)"
              price={goldPrice}
              change={goldChange}
              isUp={goldUp}
            />

            <RateCard
              label="Silver (10 GM)"
              price={silverPrice}
              change={silverChange}
              isUp={silverUp}
            />
          </>
        )}
      </View>
    </View>
  );
}

function RateCard({
  label,
  price,
  change,
  isUp,
}: {
  label: string;
  price: string;
  change: string;
  isUp: boolean;
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: "#F0EDE6",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 11,
          color: "#8E7F57",
          fontWeight: "600",
          marginBottom: 6,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "#191710",
          marginBottom: 4,
        }}
      >
        {price}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: isUp ? "#10B981" : "#EF4444",
        }}
      >
        {change}
      </Text>
    </View>
  );
}
