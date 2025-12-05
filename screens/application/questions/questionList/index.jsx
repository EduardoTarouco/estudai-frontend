import { CreateQuestionListModal } from "@/components/application/CreateQuestionListModal";
import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { QuestionListItem } from "@/components/application/QuestionListItem";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { useSession } from "@/contexts/AuthContext";
import { useState, useCallback } from "react";
import axios from "axios";

export const QuestionList = () => {

  const [questions, setQuestions] = useState([]);

  const { getAuthHeaders } = useSession();
  const { title, color, href } = useLocalSearchParams();
  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

  const fetchData = async () => {
    try {
      // Atualmente, puxa todas as listas, independentemente da disciplina
      const response = await axios.get(`${baseBackendUrl}/custom-lists`, getAuthHeaders());
      setQuestions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar questões:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [href])
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
              total={item.questionsId?.length || "nulo"}
              correct={item.right?.length || "nulo"}
              wrong={item.wrong?.length || "nulo"}
              creationDate={item.createdAt}
            />
          )}
          ListEmptyComponent={<Text className="text-2xl font-bold text-center">Crie uma nova lista de questões para que ela apareça aqui!</Text>}
        />
      </View>
    </View>
  );
}
