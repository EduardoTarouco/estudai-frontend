import { Input, InputField, InputIcon } from "@/components/ui/input";
import { useRecovery } from "@/contexts/PasswordResetContext";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Controller, useForm } from 'react-hook-form';
import { Heading } from '@/components/ui/heading';
import { ClockIcon } from "@/components/ui/icon";
import { VStack } from '@/components/ui/vstack';
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Text } from '@/components/ui/text';
import { router } from "expo-router";
import axios from "axios";

export const PasswordCode = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      codigo: ""
    }
  });

  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

  const { getEmail, setCode, resetCodeAndEmail } = useRecovery();
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const resendCode = () => {
    console.log("Código reenviado!");
    setTime(30); 
  };

  const onSubmit = async (data) => {
    const email = getEmail();
    if (!email) {
      resetCodeAndEmail();
      router.replace("auth/forgot-password");
    }

    data.email = email;
    try {
      const response = await axios.post(baseBackendUrl + "/auth/validar-codigo", data);
      console.log(response.data);
      await setCode(data.codigo);
      router.replace("auth/reset-password");
    } catch (error) {
      console.log("Erro ao resetar senha: ", error.response.data);
    }
  }

  const getBackToEmailScreen = () => {
    resetCodeAndEmail();
    router.replace("auth/forgot-password");
  }

  return (
    <SafeAreaView className="h-screen w-screen flex justify-center items-center gap-3 bg-gray-200">
      <Heading size={"4xl"}>Esqueci a senha</Heading>

      <FormControl className="bg-gray-50 p-5 border rounded-lg border-outline-300 w-[95%]">
        <VStack space={"xl"}>
          <VStack space="xs">
            <Text className={`text-typography-500 ${errors.codigo ? "text-red-500" : ""}`}>Código de verificação</Text>
            <Controller
              control={control}
              name="codigo"
              rules={{
                required: "O código de verificação é obrigatório",
                minLength: {
                  value: 6,
                  message: "O código deve ter exatamente 6 números"
                },
                maxLength: {
                  value: 6,
                  message: "O código deve ter exatamente 6 números"
                }
              }}
              render={({ field: { onChange, value } }) => (
              <Input variant="rounded" size="xl" className={`min-w-[250px] text-center ${errors.codigo ? "border-2" : ""}`} isInvalid={errors.codigo}>
                <InputIcon as={ClockIcon} className="m-3 -mr-1" color={errors.codigo ? "red" : "currentColor"} />
                <InputField
                  placeholder="123456"
                  value={value}
                  onChangeText={onChange}
                />
              </Input>
            )}
            />
            {errors.codigo && <Text className="text-red-500 text-sm ml-5">{errors.codigo.message}</Text>}
          </VStack>

          <VStack space="xs">
            <Button 
              action={"primary"} 
              variant={"solid"} 
              size={"lg"} 
              onPress={handleSubmit(onSubmit)}
            >
              <ButtonText>Enviar</ButtonText>
            </Button>

            <Button 
              isDisabled={time > 0 ? true : false}
              action={"secondary"} 
              variant={"solid"} 
              size={"lg"} 
              onPress={() => {resendCode()}}
            >
              <ButtonText>{ time > 0 ? `Reenviar código em ${time}s` : "Reenviar código" }</ButtonText>
            </Button>
          </VStack>

          <Button
            className="self-end -mt-5" 
            variant={"link"}
            size={"sm"}
            onPress={() => {getBackToEmailScreen()}}
          >
            <ButtonText className="text-blue-500 underline">Inserir novo email</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </SafeAreaView>
  );
};
