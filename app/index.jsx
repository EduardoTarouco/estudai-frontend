import { EstudaiHeader } from "@/components/application/headers/EstudaiHeader";
import { Button, ButtonText } from "@/components/ui/button";
import { SafeAreaView, View, Text, Image } from "react-native";
import { router } from "expo-router";

const index = () => {

  return (
    <SafeAreaView className="bg-estudaiBg-lighter flex-1">
      <EstudaiHeader />

      <View className="flex-1 justify-evenly items-center px-4">
        <Image 
          source={require("@/assets/images/welcomeScreen/study-materials.png")} 
          className="w-full max-w-full"
          style={{ aspectRatio: 1, maxHeight: "35%" }}
          resizeMode="contain"
        />

        <Text className="text-3xl font-bold text-center text-white">
          Seja bem-vindo, sua jornada de estudos começa aqui!
        </Text>

        <View className="gap-3 w-full">
          <Button
            className="bg-green-600 border-black rounded-xl border-2 border-b-4"
            action={"primary"}
            variant={"solid"}
            size={"md"}
            isDisabled={false}
            onPress={() => {router.push("auth/signup")}}
          >
            <ButtonText>Cadastrar-se</ButtonText>
          </Button>
          
          <Button
            className="bg-white border-black rounded-xl border-2 border-b-4"
            action={"secondary"}
            variant={"solid"}
            size={"md"}
            isDisabled={false}
            onPress={() => {router.push("auth/login")}}
          >
            <ButtonText>Já tenho uma conta</ButtonText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
