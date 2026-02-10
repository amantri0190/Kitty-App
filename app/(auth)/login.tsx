import { useAuth } from "@/context/AuthContext";
import { checkUserExists, sendOtp } from "@/lib/auth";
import { googleSignIn } from "@/lib/google";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import Svg, { Path } from "react-native-svg";

export default function LoginScreen() {
  const { login } = useAuth();

  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [countryFlag, setCountryFlag] = useState("🇮🇳");
  const [selectedCountry, setSelectedCountry] = useState("IN");

  const validatePhone = (phone: string) => {
    if (selectedCountry === "IN") {
      return /^[6-9]\d{9}$/.test(phone);
    }
    return phone.length >= 10;
  };

  const handleSkip = () => {
    router.replace("/(public)");
  };

  const handleContinue = async () => {
    if (!validatePhone(mobile)) {
      setError("Enter a valid mobile number");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await checkUserExists(mobile);

      if (!res.exists) {
        router.push({ pathname: "/signup", params: { mobile } });
        return;
      }

      await sendOtp(mobile);

      router.push({
        pathname: "/otp",
        params: { mobile, mode: "login" },
      });
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await googleSignIn();

      // Login to auth context
      await login(res.userId);

      // Navigate to tabs
      router.replace("/(public)");
    } catch (e: any) {
      setError(e.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-[#F5F3EE]">
      <StatusBar barStyle="light-content" />

      {/* HERO IMAGE */}
      <View className="h-[45%] overflow-hidden relative">
        <Image
          source={require("@/assets/images/jewelry-hero-2.jpg")}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Subtle gradient */}
        <View className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />

        {/* Skip Button */}
        <TouchableOpacity
          onPress={handleSkip}
          className="absolute px-3 py-1 rounded-full bg-white/60 top-8 right-6"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text className="text-[12px] font-semibold text-[#1F1F1F]">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* CONTENT CARD */}
      <View className="flex-1 bg-[#FFFDF8] rounded-t-[32px] -mt-20 px-6 pt-7 shadow-2xl">
        {/* Title */}
        <Text className="text-[26px] font-bold text-[#1F1F1F] mb-1 tracking-tight">
          Login / Sign Up
        </Text>

        {/* Subtitle */}
        <Text className="text-[15px] text-[#8B8B8B] mb-6 leading-5">
          Enter your mobile number to get started
        </Text>

        {/* MOBILE INPUT WITH COUNTRY CODE */}
        <View className="flex-row items-center border-b border-[#E5E5E5] rounded-xl px-4 py-[14px] mb-3 bg-white">
          {/* Country Code Selector */}
          <TouchableOpacity
            onPress={() => setShowCountryPicker(true)}
            className="flex-row items-center mr-3 pr-3 border-r border-[#E5E5E5]"
          >
            <Text className="text-[20px] mr-1">{countryFlag}</Text>
            <Text className="text-[16px] font-medium text-[#1F1F1F]">
              {countryCode}
            </Text>
            <Text className="text-[16px] text-[#8B8B8B] ml-1">▼</Text>
          </TouchableOpacity>

          {/* Phone Number Input */}
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#BEBEBE"
            keyboardType="number-pad"
            maxLength={10}
            value={mobile}
            onChangeText={(t) => {
              setMobile(t.replace(/[^0-9]/g, ""));
              setError("");
            }}
            className="flex-1 text-[16px] text-[#1F1F1F]"
            style={{ paddingVertical: 0 }}
          />
        </View>

        {/* Error Message */}
        {error ? (
          <Text className="text-[13px] text-red-500 mb-3 ml-1">{error}</Text>
        ) : null}

        {/* REQUEST OTP BUTTON */}
        <TouchableOpacity
          onPress={handleContinue}
          disabled={loading || !mobile}
          className={`h-[56px] rounded-xl items-center justify-center mb-4 ${
            loading || !mobile ? "bg-[#E5D5A8]" : "bg-[#E1BB26]"
          }`}
        >
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text className="text-[17px] font-bold text-black tracking-wide">
              Request OTP
            </Text>
          )}
        </TouchableOpacity>

        {/* Terms & Privacy */}
        <Text className="text-[12px] text-center text-[#8B8B8B] mb-6 px-4 leading-[18px]">
          By continuing, I agree to{" "}
          <Text className="underline underline-offset-2">Terms of use</Text> &{" "}
          <Text className="underline underline-offset-2">Privacy Policy</Text>
        </Text>

        {/* Divider */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-[1px] bg-[#E5E5E5]" />
          <Text className="px-4 text-[13px] text-[#ABABAB] tracking-[1.5px] font-medium">
            OR CONTINUE WITH
          </Text>
          <View className="flex-1 h-[1px] bg-[#E5E5E5]" />
        </View>

        <View className="flex items-center justify-center">
          <TouchableOpacity
            onPress={handleGoogleSignIn}
            disabled={loading}
            className="h-[48px] w-44 rounded-xl border border-[#D4AF24] bg-[#FFFDF8] items-center justify-center flex-row"
          >
            <View className="mr-3">
              <GoogleIcon />
            </View>
            <Text className="text-[16px] font-semibold text-[#1F1F1F]">
              GOOGLE
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Country Code Picker Modal */}
      <CountryPicker
        show={showCountryPicker}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setCountryFlag(item.flag);
          setSelectedCountry(item.code);
          setShowCountryPicker(false);
        }}
        lang="en"
        onBackdropPress={() => setShowCountryPicker(false)}
        style={{
          modal: {
            height: 500,
            backgroundColor: "#FFFDF8",
          },
          backdrop: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          textInput: {
            height: 50,
            borderRadius: 12,
            borderColor: "#E5E5E5",
            paddingLeft: 16,
          },
          countryButtonStyles: {
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: "#F0F0F0",
          },
        }}
        popularCountries={["IN", "US", "GB", "AE", "CA"]}
      />
    </View>
  );
}

// Google Icon Component
function GoogleIcon() {
  return (
    <View className="w-6 h-6">
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <Path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <Path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <Path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </Svg>
    </View>
  );
}
