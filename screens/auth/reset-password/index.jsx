import {
  Button,
  ButtonText
} from "@/components/ui/button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export const CreatePassword = () => {
  
  return (
    <View className="h-screen w-screen flex justify-center items-center gap-2 bg-blue-100">
      <Text className="text-xl font-bold">Create new password working!</Text>

      <Button
        action={"secondary"}
        variant={"solid"}
        size={"sm"}
        isDisabled={false}
        onPress={() => {router.replace("auth/login")}}
      >
        <ButtonText>Voltar ao login</ButtonText>
      </Button>
    </View>
  );
}
