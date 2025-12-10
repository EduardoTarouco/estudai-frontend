import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@/components/ui/modal";
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from '@/components/ui/checkbox';
import { SelectButton } from "@/components/application/SelectButton";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Icon, CloseIcon, CheckIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { MaskedTextInput } from 'react-native-mask-text';
import { Controller, useForm } from "react-hook-form";
import { useSession } from "@/contexts/AuthContext";
import { usePopUp } from "@/contexts/PopUpContext";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "react-native";
import { useState } from "react";
import axios from "axios";

export const CreateQuestionListModal = ({ onCreated, disciplina = null }) => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        name: "",
        description: "",
        filterYear: "2022",
        filterSubject: disciplina,
        questionsCount: "",
        includeAnswered: false,
        questionIds: []
    }
  });

  const { getAuthHeaders } = useSession();
  const popUp = usePopUp();
  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL
  const [showModal, setShowModal] = useState(false);
  const [incluirRespondidas, setIncluirRespondidas] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Garante que filterSubject seja enviado (obrigatório no backend)
      const payload = {
        name: data.name,
        description: data.description,
        filterSubject: data.filterSubject || disciplina,
        filterYear: data.filterYear ? parseInt(data.filterYear) : null,
        questionsCount: data.questionsCount ? parseInt(data.questionsCount) : null,
        includeAnswered: data.includeAnswered || false
      };

      const response = await axios.post(baseBackendUrl + "/custom-lists", payload, getAuthHeaders());
      console.log("Lista de questões criada com sucesso: ", response.data);
      setShowModal(false);
      onCreated();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        popUp.showDefaultToast("Erro ao criar lista de questões", error.response.data.message, "negative", "top");
      }
      console.error("Erro ao realizar cadastro", error.response);
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
                <Text className={`text-typography-500 ${errors.name ? "text-red-500" : ""}`}>Nome*</Text>
                <Controller
                  control={control}
                  name="name"
                  rules={{ required: "O nome é obrigatório" }}
                  render={({ field: { onChange, value } }) => (
                    <Input variant="rounded" size="xl" className={`min-w-[250px] text-center ${errors.name ? "border-2" : ""}`} isInvalid={errors.name}>
                      <InputField
                        placeholder="Nome da lista"
                        value={value}
                        onChangeText={onChange}
                      />
                    </Input>
                  )}
                />
                {errors.name && <Text className="text-red-500 text-sm ml-5">{errors.name.message}</Text>}
              </VStack>

              <VStack space="xs">
                <Text className="text-typography-500">Descrição</Text>
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { onChange, value } }) => (
                    <Textarea variant="rounded" size="xl" className="min-w-[250px] text-center">
                      <TextareaInput
                        placeholder="Descrição da lista"
                        value={value}
                        onChangeText={onChange}
                      />
                    </Textarea>
                  )}
                />
              </VStack>

              <VStack space="xs">
                <Controller
                  control={control}
                  name="filterYear"
                  render={({ field: { onChange, value } }) => (
                    <SelectButton
                      className={`min-w-[250px] text-center ${errors.filterYear ? "border-2" : ""}`}
                      setSelected={onChange}
                      selectedValue={value}
                      title="Ano*"
                      items={["2022", "2023"]}
                    />
                  )}
                />
              </VStack>

              <VStack space="xs">
                <Controller
                  control={control}
                  name="includeAnswered"
                  render={({ field: { onChange, value } }) => (
                    <Checkbox 
                      size="lg"
                      isChecked={value}
                      onChange={() => {
                        onChange(!value); 
                        setIncluirRespondidas(!incluirRespondidas);
                        // setValue("includeCorrect", false);
                        // setValue("includeWrong", false);
                      }}
                    >
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Questões respondidas</CheckboxLabel>
                    </Checkbox>
                  )}
                />
                  {/* Código ainda não integrado
                  <HStack space="md" className="ml-5">
                    <Controller
                      control={control}
                      name="includeCorrect"
                      render={({ field: { onChange, value } }) => (
                        <Checkbox 
                          size="lg"
                          isDisabled={!incluirRespondidas}
                          isChecked={value}
                          onChange={onChange}
                        >
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Certas</CheckboxLabel>
                        </Checkbox>
                      )}
                    />
                    
                    <Controller
                      control={control}
                      name="includeWrong"
                      render={({ field: { onChange, value } }) => (
                        <Checkbox 
                          size="lg"
                          isDisabled={!incluirRespondidas}
                          isChecked={value}
                          onChange={onChange}
                        >
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                          <CheckboxLabel>Erradas</CheckboxLabel>
                        </Checkbox>
                      )}
                    />
                  </HStack> */}
              </VStack>
              <VStack space="xs">
                <Text className={`text-typography-500 ${errors.questionsCount ? "text-red-500" : ""}`}>Quantidade de questoes*</Text>
                <Controller
                  control={control}
                  name="questionsCount"
                  rules={{
                    required: "É obrigatório informar a quantidade de questões",
                    max: {value: 20, message: "O máximo de questões por lista é 20" },
                    min: {value: 1,  message: "O mínimo de questões por lista é 1" }
                  }}
                  render={({ field: { onChange, value } }) => (
                  <Input variant="rounded" size="xl" className={`text-center ${errors.questionsCount ? "border-2" : ""}`} isInvalid={errors.questionsCount}>
                    <MaskedTextInput
                      style={{flex: 1, paddingHorizontal: 14}}
                      mask="99"
                      type="text"
                      placeholder="01"
                      keyboardType="numeric"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
                />
                {errors.questionsCount && <Text className="text-red-500 text-sm ml-5">{errors.questionsCount.message}</Text>}
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="solid"
              action="negative"
              className="mr-3 border-black border-2 border-b-4 rounded-3xl"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button
              className="bg-blue-500 border-black border-2 border-b-4 rounded-3xl"
              onPress={handleSubmit(onSubmit)}
            >
              <ButtonText>Criar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button
        action={"primary"}
        variant={"solid"}
        size={"lg"}
        className="bg-green-500 w-full rounded-3xl border-black border-2 border-b-4 mb-2"
        onPress={() => { setShowModal(true) }}
      >
        <ButtonText className="text-white">Nova lista</ButtonText>
      </Button>
    </>
  );
};
