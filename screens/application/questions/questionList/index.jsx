import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@/components/ui/modal";
import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { QuestionListItem } from "@/components/application/QuestionListItem";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/componentes/ui/heading";
import { View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateQuestionListModal = () => {

  const [showModal, setShowModal] = useState(false);

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
            <Heading size="lg">Modal Title</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>This is the modal body. You can add any content here.</Text>
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

export const QuestionList = () => {

  const [questions, setQuestions] = useState([]);

  const { title, color, href } = useLocalSearchParams();
  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ajustar para o endpoint correto posteriormente, atualmente, aponta as listas mockadas
        const response = await axios.get(`${baseBackendUrl}/${href}`);
        setQuestions(response.data);
      } catch (error) {
        console.error("Erro ao buscar questões:", error);
      }
    }

    fetchData();
  }, [baseBackendUrl, href]);

  return (
    <View className="flex-1">
      <QuestionListHeader title={title} color={color} />
      <View className="justify-center items-center flex-1 p-4">
        <CreateQuestionListModal />
        <FlatList
          className="w-full p-2"
          data={questions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <QuestionListItem
              mainColor={color}
              title={item.title}
              total={item.questionsId?.length || "nulo"}
              correct={item.right?.length || "nulo"}
              wrong={item.wrong?.length || "nulo"}
              creationDate={item.creationDate}
            />
          )}
        />
      </View>
    </View>
  );
}
