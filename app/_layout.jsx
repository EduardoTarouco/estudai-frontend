import { SplashScreenController } from "@/components/application/SplashScreenController/SplashScreenController";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SessionProvider, useSession } from "@/contexts/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout() {

  return (
    <GluestackUIProvider>
      <SafeAreaView style={{ flex: 1 }} className="bg-black">
        <SessionProvider>
          <SplashScreenController />
          <RootNavigator />
        </SessionProvider>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

function RootNavigator() {
  const { session } = useSession();

  console.log("session atual: ", JSON.stringify(session, null, 2));
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={session}>
        <Stack.Screen name="(application)" />
      </Stack.Protected>
      <Stack.Protected guard={!session}>
        <Stack.Screen name="index" />
        <Stack.Screen name="auth" />
      </Stack.Protected>
    </Stack>
  );
}