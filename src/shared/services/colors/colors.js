import { api } from "@/shared/services/axios";

export const GetColors = async () => {
  try {
    const responseColors = await api.get("colors/");
    if (responseColors.status === 200) {
      return responseColors.data;
    } else {
      console.warn("Unexpected response status:", responseColors.status);
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch colors:", error);
    throw error;
  }
};

export const AddColors = async () => {
  return await api.post("colors/");
};

export const DeleteColors = async (token, id) => {
  return await api.post(`colors/${id}`);
};
