// import Header from "@/components/drawer/Header";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Text, View } from "react-native";

// export default function GoldPlan() {
//   return (
//     <View className="flex-1 bg-[#FFFDF7]">
//       <StatusBar style="dark" />
//       <Header />
//       <View className="flex items-center justify-center h-screen">
//         <Text>GoldPlan</Text>
//       </View>
//     </View>
//   );
// }

import Header from "@/components/drawer/Header";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const PLAN_OPTIONS = [
  { id: 1, label: "STARTER", amount: 2000, selected: false },
  { id: 2, label: "STANDARD", amount: 5000, selected: true, popular: true },
  { id: 3, label: "PREMIUM", amount: 10000, selected: false },
  { id: 4, label: "ROYAL", amount: 20000, selected: false },
];

export default function GoldPlan() {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("5000");

  const contribution = selectedAmount * 11;
  const bonus = selectedAmount;
  const maturityValue = contribution + bonus;

  const formatCurrency = (value: any) => {
    return value.toLocaleString("en-IN");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FAF6F0" }}>
      <StatusBar style="dark" />
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Hero Banner */}
        <View
          style={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 16 }}
        >
          <View
            style={{
              height: 200,
              borderRadius: 20,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 12,
              elevation: 6,
            }}
          >
            <ImageBackground
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBT9W7u3ycuJiJDwnb6LgvL6FDffTRUorRqVB9VCobAZQq6suXgWVrIwmLgiROdkyoM-i5pQLbUKCwxQ9FBvdstcUFBE-429riOLSlWIp8P4YaU_DxvZDagvQ3gaS98PppPxQTpZppNs18vs4Tr52jprdBY44xw16FLILjOXnHkMvBor-8dXDOpR7uifeA_h_M6ZmEPvlT3n0t9AxEmGJVENyWUqnK_QX49NIANKouXEhO5tRaJPyVfghLdoEp4c1lZ3pal6_vlxB0",
              }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            >
              <LinearGradient
                colors={[
                  "rgba(0,0,0,0.75)",
                  "rgba(139,69,19,0.4)",
                  "transparent",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  padding: 24,
                }}
              >
                {/* Golden Future Badge */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    backgroundColor: "rgba(197,155,48,0.9)",
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 20,
                    marginBottom: 2,
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  <Ionicons
                    name="shield-checkmark"
                    size={14}
                    color="#FFF"
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 10,
                      fontWeight: "700",
                      letterSpacing: 1.2,
                    }}
                  >
                    GOLDEN FUTURE
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: "700",
                    color: "#FFF",
                    marginBottom: 2,
                    letterSpacing: 0.3,
                  }}
                >
                  Secure Your Shine
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: "500",
                  }}
                >
                  Save monthly, earn a bonus, shine forever.
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </View>

        {/* How it Works */}
        <View
          style={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 24 }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#191710",
              marginBottom: 24,
              letterSpacing: 0.3,
            }}
          >
            How it works
          </Text>

          {/* Timeline */}
          <View style={{ position: "relative" }}>
            {/* Vertical Line */}
            <View
              style={{
                position: "absolute",
                left: 27,
                top: 16,
                bottom: 16,
                width: 2,
                backgroundColor: "#E5D4B5",
              }}
            />

            {/* Step 1 */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 32,
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: "#FFF",
                  borderWidth: 2,
                  borderColor: "rgba(197,155,48,0.3)",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  zIndex: 1,
                }}
              >
                <Ionicons name="diamond-outline" size={24} color="#C59B30" />
              </View>
              <View style={{ flex: 1, paddingTop: 6 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#191710",
                    marginBottom: 4,
                  }}
                >
                  Select Plan
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#8E7F57",
                    lineHeight: 20,
                  }}
                >
                  Choose a monthly installment amount that fits your budget.
                </Text>
              </View>
            </View>

            {/* Step 2 */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 32,
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: "#FFF",
                  borderWidth: 2,
                  borderColor: "rgba(197,155,48,0.3)",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  zIndex: 1,
                }}
              >
                <Ionicons name="calendar-outline" size={24} color="#C59B30" />
              </View>
              <View style={{ flex: 1, paddingTop: 6 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#191710",
                    marginBottom: 4,
                  }}
                >
                  11 Monthly Payments
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#8E7F57",
                    lineHeight: 20,
                  }}
                >
                  Make secure payments for 11 months via UPI or Card.
                </Text>
              </View>
            </View>

            {/* Step 3 */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 32,
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: "#FFF",
                  borderWidth: 2,
                  borderColor: "rgba(197,155,48,0.3)",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  zIndex: 1,
                }}
              >
                <Ionicons name="wallet-outline" size={24} color="#C59B30" />
              </View>
              <View style={{ flex: 1, paddingTop: 6 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#191710",
                    marginBottom: 4,
                  }}
                >
                  We Pay the 12th
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#8E7F57",
                    lineHeight: 20,
                  }}
                >
                  Get 100% of one month's installment as a bonus from us.
                </Text>
              </View>
            </View>

            {/* Step 4 */}
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: "#C59B30",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  shadowColor: "#C59B30",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 4,
                  zIndex: 1,
                  transform: [{ scale: 1.1 }],
                }}
              >
                <Ionicons name="bag-handle-outline" size={24} color="#FFF" />
              </View>
              <View style={{ flex: 1, paddingTop: 6 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#191710",
                    marginBottom: 4,
                  }}
                >
                  Purchase Jewellery
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#8E7F57",
                    lineHeight: 20,
                  }}
                >
                  Redeem your total maturity value for your favorite gold or
                  diamonds.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Choose Monthly Savings Section */}
        <View
          style={{
            backgroundColor: "#FFF",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingTop: 32,
            paddingBottom: 24,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.05,
            shadowRadius: 12,
            elevation: 5,
          }}
        >
          <View style={{ paddingHorizontal: 16 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#191710",
                marginBottom: 10,
                paddingHorizontal: 8,
                letterSpacing: 0.3,
              }}
            >
              Choose Monthly Savings
            </Text>

            {/* Plan Cards */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 8,
                paddingBottom: 10,
                paddingTop: 16,
                gap: 16,
              }}
            >
              {PLAN_OPTIONS.map((plan) => {
                const isSelected = selectedAmount === plan.amount;
                const isPopular = plan.popular;

                return (
                  <TouchableOpacity
                    key={plan.id}
                    onPress={() => {
                      setSelectedAmount(plan.amount);
                      setCustomAmount(plan.amount.toString());
                    }}
                    activeOpacity={0.85}
                    style={{
                      width: 150,
                      padding: 18,
                      borderRadius: 18,
                      backgroundColor: "#FAF6F0",
                      borderWidth: isSelected ? 2.5 : 1,
                      borderColor: isSelected ? "#C59B30" : "#E6E6E6",
                      shadowColor: isSelected ? "#C59B30" : "#000",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: isSelected ? 0.18 : 0.06,
                      shadowRadius: isSelected ? 12 : 6,
                      elevation: isSelected ? 4 : 2,
                      position: "relative",
                    }}
                  >
                    {/* POPULAR BADGE */}
                    {isPopular && (
                      <View
                        style={{
                          position: "absolute",
                          top: -14,
                          left: 0,
                          right: 0,
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#C59B30",
                            paddingHorizontal: 14,
                            paddingVertical: 4,
                            borderRadius: 999,
                          }}
                        >
                          <Text
                            style={{
                              color: "#FFF",
                              fontSize: 9,
                              fontWeight: "700",
                              letterSpacing: 1.2,
                            }}
                          >
                            POPULAR
                          </Text>
                        </View>
                      </View>
                    )}

                    {/* RADIO / CHECK ICON */}
                    <View
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 17,
                        backgroundColor: isSelected ? "#C59B30" : "#E3E3E3",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 14,
                      }}
                    >
                      {isSelected ? (
                        <Ionicons name="checkmark" size={18} color="#FFF" />
                      ) : (
                        <View
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: "#9CA3AF",
                          }}
                        />
                      )}
                    </View>

                    {/* LABEL */}
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: "700",
                        color: "#8E7F57",
                        letterSpacing: 1.4,
                        marginBottom: 6,
                      }}
                    >
                      {plan.label.toUpperCase()}
                    </Text>

                    {/* AMOUNT */}
                    <Text
                      style={{
                        fontSize: 26,
                        fontWeight: "700",
                        color: "#191710",
                      }}
                    >
                      ₹{formatCurrency(plan.amount)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Custom Amount */}
            <View style={{ paddingHorizontal: 8, marginTop: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "700",
                    color: "#8E7F57",
                    letterSpacing: 1.5,
                  }}
                >
                  SET CUSTOM AMOUNT
                </Text>
                <View
                  style={{
                    backgroundColor: "rgba(197,155,48,0.1)",
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9,
                      fontWeight: "700",
                      color: "#C59B30",
                      letterSpacing: 0.8,
                    }}
                  >
                    FLEXIBLE
                  </Text>
                </View>
              </View>

              {/* Input Card */}
              <View
                style={{
                  backgroundColor: "#FAF6F0",
                  borderRadius: 16,
                  padding: 16,
                  borderWidth: 2,
                  borderColor: "rgba(197,155,48,0.3)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 2,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Left Border Accent */}
                <View
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    backgroundColor: "#C59B30",
                  }}
                />

                {/* Amount Input */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    marginBottom: 16,
                    paddingLeft: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 32,
                      color: "#8E7F57",
                      fontWeight: "600",
                      marginBottom: 4,
                    }}
                  >
                    ₹
                  </Text>
                  <TextInput
                    value={customAmount}
                    onChangeText={(text) => {
                      setCustomAmount(text);
                      const numValue = parseInt(text) || 0;
                      if (numValue >= 1000 && numValue <= 50000) {
                        setSelectedAmount(numValue);
                      }
                    }}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor="#CCC"
                    style={{
                      flex: 1,
                      fontSize: 40,
                      fontWeight: "700",
                      color: "#191710",
                      padding: 0,
                      borderBottomWidth: 2,
                      borderBottomColor: "#E5E5E5",
                      marginLeft: 8,
                      paddingBottom: 4,
                    }}
                  />
                </View>

                {/* Slider */}
                <Slider
                  value={selectedAmount}
                  onValueChange={(value) => {
                    setSelectedAmount(value);
                    setCustomAmount(value.toString());
                  }}
                  minimumValue={1000}
                  maximumValue={50000}
                  step={500}
                  minimumTrackTintColor="#C59B30"
                  maximumTrackTintColor="#E5E5E5"
                  thumbTintColor="#C59B30"
                  style={{ width: "100%", height: 40 }}
                />

                {/* Min/Max Labels */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#8E7F57",
                      fontWeight: "600",
                      letterSpacing: 0.8,
                    }}
                  >
                    MIN ₹1K
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#8E7F57",
                      fontWeight: "600",
                      letterSpacing: 0.8,
                    }}
                  >
                    MAX ₹50K
                  </Text>
                </View>
              </View>
            </View>

            {/* Summary Card */}
            <View
              style={{
                marginHorizontal: 8,
                marginTop: 24,
                backgroundColor: "#FAF6F0",
                borderRadius: 16,
                padding: 20,
                borderWidth: 1,
                borderColor: "rgba(197,155,48,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative Glow */}
              <View
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 128,
                  height: 128,
                  borderRadius: 64,
                  backgroundColor: "rgba(197,155,48,0.08)",
                }}
              />

              <View style={{ position: "relative", zIndex: 1 }}>
                {/* Your Contribution */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <Text style={{ fontSize: 14, color: "#8E7F57" }}>
                    Your Contribution (11mo)
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color: "#191710",
                    }}
                  >
                    ₹{formatCurrency(contribution)}
                  </Text>
                </View>

                {/* Bonus */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(197,155,48,0.08)",
                    padding: 12,
                    borderRadius: 12,
                    marginBottom: 16,
                    borderWidth: 1,
                    borderColor: "rgba(197,155,48,0.15)",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name="star"
                      size={16}
                      color="#C59B30"
                      style={{ marginRight: 6 }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#C59B30",
                      }}
                    >
                      Bonus (1 Month)
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#C59B30",
                    }}
                  >
                    + ₹{formatCurrency(bonus)}
                  </Text>
                </View>

                {/* Divider */}
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#E5E5E5",
                    marginBottom: 16,
                    borderStyle: "dashed",
                  }}
                />

                {/* Maturity Value */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#8E7F57",
                        letterSpacing: 1.2,
                        marginBottom: 4,
                        fontWeight: "600",
                      }}
                    >
                      MATURITY VALUE
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "#191710",
                        opacity: 0.7,
                        fontWeight: "500",
                      }}
                    >
                      Gold or Diamond
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 32,
                      fontWeight: "700",
                      color: "#C59B30",
                    }}
                  >
                    ₹{formatCurrency(maturityValue)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom CTA */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFF",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        {/* Security Badge */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <Ionicons name="lock-closed" size={12} color="#8E7F57" />
          <Text
            style={{
              fontSize: 10,
              color: "#8E7F57",
              letterSpacing: 1.2,
              fontWeight: "600",
              marginLeft: 6,
            }}
          >
            100% SECURE & BANK GRADE SECURITY
          </Text>
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            backgroundColor: "#C59B30",
            borderRadius: 16,
            paddingVertical: 18,
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            shadowColor: "#C59B30",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.25,
            shadowRadius: 12,
            elevation: 6,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#FFF",
              letterSpacing: 0.3,
            }}
          >
            Start Saving ₹{formatCurrency(selectedAmount)}
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
