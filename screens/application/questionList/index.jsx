import { EstudaiHeader } from "@/components/application/EstudaiHeader";
import { View, Text } from "react-native";

export const QuestionList = () => {

  return (
    <View className="flex-1">
      <EstudaiHeader />
      <View className="justify-center items-center flex-1">
        <Text className="text-2xl text-center">Question list screen working...</Text>
      </View>
    </View>
  );
}