import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, LockIcon } from "@/components/ui/icon";
import { useRecovery } from "@/contexts/PasswordResetContext";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Controller, useForm } from 'react-hook-form';
import { useSession } from "@/contexts/AuthContext";
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { SafeAreaView } from "react-native";
import { Text } from '@/components/ui/text';
import { router } from "expo-router";
import { useState } from "react";
import axios from "axios";

export const ResetPassword = () => {

  const { control, getValues, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      newPassword: ""
    }
  });

  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { getCode, resetCodeAndEmail } = useRecovery();
  const { getAuthHeaders } = useSession();

  const onSubmit = async ({confirmPassword, ...data}) => {
    data.code = await getCode();
    
    try {
      const response = await axios.post(baseBackendUrl + "/auth/password/reset", data, getAuthHeaders());
      console.log(`Reset password status: ${response.status} (${response.statusText})`);
      resetCodeAndEmail();
      router.replace({ pathname: "auth/login"});
    } catch (error) {
      console.log("Erro ao resetar senha: ", error.response.data);
    }
  }

  return (
    <SafeAreaView className="h-screen w-screen flex justify-center items-center gap-3 bg-gray-200">
      <Heading size={"4xl"}>Esqueci a senha</Heading>
      
      <FormControl className="bg-gray-50 p-5 border rounded-lg border-outline-300 w-[95%]">
        <VStack space="xl">
          <VStack space="xs">
            <Text className={`text-typography-500 ${errors.newPassword ? "text-red-500" : ""}`}>Senha*</Text>
            <Controller 
              control={control}
              name="newPassword"
              rules={{
                required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "A senha deve ter no mínimo 8 caracteres"
              }
            }}
            render={({ field: { onChange, value } }) => (
            <Input variant="rounded" size="xl" className={`text-center ${errors.newPassword ? "border-2" : ""}`} isInvalid={errors.newPassword}>
              <InputIcon as={LockIcon} className="m-3 -mr-1" color={errors.newPassword ? "red" : "currentColor"} />
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
            {errors.newPassword && <Text className="text-red-500 text-sm ml-5">{errors.newPassword.message}</Text>}
          </VStack>

          <VStack space="xs">
            <Text className={`text-typography-500 ${errors.confirmPassword ? "text-red-500" : ""}`}>Confirme a senha*</Text>
            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: "A confirmação da senha é obrigatória",
                validate: (value) => 
                  value === getValues("newPassword") || "As senhas não coincidem"
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
