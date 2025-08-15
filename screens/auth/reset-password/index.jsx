import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";

export const CreatePassword = () => {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [repetirSenha, setRepetirSenha] = useState('');
  const [mostrarRepetirSenha, setMostrarRepetirSenha] = useState(false);

  return (
    <View className="h-screen w-screen flex justify-center items-center gap-2 bg-blue-100 p-4">

      <Text className="text-xl font-bold mb-[20px]">Redefina sua senha</Text>

      <View className="flex-row items-center bg-white border rounded-full px-4 py-3 mb-4 w-full max-w-md">
        <FontAwesome name="lock" size={20} color="#888" style={{ marginRight: 10 }} />
        <TextInput
          className="flex-1 text-base text-gray-800"
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <MaterialCommunityIcons
            name={mostrarSenha ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center bg-white border rounded-full px-4 py-3 mb-6 w-full max-w-md">
        <FontAwesome name="lock" size={20} color="#888" style={{ marginRight: 10 }} />
        <TextInput
          className="flex-1 text-base text-gray-800"
          placeholder="Confirme a senha"
          placeholderTextColor="#888"
          secureTextEntry={!mostrarRepetirSenha}
          value={repetirSenha}
          onChangeText={setRepetirSenha}
        />
        <TouchableOpacity onPress={() => setMostrarRepetirSenha(!mostrarRepetirSenha)}>
          <MaterialCommunityIcons
            name={mostrarRepetirSenha ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <Button
        action={"secondary"}
        variant={"solid"}
        size={"sm"}
        isDisabled={false}
        onPress={() => { router.replace("auth/login") }}
      >
        <ButtonText>Voltar ao login</ButtonText>
      </Button>
    </View>
  );
};
