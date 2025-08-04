import {
  Button,
  ButtonText
} from "@/components/ui/button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export const SignUp = () => {
  
  return (
    <View className="h-screen w-screen flex justify-center items-center gap-2 bg-yellow-200">
      <Text className="text-xl font-bold">Signup working!</Text>

      <Button
        action={"primary"}
        variant={"solid"}
        size={"md"}
        isDisabled={false}
        onPress={() => {router.replace("home")}}
      >
        <ButtonText>Enviar</ButtonText>
      </Button>
    </View>
  );
}
