import { EstudaiHeader } from "@/components/application/EstudaiHeader";
import { View, Text } from "react-native";

export const Config = () => {

  return (
    <View>
      <EstudaiHeader />
      <View className="justify-center items-center flex-1">
        <Text>Config screen working...</Text>
      </View>
    </View>
  );
}