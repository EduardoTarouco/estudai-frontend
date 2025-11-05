import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@/components/ui/modal";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { Controller, useForm } from "react-hook-form";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "react-native";
import { useState } from "react";

export const CreateQuestionListModal = () => {

  const [showModal, setShowModal] = useState(false);
  const { control, getValues, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nome: ""
    }
  });

  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL

  const onSubmit = async () => {
    try {
      //const response = await axios.post(baseBackendUrl + "/auth/cadastro", data);
      console.log("Resposta do backend: ", response.data);
    } catch (error) {
      //console.log(error.response.data);
    }
  }

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="md"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Criar nova lista de questões</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <VStack space="xl">
              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.nome ? "text-red-500" : ""}`}>Nome*</Text>
                <Controller
                  control={control}
                  name="nome"
                  rules={{ required: "O nome é obrigatório" }}
                  render={({ field: { onChange, value } }) => (
                    <Input variant="rounded" size="xl" className={`min-w-[250px] text-center ${errors.nome ? "border-2" : ""}`} isInvalid={errors.nome}>
                      <InputIcon as={AtSignIcon} className="m-3 -mr-1" color={errors.nome ? "red" : "currentColor"} />
                      <InputField
                        placeholder="John Jones"
                        value={value}
                        onChangeText={onChange}
                      />
                    </Input>
                  )}
                />
                {errors.nome && <Text className="text-red-500 text-sm ml-5">{errors.nome.message}</Text>}
              </VStack>
              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.descricao ? "text-red-500" : ""}`}>Descrição*</Text>
                <Controller
                  control={control}
                  name="descricao"
                  render={({ field: { onChange, value } }) => (
                    <Input variant="rounded" size="xl" className={`min-w-[250px] text-center ${errors.descricao ? "border-2" : ""}`} isInvalid={errors.nome}>
                      <InputIcon as={AtSignIcon} className="m-3 -mr-1" color={errors.descricao ? "red" : "currentColor"} />
                      <InputField
                        value={value}
                        onChangeText={onChange}
                      />
                    </Input>
                  )}
                />
                {errors.descricao && <Text className="text-red-500 text-sm ml-5">{errors.descricao.message}</Text>}
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              className="mr-3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button
        action={"primary"}
        variant={"solid"}
        size={"lg"}
        className="w-full mb-2 bg-blue-500"
        onPress={() => { setShowModal(true) }}
      >
        <ButtonText>Nova lista</ButtonText>
      </Button>
    </>
  );
};
