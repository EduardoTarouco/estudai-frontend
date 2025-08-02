import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}
