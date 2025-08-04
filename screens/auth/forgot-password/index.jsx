import {
  Button,
  ButtonText
} from "@/components/ui/button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export const ForgotPassword = () => {

  return (
    <View className="h-screen w-screen flex justify-center items-center gap-2 bg-blue-200">
      <Text className="text-xl font-bold">Password recovery working!</Text>

      <Button
        action={"secondary"}
        variant={"solid"}
        size={"sm"}
        isDisabled={false}
        onPress={() => {router.push("auth/reset-password")}}
      >
        <ButtonText>Enviar</ButtonText>
      </Button>
    </View>
  );
};
