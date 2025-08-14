import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from '@/components/ui/heading';
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";

export const Login = () => {
    // Hook do react-hook-form que gerencia a lógica de registro dos inputs, retornar seus valores, 
    // gerenciar o envio do formulário e retornar erros das validações.
    const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      senha: ""
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  // Lógica do que acontece ao enviar o formulário com sucesso.
  // Essa função só é chamada se os dados forem validados.
  const onSubmit = (data) => {
    console.log("Submitted Info: " + JSON.stringify(data));
    router.replace("home");
  };

  return (
    <SafeAreaView className="bg-green-200 flex-1">
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }}
      >
        <View className="bg-green-200 flex-1 flex justify-center items-center gap-2 p-5">
          <VStack className="flex justify-center items-center m-2">
            <Heading size={"4xl"}>Login</Heading>
            <Text>Entre na sua conta e comece a utilizar o Estudaí</Text>
          </VStack>

          <FormControl className="bg-gray-50 p-5 border rounded-lg border-outline-300 w-[95%]">
            <VStack space="xl">

              {/* 
                * Os principais campos (email, senha, respectivamente) localizados em VStacks (agrupamentos verticais) abaixo: 
                */}
              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.email ? "text-red-500" : ""}`}>Email*</Text>
                {/* Controller é utilizado pelo react-hook-form para registrar componentes de input, registra seus nomes, realiza validações, etc.
                  *
                  * Pode configurar validações passando diferentes objetos ao parâmetro `rules` -> doc: https://react-hook-form.com/docs/useform/register
                  * Também é possível passar mensagens as validações passando um objeto na seguinte estrutura: { valor, mensagem }.
                  */}
                <Controller
                  control={control}
                  name="email"
                  rules={{required: "O email é obrigatório"}}
                  render={({ field: { onChange, value } }) => (
                  <Input variant="rounded" size="xl" className={`min-w-[250px] text-center ${errors.email ? "border-2" : ""}`} isInvalid={errors.email}>
                    <InputIcon as={MailIcon} className="m-3 -mr-1" color={errors.email ? "red" : "currentColor"} />
                    <InputField
                      placeholder="estudante@gmail.com"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
                />
                {/* Aqui são renderizados os erros do campo de nome, caso ocorram */}
                {errors.email && <Text className="text-red-500 text-sm ml-5">{errors.email.message}</Text>}
              </VStack>

              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.senha ? "text-red-500" : ""}`}>Senha*</Text>
                <Controller 
                  control={control}
                  name="senha"
                  rules={{required: "A senha é obrigatória"}}
                  render={({ field: { onChange, value } }) => (
                  <Input variant="rounded" size="xl" className={`text-center ${errors.senha ? "border-2" : ""}`} isInvalid={errors.senha}>
                    <InputIcon as={LockIcon} className="m-3 -mr-1" color={errors.senha ? "red" : "currentColor"} />
                    <InputField 
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      value={value}
                      onChangeText={onChange}
                    />
                    <InputSlot className="pr-3" onPress={() => {setShowPassword(!showPassword)}}>
                      <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                  </Input>
                )}
                />
                {errors.senha && <Text className="text-red-500 text-sm ml-5">{errors.senha.message}</Text>}
              </VStack>

              <Button 
                action={"primary"} 
                variant={"solid"} 
                size={"lg"} 
                onPress={handleSubmit(onSubmit)}
              >
                <ButtonText>Enviar</ButtonText>
              </Button>

            </VStack>
          </FormControl>    
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
