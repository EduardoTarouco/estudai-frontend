import { ShopHeader } from "@/components/application/headers/ShopHeader";
import { CategoryFilter } from "@/components/application/CategoryFilter";
import { RewardCard } from "@/components/application/RewardCard";
import { RedeemModal } from "@/components/application/RedeemModal";
import { useSession } from "@/contexts/AuthContext";
import { usePopUp } from "@/contexts/PopUpContext";
import { View, FlatList, ScrollView } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios";

const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

export const Shop = () => {
  const { session, getAuthHeaders } = useSession();
  const { showDefaultToast } = usePopUp();
  
  const [rewards, setRewards] = useState([]);
  const [filteredRewards, setFilteredRewards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [userCoins, setUserCoins] = useState(0);
  const [userStreak, setUserStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Buscar dados do usuário
  const fetchUserData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${baseBackendUrl}/auth/me`,
        getAuthHeaders()
      );
      setUserCoins(response.data.coins || 0);
      setUserStreak(response.data.streakDays || 0);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  }, [getAuthHeaders]);

  // Buscar recompensas
  const fetchRewards = useCallback(async () => {
    try {
      const url = selectedCategory === "TODOS"
        ? `${baseBackendUrl}/rewards`
        : `${baseBackendUrl}/rewards/category/${selectedCategory}`;
      
      const response = await axios.get(url, getAuthHeaders());
      setRewards(response.data);
      setFilteredRewards(response.data);
    } catch (error) {
      console.error("Erro ao buscar recompensas:", error);
      showDefaultToast(
        "Erro",
        "Não foi possível carregar as recompensas",
        "error",
        "top"
      );
    }
  }, [selectedCategory, getAuthHeaders, showDefaultToast]);

  // Atualizar dados quando a tela recebe foco
  useFocusEffect(
    useCallback(() => {
      fetchUserData();
      fetchRewards();
    }, [fetchUserData, fetchRewards])
  );

  // Filtrar recompensas quando categoria muda
  useEffect(() => {
    fetchRewards();
  }, [selectedCategory, fetchRewards]);

  // Função para resgatar recompensa
  const handleRedeem = async (reward) => {
    if (userCoins < reward.cost) {
      showDefaultToast(
        "Moedas insuficientes",
        "Você não tem moedas suficientes para resgatar esta recompensa",
        "error",
        "top"
      );
      return;
    }

    setSelectedReward(reward);
    setIsModalOpen(true);
  };

  // Confirmar resgate
  const confirmRedeem = async () => {
    if (!selectedReward) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${baseBackendUrl}/rewards/redeem`,
        { rewardId: selectedReward.id },
        getAuthHeaders()
      );

      // Atualizar moedas do usuário
      setUserCoins(userCoins - selectedReward.cost);
      
      showDefaultToast(
        "Resgate realizado!",
        `Você resgatou ${selectedReward.title}. Um email de confirmação foi enviado.`,
        "success",
        "top"
      );

      setIsModalOpen(false);
      setSelectedReward(null);
    } catch (error) {
      console.error("Erro ao resgatar recompensa:", error);
      const errorMessage = error.response?.data?.message || "Erro ao resgatar recompensa";
      showDefaultToast(
        "Erro",
        errorMessage,
        "error",
        "top"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ShopHeader coins={userCoins} streak={userStreak} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <ScrollView className="flex-1 bg-white">
        <View className="flex-row flex-wrap justify-center px-2 py-4">
          {filteredRewards.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              onRedeem={handleRedeem}
              canAfford={userCoins >= reward.cost}
            />
          ))}
        </View>
      </ScrollView>

      <RedeemModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedReward(null);
        }}
        reward={selectedReward}
        onConfirm={confirmRedeem}
        isLoading={isLoading}
      />
    </View>
  );
};
