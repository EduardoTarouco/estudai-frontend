import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Globe, Laptop, Book } from "lucide-react-native";
import { View } from "react-native";

const CATEGORIES = [
  { value: "TODOS", label: "Todos", icon: Globe },
  { value: "ELETRONICOS", label: "Eletrônicos", icon: Laptop },
  { value: "MATERIAL_ESCOLAR", label: "Material Escolar", icon: Book },
];

/**
 * Componente de filtro por categoria de recompensas
 * @param {string} selectedCategory - Categoria selecionada
 * @param {function} onCategoryChange - Função chamada ao mudar categoria
 */
export const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <View className="bg-gray-950 px-4 py-3">
      <HStack space="sm">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.value;

          return (
            <Button
              key={category.value}
              action={isSelected ? "primary" : "secondary"}
              variant={isSelected ? "solid" : "outline"}
              size="sm"
              onPress={() => onCategoryChange(category.value)}
              className={`flex-1 rounded-lg ${isSelected ? "bg-blue-500" : "bg-white"}`}
            >
              <HStack space="xs" className="items-center justify-center">
                <Icon size={16} color={isSelected ? "white" : "#3b82f6"} />
                <ButtonText className={isSelected ? "text-white" : "text-black"}>
                  {category.label}
                </ButtonText>
              </HStack>
            </Button>
          );
        })}
      </HStack>
    </View>
  );
};




