import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, View } from "react-native";

export default function GoldPlanTabButton({
  onPress,
  accessibilityState,
}: any) {
  const focused = accessibilityState?.selected;

  return (
    <Pressable
      onPress={onPress}
      style={{
        top: -20, // lifts the button
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: "#C9A227",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#C9A227",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.35,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <MaterialCommunityIcons name="gold" size={28} color="#fff" />
      </View>
    </Pressable>
  );
}
