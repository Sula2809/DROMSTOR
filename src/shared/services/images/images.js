import { api } from "@/shared/services/axios";

export const GetAllImages = async (id) => {
  try {
    const res = await api.get(`image/list/${id}/`);
    if (res) {
      console.log("res: ", res);
      return res.data;
    } else {
      console.warn("Unexpected response status:", res.status);
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch colors:", error);
    throw error;
  }
};
