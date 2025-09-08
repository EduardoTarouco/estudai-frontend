import { Button, ButtonText } from "@/components/ui/button";
import { View, Text } from "react-native";
import { router } from "expo-router";

export const Profile = () => {

  return (
    <View>
      <Text>Profile screen working...</Text>

      <Button
        action={"primary"} 
        variant={"solid"} 
        size={"lg"} 
        onPress={async () => {router.replace("/home")}}
      >
        <ButtonText>Voltar</ButtonText>
      </Button>
    </View>
  );
}