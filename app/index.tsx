import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";

export default function AppIndex() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return null;

  return <Redirect href="/(public)" />;
}
