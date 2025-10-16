import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Check, X } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const QuestionListItem = ({ title, creationDate, total, correct, wrong, mainColor = "default" }) => {

  const answered = correct + wrong;
  const percentage = Math.round((answered * 100) / total);
  
  const date = new Date(creationDate);
  const localDate = date.toLocaleDateString("pt-BR");
  const borderColorVariantStyles = {
    default: "border-gray-500",
    blue: "border-blue-500",
    green:	"border-green-500",
    purple:	"border-purple-500",
    red: "border-red-500"
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
    >
      <VStack space="sm" className={`bg-gray-300 ${borderColorVariantStyles[mainColor]} border-l-8 p-4 mb-4 rounded-xl`}>
        <Heading size="xl">{title}</Heading>
        <Text>{localDate}</Text>
        <View className="flex-row justify-between">
          <Text>{answered} | {total}</Text>
          <HStack space="sm">
            <Check color="green" />
            <Text>{correct}</Text>
          </HStack>
          <HStack space="sm">
            <X color="red" />
            <Text>{wrong}</Text>
          </HStack>
        </View>
        <Progress value={percentage} className="w-full bg-gray-200 h-1" >
          <ProgressFilledTrack className="h-1" />
        </Progress>
      </VStack>
    </TouchableOpacity>
  );
}