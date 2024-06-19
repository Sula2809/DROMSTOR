import { api } from "@/shared/services/axios";

export const GetFavoritesItems = async (token) => {
  try {
    const response = await api.get("favorite/my_favorites/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching favorite items:", error);
    throw error;
  }
};
