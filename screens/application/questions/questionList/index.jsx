import { CreateQuestionListModal } from "@/components/application/CreateQuestionListModal";
import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { QuestionListItem } from "@/components/application/QuestionListItem";
import { View, Text, FlatList } from "react-native";
import { useSession } from "@/contexts/AuthContext";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios";

export const QuestionList = () => {

  const [questions, setQuestions] = useState([]);

  const { getAuthHeaders } = useSession();
  const { title, color, href } = useLocalSearchParams();
  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

  const fetchData = useCallback(async () => {
    try {
      // Filtra listas por matéria usando o parâmetro subject
      const url = href 
        ? `${baseBackendUrl}/custom-lists?subject=${href}`
        : `${baseBackendUrl}/custom-lists`;
      const response = await axios.get(url, getAuthHeaders());
      setQuestions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar questões:", error);
    }
  }, [href, baseBackendUrl, getAuthHeaders]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Atualiza os dados quando a tela recebe foco (quando volta de outra tela)
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  return (
    <View className="flex-1">
      <QuestionListHeader title={title} color={color} />
      <View className="justify-center items-center flex-1 p-4">
        <CreateQuestionListModal disciplina={href} onCreated={fetchData} />
        <FlatList
          className="w-full p-2"
          data={questions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <QuestionListItem
              list={item}
              onExclusion={fetchData}
              questionListHeaderTitle={title}
              mainColor={color}
              questionListId={item.id}
              questionList={item.questions}
              title={item.name}
              description={item?.description}
              total={item.questions?.length || item.questionsCount || 0}
              correct={item.correctAnswers || 0}
              wrong={item.wrongAnswers || 0}
              creationDate={item.createdAt}
            />
          )}
          ListEmptyComponent={<Text className="text-2xl font-bold text-center">Crie uma nova lista de questões para que ela apareça aqui!</Text>}
        />
      </View>
    </View>
  );
}
