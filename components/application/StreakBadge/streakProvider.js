import axios from "axios";

const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

export const getStreakData = async (headers) => {
  try {
    const response = await axios.get(`${baseBackendUrl}/study-streak`, headers);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch streak data: ", error);
  }
}

export const getTodayStreak = async (headers) => {
  try {
    const response = await axios.get(`${baseBackendUrl}/study-streak`, headers);
    return response.data.consecutiveDays;
  } catch (error) {
    throw new Error(`Failed to fetch today streak: ${error.message}`);
  }
}