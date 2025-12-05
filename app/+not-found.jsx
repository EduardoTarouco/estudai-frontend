import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  return (
    <View>
      <View className="h-screen w-screen flex justify-center items-center p-12">
        <Text className="text-6xl font-extrabold">404</Text>
        <Text className="text-[20px] font-bold">Esta tela não existe!</Text>
        
        <Pressable onPress={() => router.push('/home')}>
          <Text className="text-[14px] text-blue-500 underline">Voltar à página principal</Text>
        </Pressable>
      </View>
    </View>
  );
};
