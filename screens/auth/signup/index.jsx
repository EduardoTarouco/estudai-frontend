import { AtSignIcon, CalendarDaysIcon, EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "@/components/ui/icon";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { MaskedTextInput } from 'react-native-mask-text';
import { Controller, useForm } from 'react-hook-form';
import { usePopUp } from "@/contexts/PopUpContext";
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { router } from "expo-router";
import { useState } from "react";
import axios from "axios";

export const SignUp = () => {

  // Hook do react-hook-form que gerencia a lógica de registro dos inputs, retornar seus valores, 
  // gerenciar o envio do formulário e retornar erros das validações.
  const { control, getValues, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: ""
    }
  });

 /* 
  * URL do backend local configurado no .env
  * (precisa ser o ip e estar na mesma rede, caso contrário, deverá ser
  * um servidor em nuvem que possa receber essa requisição)
  */
  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;
  const popUp = usePopUp();
  const idadeMinimaRecomendada = 13;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Lógica do que acontece ao enviar o formulário com sucesso.
  // Essa função só é chamada se os dados forem validados.
  const onSubmit = async ({confirmPassword, ...data}) => {
    const [dia, mes, ano] = data.birthDate.split("/").map(Number);
    data.birthDate = new Date(ano, mes - 1, dia);

    
    console.log("Submitted Info: ", data);
    // Método POST do Axios, enviando os dados de cadastro a URL do backend
    // Em caso de sucesso, imprime no console e redireciona o usuário a página principal
    try {
      const response = await axios.post(baseBackendUrl + "/auth/register", data);
      console.log("Resposta do backend: ", response.data);
      router.replace("/auth/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        popUp.showDefaultToast("Erro ao realizar cadastro", error.response.data.message, "negative", "top");
      }
      console.error("Erro ao realizar cadastro", error.response);
    }
  };

  return (
    <SafeAreaView className="bg-yellow-200 flex-1">
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }}
      >
        <View className="bg-yellow-200 flex-1 flex justify-center items-center gap-2 p-5">
          <VStack className="flex justify-center items-center m-2">
            <Heading size={"4xl"}>Cadastro</Heading>
            <Text>Cadastre-se e começe a utilizar o Estudai</Text>
          </VStack>

          <FormControl className="bg-gray-50 p-5 border rounded-lg border-outline-300 w-[95%]">
            <VStack space="xl">

              {/* 
                * Os principais campos (nome, email, senha, repetir senha e data de nascimento, respectivamente) estão localizados em VStacks (agrupamentos verticais) abaixo: 
                */}
              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.name ? "text-red-500" : ""}`}>Nome*</Text>
                {/* Controller é utilizado pelo react-hook-form para registrar componentes de input, registra seus nomes, realiza validações, etc.
                  *
                  * Pode configurar validações passando diferentes objetos ao parâmetro `rules` -> doc: https://react-hook-form.com/docs/useform/register
                  * Também é possível passar mensagens as validações passando um objeto na seguinte estrutura: { valor, mensagem }.
                  */}
                <Controller
                  control={control}
                  name="name"
                  rules={{required: "O nome é obrigatório"}}
                  render={({ field: { onChange, value } }) => (
                  <Input variant="rounded" size="xl" className={`min-w-[250px] text-center ${errors.name ? "border-2" : ""}`} isInvalid={errors.name}>
                    <InputIcon as={AtSignIcon} className="m-3 -mr-1" color={errors.name ? "red" : "currentColor"} />
                    <InputField
                      placeholder="Fulano de Tal"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
                />
                {/* Aqui são renderizados os erros do campo de nome, caso ocorram */}
                {errors.name && <Text className="text-red-500 text-sm ml-5">{errors.name.message}</Text>}
              </VStack>

              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.email ? "text-red-500" : ""}`}>Email*</Text>
                {/* O regex abaixo valida se o email está ou não bem formatado, mas é uma validação básica.
                  * Para um diagrama melhor sobre o que ocorre de verdade, vale visitar o site https://www.regexplained.co.uk/ e colar o regex do pattern lá dentro.
                  */}
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "O email é obrigatório",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                      message: "E-mail inválido"
                    }
                  }}
                  render={({ field: { onChange, value } }) => (
                  <Input variant="rounded" size="xl" className={`min-w-[250px] text-center ${errors.email ? "border-2" : ""}`} isInvalid={errors.email}>
                    <InputIcon as={MailIcon} className="m-3 -mr-1" color={errors.email ? "red" : "currentColor"} />
                    <InputField
                      placeholder="Fulano@gmail.com"
                      keyboardType="email-adress" 
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
                />
                {errors.email && <Text className="text-red-500 text-sm ml-5">{errors.email.message}</Text>}
              </VStack>

              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.password ? "text-red-500" : ""}`}>Senha*</Text>
                <Controller 
                  control={control}
                  name="password"
                  rules={{
                    required: "A senha é obrigatória",
                    minLength: {
                      value: 8,
                      message: "A senha deve ter no mínimo 8 caracteres"
                    }
                  }}
                  render={({ field: { onChange, value } }) => (
                  <Input variant="rounded" size="xl" className={`text-center ${errors.password ? "border-2" : ""}`} isInvalid={errors.password}>
                    <InputIcon as={LockIcon} className="m-3 -mr-1" color={errors.password ? "red" : "currentColor"} />
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
                {errors.password && <Text className="text-red-500 text-sm ml-5">{errors.password.message}</Text>}
              </VStack>

              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.confirmPassword ? "text-red-500" : ""}`}>Confirme a senha*</Text>
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={{
                    required: "A confirmação da senha é obrigatória",
                    validate: (value) => 
                      value === getValues("password") || "As senhas não coincidem"
                  }}
                  render={({ field: { onChange, value }}) => (
                  <Input variant="rounded" size="xl" className={`text-center ${errors.confirmPassword ? "border-2" : ""}`} isInvalid={errors.confirmPassword}>
                    <InputIcon as={LockIcon} className="m-3 -mr-1" color={errors.confirmPassword ? "red" : "currentColor"} />
                    <InputField 
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Repetir senha"
                      value={value}
                      onChangeText={onChange}
                    />
                    <InputSlot className="pr-3" onPress={() => {setShowConfirmPassword(!showConfirmPassword)}}>
                      <InputIcon as={showConfirmPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                  </Input>
                )}
                />
                {errors.confirmPassword && <Text className="text-red-500 text-sm ml-5">{errors.confirmPassword.message}</Text>}
              </VStack>

              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.birthDate ? "text-red-500" : ""}`}>Data de nascimento*</Text>
                <Controller
                  control={control}
                  name="birthDate"
                  rules={{
                    required: "A data de nascimento é obrigatória",
                    validate: (value) => {
                      const [dia, mes, ano] = value.split("/").map(Number);
                      const date = new Date(ano, mes - 1, dia);
                      
                      if (
                        date.getDate() !== dia ||
                        date.getMonth() !== mes - 1 ||
                        date.getFullYear() !== ano
                      ) {
                        return "Data inválida";
                      }
                      
                      const hoje = new Date();
                      let idade = hoje.getFullYear() - ano;
                      const m = hoje.getMonth() - (mes - 1);
                      if (m < 0 || (m === 0 && hoje.getDate() < dia)) {
                        idade--;
                      }

                      if (idade < idadeMinimaRecomendada) {
                        return "É recomendado que tenha ao menos 13 anos para se cadastrar";
                      }

                      return true;
                    }
                  }}
                  render={({ field: { onChange, value } }) => (
                  <Input variant="rounded" size="xl" className={`text-center ${errors.birthDate ? "border-2" : ""}`} isInvalid={errors.birthDate}>
                    <InputIcon as={CalendarDaysIcon} className="m-3 -mr-1" color={errors.birthDate ? "red" : "currentColor"} />
                    <MaskedTextInput
                      style={{flex: 1, paddingHorizontal: 14}}
                      mask="99/99/9999"
                      type="text"
                      placeholder="01/01/2000"
                      keyboardType="numeric"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
                />
                {errors.birthDate && <Text className="text-red-500 text-sm ml-5">{errors.birthDate.message}</Text>}
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
