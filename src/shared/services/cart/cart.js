import { api } from "@/shared/services/axios";

export const GetCartItems = async () => {
  try {
    return await api.get("cart/");
  } catch (error) {
    console.error("Failed to get cart items", error);
    throw error;
  }
};

export const AddCartItems = async (id, token, data) => {
  console.log("data::", data, id, token);
  try {
    const res = await api.post(`products/${id}/add/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("data is def:- ", res);
    return res;
  } catch (error) {
    console.error("Failed to add cart items", error);
    throw error;
  }
};
