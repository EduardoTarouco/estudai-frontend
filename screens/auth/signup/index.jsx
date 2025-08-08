import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from '@/components/ui/heading';
import { EyeIcon, EyeOffIcon, CalendarDaysIcon, AtSignIcon, MailIcon, LockIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export const SignUp = () => {

  const [showPassword, setShowPassword] = useState();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    router.replace("home");
  };

  const onSubmit = (data) => {
    setSubmittedData(data);
    console.log("Submitted Info: " + data);
  };

  return (
    <View className="flex-1 flex justify-center items-center gap-2 bg-yellow-200 p-5">
      <VStack className="self-start">
        <Heading size={"4xl"}>Cadastro</Heading>
        <Text>Cadastre-se e começe a utilizar o Estudai</Text>
      </VStack>

      <FormControl className="p-4 border rounded-lg border-outline-300">
        <VStack space="xl">
          <VStack space="xs">
            <Text className="text-typography-500">Nome</Text>
            <Input variant="rounded" size="xl" className="min-w-[250px]">
              <InputIcon as={AtSignIcon} className="m-3 -mr-1" />
              <InputField type="text" placeholder="John Jones" />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Email</Text>
            <Input variant="rounded" size="xl" className="min-w-[250px]">
              <InputIcon as={MailIcon} className="m-3 -mr-1" />
              <InputField type="text" placeholder="John@gmail.com" />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Senha</Text>
            <Input variant="rounded" size="xl" className="text-center">
              <InputIcon as={LockIcon} className="m-3 -mr-1" />
              <InputField type={showPassword ? "text" : "password"} placeholder="Senha" />
              <InputSlot className="pr-3" onPress={() => {setShowPassword(!showPassword)}}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Confirme a senha</Text>
            <Input variant="rounded" size="xl" className="text-center">
              <InputIcon as={LockIcon} className="m-3 -mr-1" />
              <InputField type={showPassword ? "text" : "password"} placeholder="Repetir senha" />
              <InputSlot className="pr-3" onPress={() => {setShowPassword(!showPassword)}}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Data de nascimento</Text>
            <Input variant="rounded" size="xl" className="text-center">
              <InputIcon as={CalendarDaysIcon} className="m-3 -mr-1" />
              <InputField type="text" placeholder="01/01/2000" />
            </Input>
          </VStack>

          <Button action={"primary"} variant={"solid"} size={"md"} isDisabled={false} 
          onPress={ handleSubmit }>
            <ButtonText>Enviar</ButtonText>
          </Button>

        </VStack>
      </FormControl>    
    </View>
  );
};
