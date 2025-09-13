import { SubjectItem } from '@/components/application/SubjectItem';
import { HStack } from '@/components/ui/hstack';
import { Text } from "react-native";

export const QuestionListHeader = ({ title, color = "default" }) => {

  return (
    <HStack space="lg" className="bg-black w-full justify-between items-center p-4 px-6">
      <SubjectItem color={color} size={"md"} title={title} />
      <Text className="text-3xl font-bold color-white">ESTUDAÍ</Text>
    </HStack>
  );
}