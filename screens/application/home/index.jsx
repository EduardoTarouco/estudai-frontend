import { EstudaiHeader } from "@/components/application/EstudaiHeader";
import { Button, ButtonText } from "@/components/ui/button";
import { useSession } from "@/contexts/AuthContext";
import { VStack } from '@/components/ui/vstack';
import { Text, View } from "react-native";

export const Home = () => {
  
  const { signOut } = useSession();

  return (
    <View className="flex-1">
      <EstudaiHeader />
      <VStack space={"md"} className="flex-1 justify-center items-center">
        <Text className="text-2xl text-center">Home screen working...</Text>
        <Button
          action={"secondary"} 
          variant={"solid"} 
          size={"sm"} 
          onPress={async () => {await signOut()}}
        >
          <ButtonText>Log-out</ButtonText>
        </Button>
      </VStack>
    </View>
  );
};
