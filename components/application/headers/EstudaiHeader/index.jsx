import { HStack } from '@/components/ui/hstack';
import { Text } from "react-native";

export const EstudaiHeader = () => {

  return (
    <HStack space="lg" className="bg-black w-full justify-center items-center p-4 px-6">
      <Text className="text-3xl font-bold color-white">ESTUDAÍ</Text>
    </HStack>
  );
}