import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text, TouchableOpacity, View } from "react-native";
import { Check, Trash, X } from "lucide-react-native";
import { useSession } from '@/contexts/AuthContext';
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Icon } from '@/components/ui/icon';
import { useRouter } from "expo-router";
import axios from 'axios';

export const QuestionListItem = ({ onExclusion, questionListId, questionList, questionListHeaderTitle, title, description, creationDate, total, correct, wrong, mainColor = "default" }) => {

  const { getAuthHeaders } = useSession();

  const router = useRouter();
  const answered = correct + wrong;
  const percentage = Math.round((answered * 100) / total);

  const date = new Date(creationDate);
  const localDate = date.toLocaleDateString("pt-BR");
  const borderColorVariantStyles = {
    default: "border-gray-500",
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500"
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={questionList.length === 0}
      className={`${questionList.length === 0 ? "opacity-70" : ""}`}
      onPress={() => {
        router.push({ pathname: "questions/answer-questions", params: { questionListHeaderTitle, color: mainColor, percentage, questionList } });
      }}
    >
      <VStack space="sm" className={`bg-gray-300 ${borderColorVariantStyles[mainColor]} border-l-8 p-4 mb-4 rounded-xl flex-1`}>
        <View className="flex-row justify-between items-center ">
          <Heading size="xl">{title}</Heading>
          <TouchableOpacity 
            activeOpacity={0.7}
            className="p-2 bg-red-500 rounded-lg items-center"
            onPress={async () => {
              try {
                const response = await axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/custom-lists/${questionListId}`, getAuthHeaders());
                console.log(`Resposta da exclusão para o ID ${questionListId}: `, response.data);
                onExclusion();
              } catch (error) {
                console.log("Erro ao excluir lista de questões: ", error.response.data);
              }
            }}>
            <Icon className="text-white" as={Trash}/>
          </TouchableOpacity>
        </View>

        {description && <Text>{description}</Text>}

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
