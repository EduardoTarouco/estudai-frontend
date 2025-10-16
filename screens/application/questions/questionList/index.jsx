import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { QuestionListItem } from "@/components/application/QuestionListItem";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

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
        <Button 
          action={"primary"} 
          variant={"solid"} 
          size={"lg"} 
          className="w-full mb-2 bg-blue-500"
          onPress={() => {router.push({ 
            pathname:`/questions/createQuestionList`, 
            params: { title, href, color }});
          }}
        >
          <ButtonText>Nova lista</ButtonText>
        </Button>
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