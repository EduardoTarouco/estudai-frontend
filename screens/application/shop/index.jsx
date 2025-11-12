import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Shop() {
  const recompensas = [
    { titulo: "Curso Online", descricao: "Curso online preparatório para o ENEM", preco: 1100, icone: "📚" },
    { titulo: "Notebook Lenovo", descricao: "Notebook Lenovo IdeaPad 3i, Intel Core i5, 8GB RAM, 256GB SSD", preco: 2500, icone: "💻" },
    { titulo: "Livros", descricao: "Livros para ajudar no desenvolvimento da leitura", preco: 550, icone: "📖" },
    { titulo: "Kit Escolar", descricao: "Mochila, Cadernos, Canetas, Lápis e Livros", preco: 1000, icone: "🖊️" },
    { titulo: "Tablet", descricao: "Tablet Samsung 1GB RAM e processador Quad-Core", preco: 2000, icone: "📱" },
    { titulo: "Mesa de estudos", descricao: "Uma mesa para auxiliar em sua organização", preco: 1400, icone: "🪑" },
  ];

  return (
    <ScrollView className="flex-1 bg-blue-500 px-4 pt-10">
      {/* Top Bar */}
      <View className="flex-row justify-center space-x-8 mb-6">
        <View className="flex-row items-center">
          <Text className="text-2xl mr-1">🔥</Text>
          <Text className="text-white text-lg font-bold">11</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-2xl mr-1">💎</Text>
          <Text className="text-white text-lg font-bold">1000</Text>
        </View>
      </View>

      {/* Título */}
      <Text className="text-white text-3xl font-extrabold text-center mb-3">
        Loja de Recompensas
      </Text>

      {/* Filtros */}
      <View className="flex-row flex-wrap justify-center gap-2 mb-6">
        <TouchableOpacity disabled className="bg-blue-600 px-3 py-1 rounded-full opacity-50">
          <Text className="text-white text-sm">🌐 Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled className="bg-blue-600 px-3 py-1 rounded-full opacity-50">
          <Text className="text-white text-sm">💻 Eletrônicos</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled className="bg-blue-600 px-3 py-1 rounded-full opacity-50">
          <Text className="text-white text-sm">✏️ Material Escolar</Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View className="flex-row flex-wrap justify-center gap-4 mb-10">
        {recompensas.map((item, index) => (
          <View
            key={index}
            className="bg-white w-40 rounded-2xl p-4 items-center shadow"
          >
            <Text className="text-4xl mb-2">{item.icone}</Text>
            <Text className="font-bold text-center text-base mb-1">
              {item.titulo}
            </Text>
            <Text className="text-gray-600 text-center text-xs mb-3">
              {item.descricao}
            </Text>
            <Text className="text-cyan-500 font-bold mb-2">
              💎 {item.preco}
            </Text>
            <TouchableOpacity
              disabled
              className="bg-green-500 rounded-full px-4 py-1 opacity-50"
            >
              <Text className="text-white font-semibold text-sm">Resgatar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
