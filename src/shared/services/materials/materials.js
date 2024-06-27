import { api } from "@/shared/services/axios";

export const GetMaterials = async () => {
  try {
    const responseMaterials = await api.get("fabrics/");
    if (responseMaterials.status === 200) {
      return responseMaterials.data;
    } else {
      console.warn("Unexpected response status:", responseMaterials.status);
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch materials:", error);
    throw error;
  }
};

export const AddMaterials = async (token, data) => {
  return await api.post("fabrics/", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const DeleteMaterials = async (token, id) => {
  return await api.delete(`fabrics/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const EditMaterial = async (token, data, id) => {
  return await api.patch(`fabrics/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
