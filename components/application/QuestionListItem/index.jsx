import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text, TouchableOpacity, View } from "react-native";
import { useSession } from '@/contexts/AuthContext';
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Trash, Check, X } from "lucide-react-native";
import { Icon } from '@/components/ui/icon';
import { useRouter } from "expo-router";
import axios from 'axios';

export const QuestionListItem = ({ list, onExclusion, questionListId, questionList, questionListHeaderTitle, title, description, creationDate, total, correct, wrong, mainColor = "default" }) => {

  const { getAuthHeaders } = useSession();

  const router = useRouter();
  const answered = (correct || 0) + (wrong || 0);
  const percentage = total > 0 ? Math.round((answered * 100) / total) : 0;

  const date = new Date(creationDate);
  const localDate = date.toLocaleDateString("pt-BR");
  
  // Determina a cor da barra lateral baseado no progresso
  const getProgressColor = () => {
    if (percentage === 100) {
      return "border-green-500"; // Verde para concluída
    } else if (percentage >= 50) {
      return "border-yellow-500"; // Amarelo para metade ou mais
    } else {
      return "border-red-500"; // Vermelho para poucas respondidas
    }
  };

  const borderColorVariantStyles = {
    default: "border-gray-500",
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500",
    yellow: "border-yellow-500"
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={questionList.length === 0}
      className={`${questionList.length === 0 ? "opacity-70" : ""}`}
      onPress={() => {
        router.push({ pathname: "questions/answer-questions", params: { questionListHeaderTitle, color: mainColor, questionList: JSON.stringify(questionList), list: JSON.stringify(list) } });
      }}
    >
      <VStack space="sm" className={`bg-gray-300 ${getProgressColor()} border-l-8 p-4 mb-4 rounded-xl flex-1`}>
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

        {description && <Text className="text-gray-600">{description}</Text>}

        <Text className="text-gray-500 text-sm">{localDate}</Text>

        <View className="flex-row justify-between items-center mb-2">
          <Text className="font-semibold">{answered} / {total}</Text>
          <HStack space="md" className="items-center">
            <HStack space="xs" className="items-center">
              <Check color="green" size={18} />
              <Text className="font-semibold">{correct || 0}</Text>
            </HStack>
            <HStack space="xs" className="items-center">
              <X color="red" size={18} />
              <Text className="font-semibold">{wrong || 0}</Text>
            </HStack>
          </HStack>
        </View>

        <Progress value={percentage} className="w-full bg-gray-200 h-1" >
          <ProgressFilledTrack className="h-1" />
        </Progress>
      </VStack>
    </TouchableOpacity>
  );
}
