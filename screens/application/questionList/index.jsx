import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export const QuestionList = () => {

  const { title, color } = useLocalSearchParams();

  return (
    <View className="flex-1">
      <QuestionListHeader title={title} color={color} />
      <View className="justify-center items-center flex-1">
        <Text className="text-2xl text-center">Question list screen working...</Text>
      </View>
    </View>
  );
}