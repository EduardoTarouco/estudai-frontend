import { useSession } from "@/contexts/AuthContext";
import { getTodayStreak } from "./streakProvider";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react-native";
import { View, Text } from "react-native";

export const StreakBadge = () => {

  const [todayStreak, setTodayStreak] = useState(null);
  const { getAuthHeaders } = useSession();

  const fetchStreak = async () => {
    try {
      const streak = await getTodayStreak(getAuthHeaders());
      setTodayStreak(streak);
    } catch (error) {
      console.error("Error fetching streak data: ", error);
    }
  };

  useEffect(() => {
    fetchStreak();
    console.log("");
  }, []);

  return (
    <View className="bg-gray-950 flex-row items-center justify-center w-full rounded-xl p-3 py-5 gap-8">
      <Flame size={96} strokeWidth={3} color="lime" />
      <Text className="text-5xl font-extrabold text-white">{String(todayStreak ?? 0).padStart(3, "0")}</Text>
    </View>
  );
}