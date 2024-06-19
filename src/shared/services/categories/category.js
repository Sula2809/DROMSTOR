import { api } from "@/shared/services/axios";

// Категории
export const GetAllCategory = async () => {
  return await api.get("categories/");
};

export const AddCategory = async (token) => {
  return await api.post("categories/", null, { token });
};

// Подкатегории
export const GetAllSubcategory = async () => {
  return await api.get("subcategories/");
};

export const AddSubCategory = async (token, data) => {
  return await api.post("categories/", { data }, { token });
};

// Субкатегории
