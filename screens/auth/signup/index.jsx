
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export const SignUp = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const onSubmit = info => {
    setSubmittedData(data);
    console.log("Submitted Info: " + info);
  };
  return <View className="flex-1 flex justify-center items-center gap-2 bg-yellow-200 p-5">
    <Heading size={"4xl"}>Cadastro</Heading>
    <Text>Cadastre-se e começe a utilizar o Estudai</Text>

    <Button action={"primary"} variant={"solid"} size={"md"} isDisabled={false} onPress={() => {
      router.replace("home");
    }}>
      <ButtonText>Enviar</ButtonText>
    </Button>
  </View>;
};