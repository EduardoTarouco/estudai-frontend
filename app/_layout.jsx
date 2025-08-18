import { SplashScreenController } from "../components/application/SplashScreenController/SplashScreenController";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SessionProvider, useSession } from "@/contexts/AuthContext";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {

  return (
    <GluestackUIProvider>
      <SafeAreaView style={{ flex: 1 }}>
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
      {session ? (
        // Rotas disponíveis apenas para usuários logados
        <Stack.Protected guard={session}>
          <Stack.Screen name="(application)" />
        </Stack.Protected>
      ) : (
        // Rotas disponíveis apenas para usuários não logados
        <Stack.Protected guard={!session}>
          <Stack.Screen name="index" />
          <Stack.Screen name="auth" />
        </Stack.Protected>
      )}
    </Stack>
  );
}