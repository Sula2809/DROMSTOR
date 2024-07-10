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

export const AddFavoriteItem = async (token, id) => {
  try {
    const response = await api.post(`products/${id}/favorite_add/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error to add favorite item", error);
  }
};
