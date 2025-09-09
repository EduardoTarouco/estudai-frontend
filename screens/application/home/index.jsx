import { EstudaiHeader } from "@/components/application/EstudaiHeader";
import { Button, ButtonText } from "@/components/ui/button";
import { useSession } from "@/contexts/AuthContext";
import { VStack } from '@/components/ui/vstack';
import { View } from "react-native";

export const Home = () => {
  
  const { signOut } = useSession();

  return (
    <View className="h-screen w-screen flex justify-center items-center">
      <EstudaiHeader />
      <VStack space="lg" className="flex-1">
        <Button 
          className="fixed right-2 top-3.5"
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
