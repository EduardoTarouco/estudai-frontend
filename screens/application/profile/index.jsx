import { EstudaiHeader } from "@/components/application/headers/EstudaiHeader";
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { DoorOpen, Gem, Flame, Scroll } from 'lucide-react-native';
import { useFocusEffect } from "@react-navigation/native";
import { useSession } from "@/contexts/AuthContext";
import { Divider } from '@/components/ui/divider';
import { View, Text, Image } from "react-native";
import { VStack } from '@/components/ui/vstack';
import { useCallback, useState } from "react";
import axios from "axios";

export const Profile = () => {

  const { signOut, getAuthHeaders, session } = useSession();
  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;
  const [userData, setUserData] = useState({});
  const [quantidadeListas, setQuantidadeListas] = useState(0);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseBackendUrl}/auth/me`, getAuthHeaders());
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const fetchQuantidadeListas = async () => {
    try {
      const response = await axios.get(`${baseBackendUrl}/custom-lists`, getAuthHeaders());
      setQuantidadeListas(response.data.length);
    } catch (error) {
      console.error("Error fetching list count: ", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
      fetchQuantidadeListas();
    }, [])
  );

  return (
    <View className="flex-1">
      <EstudaiHeader />
      <View className="items-center flex-1 gap-2 p-3">
        <View className="bg-gray-950 flex-row items-start w-full rounded-lg gap-2 p-4">
          <View className="flex-1">
            <Text className="text-3xl font-bold text-white">{session.name || "user_name"}</Text>
            <Divider className="my-0.5" />
            <Text className="text-xl text-gray-300">{userData?.email || "user_email"}</Text>
          </View>
          <Image 
            source={require("@/assets/images/profileScreen/mascote-up.png")} 
            resizeMode="contain"
            className="
              scale-150
              h-24
              w-24
            "/>
        </View>

        <View className="bg-gray-950 items-start w-full p-4 rounded-lg">
          <Text className="text-2xl font-bold text-gray-50">Streak atual:</Text>
            <View className="flex-row items-center gap-2">
              <Flame size={32} strokeWidth={2} color="lime" />
              <Text className="text-lg font-medium text-gray-50">{userData?.streakDays || 0}</Text>
            </View>

          <Divider className="my-2" />
          
          <Text className="text-2xl font-bold text-gray-50">Quantidade de moedas:</Text>
            <View className="flex-row items-center gap-2">
              <Gem size={32} strokeWidth={2} color="#60a5fa" />
              <Text className="text-lg font-medium text-gray-50">{userData?.coins || 0}</Text>
            </View>

          <Divider className="my-2" />

          <Text className="text-2xl font-bold text-gray-50">Quantidade de listas criadas</Text>
            <View className="flex-row items-center gap-2">
              <Scroll size={32} strokeWidth={2} color="gray" />
              <Text className="text-lg font-medium text-gray-50">{quantidadeListas ?? 0}</Text>
            </View>
        </View>

        <VStack space={"md"} className="w-full">
          <Button
            className="border-black justify-start rounded-3xl border-2 border-b-4"
            action={"negative"} 
            variant={"solid"} 
            size={"lg"} 
            onPress={signOut}
          >
            <ButtonIcon as={DoorOpen} className="mr-2" />
            <ButtonText>Sair da conta</ButtonText>
          </Button>
        </VStack>
      </View>
    </View>
  );
}