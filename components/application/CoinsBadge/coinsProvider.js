import axios from "axios";

const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

export const getUserData = async (headers) => {
  try {
    const response = await axios.get(`${baseBackendUrl}/auth/me`, headers);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data: ", error);
  }
}

export const getUserCoins = async (headers) => {
  try {
    const response = await axios.get(`${baseBackendUrl}/auth/me`, headers);
    return response.data.coins;
  } catch (error) {
    throw new Error(`Failed to fetch user coins: ${error.message}`);
  }
}