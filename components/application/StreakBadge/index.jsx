import { useFocusEffect } from "@react-navigation/native";
import { useSession } from "@/contexts/AuthContext";
import { useCallback, useState } from "react";
import { Flame } from "lucide-react-native";
import { View, Text } from "react-native";
import axios from "axios";

const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

export const StreakBadge = () => {

  const [todayStreak, setTodayStreak] = useState(null);
  const { getAuthHeaders } = useSession();

  const fetchStreak = async () => {
    try {
      const streak = await axios.get(`${baseBackendUrl}/auth/me`, getAuthHeaders());
      setTodayStreak(streak.data.streakDays);
    } catch (error) {
      console.error("Error fetching streak data: ", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchStreak();
    }, [])
  );

  return (
    <View className="bg-gray-950 flex-row items-center justify-center w-full rounded-xl p-3 py-5 gap-8">
      <Flame size={96} strokeWidth={3} color="lime" />
      <Text className="text-5xl font-extrabold text-white">{String(todayStreak ?? 0).padStart(3, "0")}</Text>
    </View>
  );
}