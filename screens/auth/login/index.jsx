import {
  Button,
  ButtonText
} from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import { Text, View } from "react-native";

export const Login = () => {

  return (
    <View className="h-screen w-screen flex justify-center items-center gap-2 bg-blue-300">
      <Text className="text-xl font-bold">Login working!</Text>

      <VStack space="sm">
        <Button
          action={"primary"}
          variant={"solid"}
          size={"md"}
          isDisabled={false}
          onPress={() => {router.replace("home")}}
        >
          <ButtonText>Enviar</ButtonText>
        </Button>

        <Button
          action={"secondary"}
          variant={"link"}
          size={"sm"}
          isDisabled={false}
          onPress={() => {router.push("auth/forgot-password")}}
        >
          <ButtonText>Esqueci a senha</ButtonText>
        </Button>
      </VStack>
    </View>
  );
};
