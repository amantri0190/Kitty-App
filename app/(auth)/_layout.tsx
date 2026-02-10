import { useAuth } from "@/context/AuthContext";
import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return null;

  if (isLoggedIn) {
    return <Redirect href="/(public)" />;
  }

  return <Slot />;
}
