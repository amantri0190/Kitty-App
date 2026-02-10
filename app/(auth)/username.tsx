// import { useAuth } from "@/context/AuthContext";
// import { saveUsername } from "@/lib/auth";
// import { isValidUsername } from "@/lib/google";
// import { router } from "expo-router";
// import { useState } from "react";
// import {
//   ActivityIndicator,
//   Pressable,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// export default function UsernameScreen() {
//   const { userId, setUsernameCompleted } = useAuth();

//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSave = async () => {
//     if (!isValidUsername(username)) {
//       setError("Username must be at least 3 characters, no spaces");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       if (!userId) throw new Error("User session expired");

//       await saveUsername(userId, username);

//       await setUsernameCompleted();

//       router.replace("/(tabs)");
//     } catch (e: any) {
//       setError(e.message || "Failed to save username");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View className="justify-center flex-1 px-6 bg-white">
//       <Text className="mb-2 text-3xl font-bold text-black">
//         Choose a username
//       </Text>

//       <Text className="mb-8 text-gray-500">This will be visible to others</Text>

//       <TextInput
//         placeholder="Username"
//         autoCapitalize="none"
//         value={username}
//         onChangeText={(t) => {
//           setUsername(t);
//           setError("");
//         }}
//         className="px-4 py-4 mb-2 text-lg border border-gray-300 rounded-xl"
//       />

//       {error ? <Text className="mb-3 text-red-500">{error}</Text> : null}

//       <Pressable
//         onPress={handleSave}
//         disabled={loading}
//         className={`h-14 rounded-xl items-center justify-center ${
//           loading ? "bg-gray-300" : "bg-black"
//         }`}
//       >
//         {loading ? (
//           <ActivityIndicator color="white" />
//         ) : (
//           <Text className="text-lg font-semibold text-white">Continue</Text>
//         )}
//       </Pressable>
//     </View>
//   );
// }

// import { Redirect } from "expo-router";
// import { useAuth } from "@/context/AuthContext";

// export default function UsernameGuard() {
//   const { isLoggedIn, hasUsername, loading } = useAuth();

//   if (loading) return null;

//   if (!isLoggedIn) {
//     return <Redirect href="/login" />;
//   }

//   if (hasUsername) {
//     return <Redirect href="/(tabs)" />;
//   }

//   return null; // UI will render later
// }

// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
//   ActivityIndicator,
// } from "react-native";
// import { useState } from "react";
// import { router } from "expo-router";
// import { saveUsername } from "@/lib/auth";
// import { useAuth } from "@/context/AuthContext";
// import { isValidUsername } from "@/lib/google";

// export default function UsernameScreen() {
//   const { userId, setUsernameCompleted } = useAuth();

//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSave = async () => {
//     if (!isValidUsername(username)) {
//       setError("Username must be at least 3 characters, no spaces");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       if (!userId) throw new Error("User session expired");

//       await saveUsername(userId, username);

//       await setUsernameCompleted();

//       router.replace("/(tabs)");
//     } catch (e: any) {
//       setError(e.message || "Failed to save username");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View className="justify-center flex-1 px-6 bg-white">
//       <Text className="mb-2 text-3xl font-bold text-black">
//         Choose a username
//       </Text>

//       <Text className="mb-8 text-gray-500">This will be visible to others</Text>

//       <TextInput
//         placeholder="Username"
//         autoCapitalize="none"
//         value={username}
//         onChangeText={(t) => {
//           setUsername(t);
//           setError("");
//         }}
//         className="px-4 py-4 mb-2 text-lg border border-gray-300 rounded-xl"
//       />

//       {error ? <Text className="mb-3 text-red-500">{error}</Text> : null}

//       <Pressable
//         onPress={handleSave}
//         disabled={loading}
//         className={`h-14 rounded-xl items-center justify-center ${
//           loading ? "bg-gray-300" : "bg-black"
//         }`}
//       >
//         {loading ? (
//           <ActivityIndicator color="white" />
//         ) : (
//           <Text className="text-lg font-semibold text-white">Continue</Text>
//         )}
//       </Pressable>
//     </View>
//   );
// }
