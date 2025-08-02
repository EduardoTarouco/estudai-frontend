import {
  Button,
  ButtonText
} from "@/components/ui/button";

import { VStack } from "@/components/ui/vstack";
import { SafeAreaView, Text } from "react-native";

const index = () => {

  return (
    <SafeAreaView className="h-screen w-screen flex justify-center items-center gap-3">
      <Text>Front page</Text>

      <VStack space="sm">
        <Button
          action={"primary"}
          variant={"solid"}
          size={"md"}
          isDisabled={false}
        >
          <ButtonText>Cadastrar-se</ButtonText>
        </Button>
        
        <Button
          action={"secondary"}
          variant={"solid"}
          size={"md"}
          isDisabled={false}
        >
          <ButtonText>Já tenho uma conta</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default index;
