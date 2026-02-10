// import { verifyOtp } from "@/lib/auth";
// import { router, useLocalSearchParams } from "expo-router";
// import { useRef, useState } from "react";
// import {
//   ActivityIndicator,
//   Pressable,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// import { useAuth } from "@/context/AuthContext";
// import { isValidOtp } from "@/lib/google";

// export default function OtpScreen() {
//   const { mobile, mode } = useLocalSearchParams<{
//     mobile: string;
//     mode: "login" | "signup";
//   }>();

//   const { login } = useAuth();

//   const inputRef = useRef<TextInput>(null);
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleVerify = async () => {
//     if (!isValidOtp(otp)) {
//       setError("Enter 4-digit OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await verifyOtp(mobile, otp);

//       await login(res.userId, res.hasUsername);

//       if (res.hasUsername) {
//         router.replace("/(tabs)");
//       } else {
//         router.replace("/username");
//       }
//     } catch (e: any) {
//       setError(e.message || "Invalid OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View className="justify-center flex-1 px-6 bg-white">
//       <Text className="mb-2 text-3xl font-bold text-black">Verify OTP</Text>

//       <Text className="mb-8 text-gray-500">
//         Enter the 4-digit code sent to +91 {mobile}
//       </Text>

//       <TextInput
//         ref={inputRef}
//         autoFocus
//         keyboardType="number-pad"
//         maxLength={4}
//         value={otp}
//         onChangeText={(t) => {
//           setOtp(t.replace(/[^0-9]/g, ""));
//           setError("");
//         }}
//         className="py-4 mb-4 text-2xl tracking-widest text-center border border-gray-300 rounded-xl"
//       />

//       {error ? <Text className="mb-3 text-red-500">{error}</Text> : null}

//       <Pressable
//         onPress={handleVerify}
//         disabled={loading}
//         className={`h-14 rounded-xl items-center justify-center ${
//           loading ? "bg-gray-300" : "bg-black"
//         }`}
//       >
//         {loading ? (
//           <ActivityIndicator color="white" />
//         ) : (
//           <Text className="text-lg font-semibold text-white">
//             Verify & Continue
//           </Text>
//         )}
//       </Pressable>
//     </View>
//   );
// }

// import { useAuth } from "@/context/AuthContext";
// import { verifyOtp } from "@/lib/auth";
// import { isValidOtp } from "@/lib/google";
// import { router, useLocalSearchParams } from "expo-router";
// import { useState } from "react";
// import {
//   ActivityIndicator,
//   Pressable,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// export default function OtpScreen() {
//   const { mobile } = useLocalSearchParams<{ mobile: string }>();
//   const { login } = useAuth();

//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleVerify = async () => {
//     if (!isValidOtp(otp)) return;

//     setLoading(true);
//     const res = await verifyOtp(mobile, otp);
//     await login(res.userId, res.hasUsername);

//     router.replace(res.hasUsername ? "/(tabs)" : "/username");
//   };

//   return (
//     <View className="flex-1 bg-[#F5F3EE]">
//       {/* IMAGE */}
//       <View className="h-[45%] bg-black">
//         <Text className="absolute text-xl text-white top-14 left-6">‹</Text>
//       </View>

//       {/* CARD */}
//       <View className="flex-1 bg-[#FFFDF8] rounded-t-[32px] px-6 pt-8 -mt-8">
//         <Text className="mb-2 text-2xl font-bold text-center">
//           Verify Mobile
//         </Text>

//         <Text className="text-center text-[#8B8B8B] mb-6">
//           Enter the 4-digit code sent to +91 XXXXX XXXXX
//         </Text>

//         {/* OTP BOXES */}
//         <View className="flex-row justify-between mb-6">
//           {[0, 1, 2, 3].map((i) => (
//             <View
//               key={i}
//               className={`w-14 h-14 rounded-xl border-2 items-center justify-center ${
//                 otp.length === i ? "border-[#D4AF37]" : "border-[#E5E5E5]"
//               }`}
//             >
//               <Text className="text-xl">{otp[i] ?? ""}</Text>
//             </View>
//           ))}
//         </View>

//         {/* HIDDEN INPUT */}
//         <TextInput
//           autoFocus
//           keyboardType="number-pad"
//           maxLength={4}
//           value={otp}
//           onChangeText={(t) => setOtp(t.replace(/[^0-9]/g, ""))}
//           className="absolute opacity-0"
//         />

//         <Text className="text-center text-[#8B8B8B] mb-6">
//           Resend code in <Text className="text-[#D4AF37]">00:45</Text>
//         </Text>

//         {/* VERIFY BUTTON */}
//         <Pressable
//           onPress={handleVerify}
//           disabled={loading}
//           className="h-14 rounded-xl bg-[#D4AF37] items-center justify-center"
//         >
//           {loading ? (
//             <ActivityIndicator color="#000" />
//           ) : (
//             <Text className="text-lg font-semibold text-black">
//               Verify & Proceed
//             </Text>
//           )}
//         </Pressable>

//         <Text className="text-center text-[#8B8B8B] mt-4">
//           Change Phone Number
//         </Text>
//       </View>
//     </View>
//   );
// }

// import { useAuth } from "@/context/AuthContext";
// import { verifyOtp } from "@/lib/auth";
// import { isValidOtp } from "@/lib/google";
// import { router, useLocalSearchParams } from "expo-router";
// import { useEffect, useRef, useState } from "react";
// import {
//   ActivityIndicator,
//   Image,
//   Platform,
//   Pressable,
//   StatusBar,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// export default function OtpScreen() {
//   const { mobile } = useLocalSearchParams<{ mobile: string }>();
//   const { login } = useAuth();

//   const inputRefs = useRef<(TextInput | null)[]>([]);
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [timer, setTimer] = useState(45);

//   // Timer countdown
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [timer]);

//   const handleOtpChange = (value: string, index: number) => {
//     // Only allow numbers
//     if (value && !/^\d$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError("");

//     // Auto-focus next input
//     if (value && index < 3) {
//       inputRefs.current[index + 1]?.focus();
//     }

//     // Auto-verify when all 4 digits are entered
//     if (value && index === 3 && newOtp.every((digit) => digit)) {
//       handleVerify(newOtp.join(""));
//     }
//   };

//   const handleKeyPress = (e: any, index: number) => {
//     // Focus previous input on backspace
//     if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleVerify = async (otpValue?: string) => {
//     const otpString = otpValue || otp.join("");

//     if (!isValidOtp(otpString)) {
//       setError("Please enter a valid 4-digit OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await verifyOtp(mobile, otpString);
//       await login(res.userId, res.hasUsername);

//       router.replace(res.hasUsername ? "/(tabs)" : "/username");
//     } catch (e: any) {
//       setError(e.message || "Invalid OTP");
//       setOtp(["", "", "", ""]);
//       inputRefs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResend = async () => {
//     if (timer > 0) return;

//     // Reset timer and resend OTP logic here
//     setTimer(45);
//     setOtp(["", "", "", ""]);
//     setError("");
//     inputRefs.current[0]?.focus();

//     // Call your sendOtp function here
//     // await sendOtp(mobile);
//   };

//   const handleBack = () => {
//     router.back();
//   };

//   const formatTimer = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   const maskMobile = (mobile: string) => {
//     if (!mobile || mobile.length < 10) return "XXXXX XXXXX";
//     return `${mobile.substring(0, 5)} ${mobile.substring(5)}`;
//   };

//   return (
//     <View className="flex-1">
//       <StatusBar barStyle="light-content" />

//       {/* HERO IMAGE SECTION */}
//       <View className="relative h-[45%]">
//         <Image
//           source={require("@/assets/images/jewelry-hero.jpg")}
//           className="w-full h-full"
//           resizeMode="cover"
//         />

//         {/* Gradient overlay for better text visibility */}
//         <View className="absolute inset-0 bg-black/20" />

//         {/* Back Button */}
//         {/* <Pressable
//           onPress={handleBack}
//           className="absolute z-10 items-center justify-center w-12 h-12 top-12 left-4"
//           style={{
//             marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight || 0,
//           }}
//         >
//           <Text className="text-3xl font-light text-white">‹</Text>
//         </Pressable> */}
//       </View>

//       {/* CONTENT CARD */}
//       <View className="flex-1 bg-[#FFFDF8] rounded-t-[32px] -mt-16 px-6 pt-8 shadow-lg">
//         {/* Title */}
//         <Text className="mb-2 text-2xl font-bold text-center text-gray-900">
//           Verify Mobile
//         </Text>

//         {/* Subtitle */}
//         <Text className="text-center text-[#8B8B8B] text-base mb-8">
//           Enter the 4-digit code sent to +91 {maskMobile(mobile)}
//         </Text>

//         {/* OTP INPUT BOXES */}
//         <View className="flex-row justify-between px-4 mb-8">
//           {[0, 1, 2, 3].map((index) => (
//             <View
//               key={index}
//               className={`w-[70px] h-[70px] rounded-2xl border-2 items-center justify-center bg-white ${
//                 otp[index]
//                   ? "border-[#D4AF37]"
//                   : index === otp.findIndex((digit) => !digit)
//                     ? "border-[#D4AF37]"
//                     : "border-[#E5E5E5]"
//               }`}
//               style={{
//                 shadowColor: otp[index] ? "#D4AF37" : "#000",
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: otp[index] ? 0.1 : 0.05,
//                 shadowRadius: 4,
//                 elevation: 2,
//               }}
//             >
//               <TextInput
//                 ref={(ref) => {
//                   inputRefs.current[index] = ref;
//                 }}
//                 keyboardType="number-pad"
//                 maxLength={1}
//                 value={otp[index]}
//                 onChangeText={(value) => handleOtpChange(value, index)}
//                 onKeyPress={(e) => handleKeyPress(e, index)}
//                 className="w-full h-full text-2xl font-semibold text-center text-gray-900"
//                 autoFocus={index === 0}
//                 selectTextOnFocus
//                 textContentType="oneTimeCode"
//                 // Auto-fill OTP on Android/iOS
//                 {...(Platform.OS === "ios" && index === 0
//                   ? { textContentType: "oneTimeCode" }
//                   : {})}
//               />
//             </View>
//           ))}
//         </View>

//         {/* Error Message */}
//         {error ? (
//           <Text className="mb-4 -mt-4 text-sm text-center text-red-500">
//             {error}
//           </Text>
//         ) : null}

//         {/* Resend Timer */}
//         <View className="items-center mb-2">
//           <Text className="text-[#8B8B8B] text-base">
//             Resend code in{" "}
//             <Text className="font-semibold text-[#D4AF37]">
//               {formatTimer(timer)}
//             </Text>
//           </Text>
//         </View>

//         {/* Resend Code Link */}
//         <Pressable
//           onPress={handleResend}
//           disabled={timer > 0}
//           className="items-center mb-8"
//         >
//           <Text
//             className={`text-base font-medium ${
//               timer > 0
//                 ? "text-[#CCCCCC]"
//                 : "text-[#8B8B8B] underline underline-offset-2"
//             }`}
//           >
//             Resend Code
//           </Text>
//         </Pressable>

//         {/* VERIFY BUTTON */}
//         <Pressable
//           onPress={() => handleVerify()}
//           disabled={loading || otp.some((digit) => !digit)}
//           className={`h-14 rounded-xl items-center justify-center mb-6 ${
//             loading || otp.some((digit) => !digit)
//               ? "bg-[#E5D5A8]"
//               : "bg-[#D4AF37]"
//           }`}
//           style={{
//             shadowColor: "#D4AF37",
//             shadowOffset: { width: 0, height: 4 },
//             shadowOpacity: 0.3,
//             shadowRadius: 8,
//             elevation: 4,
//           }}
//         >
//           {loading ? (
//             <ActivityIndicator color="#000" />
//           ) : (
//             <Text className="text-lg font-bold tracking-wide text-black">
//               Verify & Proceed
//             </Text>
//           )}
//         </Pressable>

//         {/* Change Number Link */}
//         <Pressable onPress={handleBack} className="items-center">
//           <Text className="text-[#8B8B8B] text-base">Change Phone Number</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// ----prev
// import { useAuth } from "@/context/AuthContext";
// import { verifyOtp } from "@/lib/auth";
// import { isValidOtp } from "@/lib/google";
// import { router, useLocalSearchParams } from "expo-router";
// import { useEffect, useRef, useState } from "react";
// import {
//   ActivityIndicator,
//   Image,
//   Platform,
//   Pressable,
//   StatusBar,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// export default function OtpScreen() {
//   const { mobile } = useLocalSearchParams<{ mobile: string }>();
//   const { login } = useAuth();

//   const inputRefs = useRef<(TextInput | null)[]>([]);
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [timer, setTimer] = useState(45);

//   // Timer countdown
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [timer]);

//   const handleOtpChange = (value: string, index: number) => {
//     // Only allow numbers
//     if (value && !/^\d$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError("");

//     // Auto-focus next input
//     if (value && index < 3) {
//       inputRefs.current[index + 1]?.focus();
//     }

//     // Auto-verify when all 4 digits are entered
//     if (value && index === 3 && newOtp.every((digit) => digit)) {
//       handleVerify(newOtp.join(""));
//     }
//   };

//   const handleKeyPress = (e: any, index: number) => {
//     // Focus previous input on backspace
//     if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleVerify = async (otpValue?: string) => {
//     const otpString = otpValue || otp.join("");

//     if (!isValidOtp(otpString)) {
//       setError("Please enter a valid 4-digit OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await verifyOtp(mobile, otpString);

//       // Login to auth context
//       await login(res.userId, res.hasUsername);

//       // Navigate to tabs
//       router.replace(res.hasUsername ? "/(tabs)" : "/username");
//     } catch (e: any) {
//       setError(e.message || "Invalid OTP");
//       setOtp(["", "", "", ""]);
//       inputRefs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResend = async () => {
//     if (timer > 0) return;

//     // Reset timer and resend OTP logic here
//     setTimer(45);
//     setOtp(["", "", "", ""]);
//     setError("");
//     inputRefs.current[0]?.focus();

//     // Call your sendOtp function here
//     // await sendOtp(mobile);
//   };

//   const handleBack = () => {
//     router.back();
//   };

//   const formatTimer = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   const maskMobile = (mobile: string) => {
//     if (!mobile || mobile.length < 10) return "XXXXX XXXXX";
//     return `${mobile.substring(0, 5)} ${mobile.substring(5)}`;
//   };

//   return (
//     <View className="flex-1">
//       <StatusBar barStyle="light-content" />

//       {/* HERO IMAGE SECTION */}
//       <View className="relative h-[45%]">
//         <Image
//           source={require("@/assets/images/jewelry-hero.jpg")}
//           className="w-full h-full"
//           resizeMode="cover"
//         />

//         {/* Gradient overlay for better text visibility */}
//         <View className="absolute inset-0 bg-black/20" />
//       </View>

//       {/* CONTENT CARD */}
//       <View className="flex-1 bg-[#FFFDF8] rounded-t-[32px] -mt-16 px-6 pt-8 shadow-lg">
//         {/* Title */}
//         <Text className="mb-2 text-2xl font-bold text-center text-gray-900">
//           Verify Mobile
//         </Text>

//         {/* Subtitle */}
//         <Text className="text-center text-[#8B8B8B] text-base mb-8">
//           Enter the 4-digit code sent to +91 {maskMobile(mobile)}
//         </Text>

//         {/* OTP INPUT BOXES */}
//         <View className="flex-row justify-between px-4 mb-8">
//           {[0, 1, 2, 3].map((index) => (
//             <View
//               key={index}
//               className={`w-[70px] h-[70px] rounded-2xl border-2 items-center justify-center bg-white ${
//                 otp[index]
//                   ? "border-[#D4AF37]"
//                   : index === otp.findIndex((digit) => !digit)
//                     ? "border-[#D4AF37]"
//                     : "border-[#E5E5E5]"
//               }`}
//               style={{
//                 shadowColor: otp[index] ? "#D4AF37" : "#000",
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: otp[index] ? 0.1 : 0.05,
//                 shadowRadius: 4,
//                 elevation: 2,
//               }}
//             >
//               <TextInput
//                 ref={(ref) => {
//                   inputRefs.current[index] = ref;
//                 }}
//                 keyboardType="number-pad"
//                 maxLength={1}
//                 value={otp[index]}
//                 onChangeText={(value) => handleOtpChange(value, index)}
//                 onKeyPress={(e) => handleKeyPress(e, index)}
//                 className="w-full h-full text-2xl font-semibold text-center text-gray-900"
//                 autoFocus={index === 0}
//                 selectTextOnFocus
//                 textContentType="oneTimeCode"
//                 // Auto-fill OTP on Android/iOS
//                 {...(Platform.OS === "ios" && index === 0
//                   ? { textContentType: "oneTimeCode" }
//                   : {})}
//               />
//             </View>
//           ))}
//         </View>

//         {/* Error Message */}
//         {error ? (
//           <Text className="mb-4 -mt-4 text-sm text-center text-red-500">
//             {error}
//           </Text>
//         ) : null}

//         {/* Resend Timer */}
//         <View className="items-center mb-2">
//           <Text className="text-[#8B8B8B] text-base">
//             Resend code in{" "}
//             <Text className="font-semibold text-[#D4AF37]">
//               {formatTimer(timer)}
//             </Text>
//           </Text>
//         </View>

//         {/* Resend Code Link */}
//         <Pressable
//           onPress={handleResend}
//           disabled={timer > 0}
//           className="items-center mb-8"
//         >
//           <Text
//             className={`text-base font-medium ${
//               timer > 0
//                 ? "text-[#CCCCCC]"
//                 : "text-[#8B8B8B] underline underline-offset-2"
//             }`}
//           >
//             Resend Code
//           </Text>
//         </Pressable>

//         {/* VERIFY BUTTON */}
//         <Pressable
//           onPress={() => handleVerify()}
//           disabled={loading || otp.some((digit) => !digit)}
//           className={`h-14 rounded-xl items-center justify-center mb-6 ${
//             loading || otp.some((digit) => !digit)
//               ? "bg-[#E5D5A8]"
//               : "bg-[#D4AF37]"
//           }`}
//           style={{
//             shadowColor: "#D4AF37",
//             shadowOffset: { width: 0, height: 4 },
//             shadowOpacity: 0.3,
//             shadowRadius: 8,
//             elevation: 4,
//           }}
//         >
//           {loading ? (
//             <ActivityIndicator color="#000" />
//           ) : (
//             <Text className="text-lg font-bold tracking-wide text-black">
//               Verify & Proceed
//             </Text>
//           )}
//         </Pressable>

//         {/* Change Number Link */}
//         <Pressable onPress={handleBack} className="items-center">
//           <Text className="text-[#8B8B8B] text-base">Change Phone Number</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

import { useAuth } from "@/context/AuthContext";
import { verifyOtp } from "@/lib/auth";
import { isValidOtp } from "@/lib/google";
import Entypo from "@expo/vector-icons/Entypo";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function OtpScreen() {
  const { mobile } = useLocalSearchParams<{ mobile: string }>();
  const { login } = useAuth();

  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(45);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (value: string, index: number) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all 4 digits are entered
    if (value && index === 3 && newOtp.every((digit) => digit)) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Focus previous input on backspace
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (otpValue?: string) => {
    const otpString = otpValue || otp.join("");

    if (!isValidOtp(otpString)) {
      setError("Please enter a valid 4-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await verifyOtp(mobile, otpString);

      // Login to auth context
      await login(res.userId);

      // Navigate to tabs
      router.replace("/(public)");
    } catch (e: any) {
      setError(e.message || "Invalid OTP");
      setOtp(["", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;

    // Reset timer and resend OTP logic here
    setTimer(45);
    setOtp(["", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();

    // Call your sendOtp function here
    // await sendOtp(mobile);
  };

  const handleBack = () => {
    router.back();
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const maskMobile = (mobile: string) => {
    if (!mobile || mobile.length < 10) return "XXXXX XXXXX";
    return `${mobile.substring(0, 5)} ${mobile.substring(5)}`;
  };

  return (
    <View className="flex-1 bg-[#F5F3EE]">
      <StatusBar barStyle="light-content" />

      {/* HERO IMAGE SECTION */}
      <View className="relative h-[45%]">
        <Image
          source={require("@/assets/images/jewelry-hero.jpg")}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Gradient overlay for better text visibility */}
        <View className="absolute inset-0 bg-black/20" />

        {/* Back Button */}
        <TouchableOpacity
          onPress={handleBack}
          className="absolute items-center justify-center w-8 h-8 rounded-full top-12 left-4 bg-white/70"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <View style={{ marginLeft: -2, marginTop: -1 }}>
            <Text className="text-[30px] font-thin text-[#1F1F1F]">
              <Entypo name="chevron-left" size={20} color="black" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* CONTENT CARD */}
      <View className="flex-1 bg-[#FFFDF8] rounded-t-[32px] -mt-16 px-6 pt-8 shadow-lg">
        {/* Title */}
        <Text className="mb-2 text-2xl font-bold text-center text-gray-900">
          Verify Mobile
        </Text>

        {/* Subtitle */}
        <Text className="text-center text-[#8B8B8B] text-base mb-8">
          Enter the 4-digit code sent to +91 {maskMobile(mobile)}
        </Text>

        {/* OTP INPUT BOXES */}
        <View className="flex-row justify-between px-4 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <View
              key={index}
              className={`w-[70px] h-[70px] rounded-2xl border-2 items-center justify-center bg-white ${
                otp[index]
                  ? "border-[#E1BB26]"
                  : index === otp.findIndex((digit) => !digit)
                    ? "border-[#E1BB26]"
                    : "border-[#E5E5E5]"
              }`}
              style={{
                shadowColor: otp[index] ? "#E1BB26" : "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: otp[index] ? 0.1 : 0.05,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <TextInput
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                keyboardType="number-pad"
                maxLength={1}
                value={otp[index]}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                className="w-full h-full text-2xl font-semibold text-center text-gray-900"
                autoFocus={index === 0}
                selectTextOnFocus
                textContentType="oneTimeCode"
                // Auto-fill OTP on Android/iOS
                {...(Platform.OS === "ios" && index === 0
                  ? { textContentType: "oneTimeCode" }
                  : {})}
              />
            </View>
          ))}
        </View>

        {/* Error Message */}
        {error ? (
          <Text className="mb-4 -mt-4 text-sm text-center text-red-500">
            {error}
          </Text>
        ) : null}

        {/* Resend Timer */}
        <View className="items-center mb-2">
          <Text className="text-[#8B8B8B] text-base">
            Resend code in{" "}
            <Text className="font-semibold text-[#E1BB26]">
              {formatTimer(timer)}
            </Text>
          </Text>
        </View>

        {/* Resend Code Link */}
        <TouchableOpacity
          onPress={handleResend}
          disabled={timer > 0}
          className="items-center mb-8"
        >
          <Text
            className={`text-base font-medium ${
              timer > 0
                ? "text-[#CCCCCC]"
                : "text-[#8B8B8B] underline underline-offset-2"
            }`}
          >
            Resend Code
          </Text>
        </TouchableOpacity>

        {/* VERIFY BUTTON */}
        <TouchableOpacity
          onPress={() => handleVerify()}
          disabled={loading || otp.some((digit) => !digit)}
          className={`h-[50px] rounded-xl items-center justify-center mb-6 ${
            loading || otp.some((digit) => !digit)
              ? "bg-[#E5D5A8]"
              : "bg-[#E1BB26]"
          }`}
        >
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text className="text-lg font-bold tracking-wide text-black">
              Verify & Proceed
            </Text>
          )}
        </TouchableOpacity>

        {/* Change Number Link */}
        <TouchableOpacity onPress={handleBack} className="items-center">
          <Text className="text-[#8B8B8B] text-base">Change Phone Number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
