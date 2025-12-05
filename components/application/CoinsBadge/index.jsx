import { useSession } from "@/contexts/AuthContext";
import { getUserCoins } from "./coinsProvider";
import { useEffect, useState } from "react";
import { Coins } from "lucide-react-native";
import { View, Text } from "react-native";

export const CoinsBadge = () => {

  const [coins, setCoins] = useState(null);
  const { getAuthHeaders } = useSession();

  const fetchCoins = async () => {
    try {
      const streak = await getUserCoins(getAuthHeaders());
      setCoins(streak);
    } catch (error) {
      console.error("Error fetching coin data: ", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View className="bg-gray-950 flex-row items-center justify-center w-full rounded-xl p-3 py-5 gap-8">
      <Coins size={96} strokeWidth={3} color="yellow" />
      <Text className="text-5xl font-extrabold text-white">{String(coins ?? 0).padStart(4, "0")}</Text>
    </View>
  );
}