import Splash from "@/components/splash/Splash";
import { AuthProvider } from "@/context/AuthContext";
import { DrawerProvider } from "@/context/DrawerContext";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import "react-native-reanimated";
import "./global.css";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [ready, setReady] = useState(false);

  const [fontsLoaded] = useFonts({
    CinzelRegular: require("../assets/fonts/Cinzel-Regular.ttf"),
    CinzelMedium: require("../assets/fonts/Cinzel-Medium.ttf"),
    CinzelBold: require("../assets/fonts/Cinzel-Bold.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      await SplashScreen.hideAsync();
      setReady(true);
    };
    prepare();
  }, []);

  if (!ready || !fontsLoaded) {
    return <Splash />;
  }
  return (
    <AuthProvider>
      <DrawerProvider>
        <Slot />
      </DrawerProvider>
    </AuthProvider>
  );
}
