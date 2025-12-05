import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text, Image } from "react-native";
import { Flame, Gem, Lightbulb } from "lucide-react-native";
import { View } from "react-native";

/**
 * Header da tela de loja com título, moedas e streak
 * @param {number} coins - Quantidade de moedas do usuário
 * @param {number} streak - Quantidade de dias de streak
 */
export const ShopHeader = ({ coins = 0, streak = 0 }) => {
  return (
    <View className="w-full">
      {/* Barra superior preta com moedas e streak */}
      <View className="bg-black w-full">
        <HStack space="lg" className="justify-end items-center px-4 py-2">
          <HStack space="xs" className="items-center">
            <Flame size={20} color="#10b981" />
            <Text className="text-white font-semibold">{streak}</Text>
          </HStack>
          <HStack space="xs" className="items-center">
            <Gem size={20} color="#60a5fa" />
            <Text className="text-white font-semibold">{coins}</Text>
          </HStack>
        </HStack>
      </View>

      {/* Área azul claro com título e mascote */}
      <View className="bg-sky-200 w-full">
        <HStack space="md" className="justify-between items-center px-4 py-4">
          <Heading size="3xl" className="text-black font-bold">
            Loja de Recompensas
          </Heading>
          {/* Mascote - usando emoji como placeholder, pode ser substituído por imagem */}
          <View className="w-16 h-16 items-center justify-center">
            <Text className="text-5xl">💡</Text>
          </View>
        </HStack>
      </View>
    </View>
  );
};




