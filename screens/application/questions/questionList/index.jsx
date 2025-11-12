import { CreateQuestionListModal } from "@/components/application/CreateQuestionListModal";
import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { QuestionListItem } from "@/components/application/QuestionListItem";
import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import axios from "axios";

export const QuestionList = () => {

  const [questions, setQuestions] = useState([]);

  const { title, color, href } = useLocalSearchParams();
  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ajustar para o endpoint correto posteriormente, atualmente, aponta para as listas mockadas
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
        <CreateQuestionListModal disciplina={href} />
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
              questionListHeaderTitle={title}
            />
          )}
          ListEmptyComponent={<Text className="text-2xl font-bold text-center">Crie uma nova lista de questões para que ela apareça aqui!</Text>}
        />
      </View>
    </View>
  );
}
