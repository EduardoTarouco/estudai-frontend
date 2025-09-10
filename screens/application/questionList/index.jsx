import { EstudaiHeader } from "@/components/application/EstudaiHeader";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export const QuestionList = () => {

  const params = useLocalSearchParams();
  console.log(params);

  return (
    <View className="flex-1">
      <EstudaiHeader />
      <View className="justify-center items-center flex-1">
        <Text className="text-2xl text-center">Question list screen working...</Text>
        <Text>Params: {JSON.stringify(params)}</Text>
      </View>
    </View>
  );
}