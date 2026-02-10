import DrawerContent from "@/components/drawer/DrawerContent";
import { useDrawer } from "@/context/DrawerContext";
import { usePathname } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Easing, Pressable, View } from "react-native";

const WIDTH = Dimensions.get("window").width * 0.75;

export default function AppDrawer() {
  const { open, closeDrawer } = useDrawer();
  const pathname = usePathname();

  const translateX = useRef(new Animated.Value(-WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (open) {
      closeDrawer();
    }
  }, [pathname]);

  useEffect(() => {
    if (open) {
      setVisible(true);
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 320,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -WIDTH,
          duration: 260,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setVisible(false);
      });
    }
  }, [open]);

  if (!visible) return null;

  return (
    <View className="absolute inset-0 z-50">
      {/* Background Overlay (blocks only background) */}
      <Animated.View
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0"
      >
        <Pressable className="flex-1 bg-black/40" onPress={closeDrawer} />
      </Animated.View>

      {/* Drawer Panel (receives touches) */}
      <Animated.View
        style={{
          width: WIDTH,
          transform: [{ translateX }],
        }}
        className="absolute top-0 bottom-0 left-0 bg-white"
        pointerEvents="auto"
      >
        <DrawerContent />
      </Animated.View>
    </View>
  );
}
