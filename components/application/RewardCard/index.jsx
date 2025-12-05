import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Gem, Wallet } from "lucide-react-native";

/**
 * Componente que representa um card de recompensa na loja
 * @param {object} reward - Objeto da recompensa
 * @param {function} onRedeem - Função chamada ao clicar em resgatar
 * @param {boolean} canAfford - Se o usuário tem moedas suficientes
 */
export const RewardCard = ({ reward, onRedeem, canAfford }) => {
  // Mapeamento de ícones por título (baseado no protótipo)
  const getIcon = (title) => {
    const iconMap = {
      "Curso Online": "📚",
      "Notebook Lenovo": "💻",
      "Livros": "📖",
      "Kit Escolar": "✏️",
      "Tablet": "📱",
      "Mesa de estudos": "🪑",
    };
    return iconMap[title] || "🎁";
  };

  return (
    <View className="bg-gray-100 rounded-lg p-4 m-2 w-[45%]">
      <VStack space="sm" className="items-center">
        {/* Ícone da recompensa */}
        <View className="w-16 h-16 items-center justify-center mb-2">
          <Text className="text-5xl">{getIcon(reward.title)}</Text>
        </View>

        {/* Título */}
        <Text className="text-base font-bold text-center text-gray-900 mb-1">
          {reward.title}
        </Text>

        {/* Descrição */}
        <Text className="text-xs text-center text-gray-600 px-1 mb-2" numberOfLines={2}>
          {reward.description}
        </Text>

        {/* Custo */}
        <HStack space="xs" className="items-center mb-2">
          <Gem size={18} color="#3b82f6" />
          <Text className="text-base font-semibold text-blue-600">
            {reward.cost}
          </Text>
        </HStack>

        {/* Botão de resgatar */}
        <TouchableOpacity
          onPress={() => onRedeem(reward)}
          disabled={!canAfford}
          className={`w-full rounded-lg py-2 px-4 ${
            canAfford ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <HStack space="xs" className="items-center justify-center">
            <Wallet size={14} color="white" />
            <Text className="text-white font-semibold text-sm">Resgatar</Text>
          </HStack>
        </TouchableOpacity>
      </VStack>
    </View>
  );
};




