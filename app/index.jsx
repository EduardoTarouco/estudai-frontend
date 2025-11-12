import {
  Button,
  ButtonText
} from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import { SafeAreaView, Text } from "react-native";

const index = () => {

  return (
    <SafeAreaView className="h-screen w-screen flex justify-center items-center gap-3 bg-gray-200">
      <Text>Front page</Text>

      <VStack space="sm">
        <Button
          action={"primary"}
          variant={"solid"}
          size={"md"}
          isDisabled={false}
          onPress={() => {router.push("auth/signup")}}
        >
          <ButtonText>Cadastrar-se</ButtonText>
        </Button>
        
        <Button
          action={"secondary"}
          variant={"solid"}
          size={"md"}
          isDisabled={false}
          onPress={() => {router.push("auth/login")}}
        >
          <ButtonText>Já tenho uma conta</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default index;