import {
  Button,
  ButtonText
} from "@/components/ui/button";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";

export const ReceiveEmail = () => {
  
 const [email, setEmail] = useState('');

  return (
    <View className="h-screen w-screen flex justify-center items-center gap-6 bg-blue-200 p-4">

      <Text className="text-center text-xl font-bold rounded-[8px] ">
        Insira seu email para receber o codigo de redefiniçao 
      </Text>

      <View className="flex-row items-center bg-white border rounded-full px-4 py-3 mb-6">
        <FontAwesome name="envelope" size={20} color="#888" style={{ marginRight: 10 }} />
        <TextInput
          className="flex-1 text-base text-gray-800"
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

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

  );
};
