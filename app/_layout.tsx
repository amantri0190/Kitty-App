import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "./global.css";

import Splash from "@/components/splash/Splash";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fontsLoaded] = useFonts({
    CinzelRegular: require("../assets/fonts/Cinzel-Regular.ttf"),
    CinzelMedium: require("../assets/fonts/Cinzel-Medium.ttf"),
    CinzelBold: require("../assets/fonts/Cinzel-Bold.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.hideAsync();

      const start = Date.now();

      for (let i = 1; i <= 100; i++) {
        await new Promise((r) => setTimeout(r, 40));
        setProgress(i / 100);
      }

      const elapsed = Date.now() - start;
      const minTime = 30000;

      if (elapsed < minTime) {
        await new Promise((r) => setTimeout(r, minTime - elapsed));
      }

      setReady(true);
    };
    prepare();
  }, []);

  if (!ready) {
    return <Splash />;
  }

  if (!fontsLoaded || !ready) {
    return <Splash />;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
      <PortalHost />
    </ThemeProvider>
  );
}
