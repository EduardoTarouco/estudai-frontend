import { Input, InputField, InputIcon } from "@/components/ui/input";
import { useRecovery } from "@/contexts/PasswordResetContext";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Controller, useForm } from 'react-hook-form';
import { Heading } from '@/components/ui/heading';
import { MailIcon } from "@/components/ui/icon";
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import axios from "axios";

export const ForgotPassword = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: ""
    }
  });

  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;
  const { registerEmail, getEmail, isEmailLoading } = useRecovery();

  useEffect(() => {
    if (isEmailLoading) return;

    const email = getEmail();
    if (email) {
      navigateToPasswordCodeScreen();
    }
  }, [getEmail, isEmailLoading]);
  
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(baseBackendUrl + `/auth/password/recovery?email=${data.email}`);
      console.log(response.data);
      await registerEmail(data.email);
      navigateToPasswordCodeScreen();
    } catch (error) {
      console.log("Erro ao resetar senha: ", error.response.data);
    }
  }

  return (
    <SafeAreaView className="h-screen w-screen flex justify-center items-center gap-3 bg-gray-200">
      <Heading size={"4xl"}>Esqueci a senha</Heading>

      <FormControl className="bg-gray-50 p-5 border rounded-lg border-outline-300 w-[95%]">
        <VStack space={"xl"}>
          <VStack space="xs">
            <Text className={`text-typography-500 ${errors.email ? "text-red-500" : ""}`}>Email</Text>
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
            {errors.email && <Text className="text-red-500 text-sm ml-5">{errors.email.message}</Text>}
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
    </SafeAreaView>
  );
};

function navigateToPasswordCodeScreen() {
  router.replace("auth/password-code");
}