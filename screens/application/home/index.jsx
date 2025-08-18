import { Button, ButtonText } from "@/components/ui/button";
import { useSession } from "../../../contexts/AuthContext";
import { Text, View } from "react-native";

export const Home = () => {
  
  const { signOut } = useSession();

  return (
    <View className="h-screen w-screen flex justify-center items-center">
      <Text className="text-3xl font-bold">Home page working!</Text>

      <Button 
        action={"primary"} 
        variant={"solid"} 
        size={"lg"} 
        onPress={signOut()}
      >
        <ButtonText>Log-out</ButtonText>
      </Button>
    </View>
  );
};
