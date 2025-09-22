import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text, View } from "react-native";

export const QuestionListItem = ({ title, creationDate, total, answered, correct, wrong }) => {

  return (
    <View className="bg-gray-300 p-4 mb-4 rounded-lg flex-row justify-between items-center gap-2">
      <VStack space="md">
        <HStack space="lg">
          <Text>{title}</Text>
          <Text>{creationDate}</Text>
        </HStack>
        <HStack space="md">
          <Text>{answered} / {total}</Text>
          <Text>{correct}</Text>
          <Text>{wrong}</Text>
        </HStack>
      </VStack>
    </View>
  );
}