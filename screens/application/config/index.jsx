import { EstudaiHeader } from "@/components/application/headers/EstudaiHeader";
import { View, Text } from "react-native";

export const Config = () => {

  return (
    <View className="flex-1">
      <EstudaiHeader />
      <View className="justify-center items-center flex-1">
        <Text className="text-2xl text-center">Config screen working...</Text>
      </View>
    </View>
  );
}