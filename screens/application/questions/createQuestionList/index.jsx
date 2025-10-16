import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { SelectButton } from "@/components/application/SelectButton";

export const CreateQuestionList = () => {

  const { title, color, href } = useLocalSearchParams();

  return (
    <View className="flex-1">
      <QuestionListHeader title={title} color={color} />
      <View className="justify-center items-center flex-1">
        <Text className="text-2xl font-bold">Criação de questões em andamento...</Text>
        <SelectButton 
          placeholder="Data"
        />
      </View>
    </View>
  );
}