import {
  Button,
  ButtonText
} from "@/components/ui/button";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";

export const ForgotPassword = () => {

  const [codigo, setCodigo] = useState('');
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    if (tempo > 0) {
      const interval = setInterval(() => {
        setTempo((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [tempo]);

  const reenviarCodigo = () => {
    console.log("Código reenviado!");
    setTempo(30); 
  };

  return (
    <View className="h-screen w-screen flex justify-center items-center gap-6 bg-blue-200 p-4">

      <Text className="text-center text-xl font-bold rounded-[8px] ">
        Insira o codigo que lhe foi enviado 
      </Text>

      <TextInput
        className="w-40 h-12 border border-gray-400 rounded-lg bg-white text-center text-lg"
        placeholder="Digite o código"
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="numeric"
        maxLength={6}
      />

      <View className="items-center gap-2">
       
        <Button
          action={"secondary"}
          variant={"outline"}
          size={"xs"} 
          isDisabled={tempo > 0}
          onPress={reenviarCodigo}
        >
          <ButtonText>
            {tempo > 0 ? `Reenviar em ${tempo}s` : "Reenviar código"}
          </ButtonText>
        </Button>

        <Button
          action={"secondary"}
          variant={"solid"}
          size={"sm"}
          isDisabled={!codigo}
          onPress={() => {
            router.push("auth/reset-password");
          }}
        >
          <ButtonText>Enviar</ButtonText>
        </Button>
      </View>

    </View>
  );
};
