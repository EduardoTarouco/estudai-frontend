import { RecoveryProvider } from "@/contexts/PasswordResetContext";
import { Stack } from "expo-router";

export default function AuthLayout() {
    
  return (
    <RecoveryProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </RecoveryProvider>
  );
}
