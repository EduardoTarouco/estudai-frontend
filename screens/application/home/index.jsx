import { EstudaiHeader } from "@/components/application/EstudaiHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
import { useSession } from "@/contexts/AuthContext";
import { VStack } from '@/components/ui/vstack';

export const Home = () => {
  
  const { signOut } = useSession();

  return (
    <SafeAreaView className="h-screen w-screen flex justify-center items-center">
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
    </SafeAreaView>
  );
};
