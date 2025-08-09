import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from '@/components/ui/heading';
import { useForm, Controller } from 'react-hook-form'
import { EyeIcon, EyeOffIcon, CalendarDaysIcon, AtSignIcon, MailIcon, LockIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export const SignUp = () => {
  const { control, getValues, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: ""
    }
  });

  const [showPassword, setShowPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState();

  // Lógica do que acontece ao enviar o formulário com sucesso
  // Essa função só é chamada se os dados forem validados
  const onSubmit = (data) => {
    console.log("Submitted Info: " + data);
    router.replace("home");
  };

  return (
    <View className="flex-1 flex justify-center items-center gap-2 bg-yellow-200 p-5">
      <VStack className="flex justify-center items-center m-2">
        <Heading size={"4xl"}>Cadastro</Heading>
        <Text>Cadastre-se e começe a utilizar o Estudai</Text>
      </VStack>

      <FormControl className="p-5 border rounded-lg border-outline-300 bg-gray-50">
        <VStack space="xl">

          {/* 
            * Os principais campos (nome, email, senha, repetir senha e data de nascimento, respectivamente) estão localizados em VStacks (agrupamentos verticais) abaixo: 
            */}
          <VStack space="xs">
            <Text className={`text-typography-500 ${errors.name ? "text-red-500" : ""}`}>Nome</Text>
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
                  placeholder="John Jones"
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
            <Text className={`text-typography-500 ${errors.email ? "text-red-500" : ""}`}>Email</Text>
            {/* O regex abaixo valida se o email está ou não bem formatado, mas é uma validação básica
              * Para um diagrama melhor sobre o que ocorre de verdade, vale visitar o site https://www.regexplained.co.uk/ e colar o regex do pattern lá dentro
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
                <InputIcon as={MailIcon} className="m-3 -mr-1" color={errors.name ? "red" : "currentColor"} />
                <InputField
                  placeholder="John@gmail.com"
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
            <Text className={`text-typography-500 ${errors.password ? "text-red-500" : ""}`}>Senha</Text>
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
                <InputIcon as={LockIcon} className="m-3 -mr-1" color={errors.name ? "red" : "currentColor"} />
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
            <Text className={`text-typography-500 ${errors.confirmPassword ? "text-red-500" : ""}`}>Confirme a senha</Text>
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
                <InputIcon as={LockIcon} className="m-3 -mr-1" color={errors.name ? "red" : "currentColor"} />
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
            <Text className={`text-typography-500 ${errors.birthDate ? "text-red-500" : ""}`}>Data de nascimento</Text>
            <Controller
              control={control}
              name="birthDate"
              rules={{
                required: "A data de nascimento é obrigatória"
              }}
              render={({ field: { onChange, value } }) => (
              <Input variant="rounded" size="xl" className={`text-center ${errors.birthDate ? "border-2" : ""}`} isInvalid={errors.birthDate}>
                <InputIcon as={CalendarDaysIcon} className="m-3 -mr-1" color={errors.birthDate ? "red" : "currentColor"} />
                <InputField 
                  type="text" 
                  placeholder="01/01/2000" 
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
            size={"md"} 
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText>Enviar</ButtonText>
          </Button>

        </VStack>
      </FormControl>    
    </View>
  );
};
