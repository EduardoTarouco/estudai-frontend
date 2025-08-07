import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Login = () => {

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (

    <>
      {/* Campo Com a Tag ESTUDAI */}
      <Text className='bg-black color-white text-center p-6 w-full text-4xl'>Estudaí</Text>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-[#539ADF] px-6 py-10">

        {/* Campo Com a Tag Login */}
        <Text className="text-center text-white text-4xl font-SemiBold mb-6 ">LOGIN</Text>

        <View className='absolute top-[110px] ml-[70px]'>
          <Animatable.Image className='h-[300px] w-[300px] self-center'
            animation="flipInY"
            source={require('./assets/welcome-img.png')}
          />
        </View>

        {/* Campo Email */}
        <View className="flex-row items-center bg-white border rounded-full px-4 py-3 mb-6 mt-[400px]">
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


        {/* Campo Senha */}
        <View className="flex-row items-center bg-white border rounded-full px-4 py-3 mb-6">
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

        {/* Campo Esqueceu a senha */}
        <TouchableOpacity 
          className="bg-white border rounded-full py-1 mt-1 w-32 self-end mr-3 -mt-2"
          onPress={() => {router.push("auth/forgot-password")}}
        >
          <Text className="text-blue-500 text-center font-bold text-sm">Esqueceu a senha?</Text>
        </TouchableOpacity>


        {/* Botão Logar */}
        <TouchableOpacity 
          className=" bg-[#0DF538] border rounded-full py-4 mb-6 mt-6"
          onPress={() => {router.replace("home")}}
        >
          <Text className="text-black text-center font-bold text-lg">Logar</Text>
        </TouchableOpacity>

        {/* Campo do Ou */}
        <View className="flex-row items-center justify-center mb-6">
          <View className="h-px bg-white flex-1 mx-2" />
          <Text className="text-white"> ou </Text>
          <View className="h-px bg-white flex-1 mx-2" />
        </View>

        {/* Botao logar com o Google */}
        <TouchableOpacity className="flex-row bg-white py-4 border rounded-full items-center justify-center">
          <FontAwesome name="google" size={20} color="red" />
          <Text className="ml-2 text-black font-semibold">Continuar com o Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
