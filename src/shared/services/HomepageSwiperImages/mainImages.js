import { api } from "@/shared/services/axios";

export const GetMainImages = async () => {
  return await api.get(`main-images/`);
};

export const AddMainImages = async (formData, token) => {
  return await api.post("main-images/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const RemoveMainImages = async (token, id) => {
  return await api.delete(`main-images/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
