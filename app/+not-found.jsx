import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function index() {

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="h-screen w-screen flex justify-center items-center p-12">
        <Text className="text-6xl font-extrabold">404</Text>
        <Text className="text-[20px] font-bold">Esta tela não existe!</Text>

        <Link href="/" className="">
          <Text className="text-[14px] text-blue-500 underline">Voltar a página principal</Text>
        </Link>
      </View>
    </>
  );
};
