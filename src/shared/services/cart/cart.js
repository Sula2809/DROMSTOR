import { api } from "@/shared/services/axios";

export const GetCartItems = async () => {
  try {
    return await api.get("cart/");
  } catch (error) {
    console.error("Failed to get cart items", error);
    throw error;
  }
};

export const AddCartItems = async (id, token) => {
  try {
    const res = await api.post(`products/${id}/add`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.error("Failed to add cart items", error);
    throw error;
  }
};
