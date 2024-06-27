import { api } from "@/shared/services/axios";

// Категории
export const GetAllCategory = async () => {
  return await api.get("categories/");
};

export const AddCategory = async (data, token) => {
  return await api.post("categories/", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const DeleteCategory = async (token, id) => {
  return await api.delete(`categories/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const EditCategory = async (token, data, id) => {
  return await api.put(`categories/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Подкатегории
export const GetAllSubcategory = async () => {
  return await api.get("subcategories/");
};

export const AddSubCategory = async (token, data) => {
  return await api.post(
    "categories/",
    { data },
    { headers: { Authorization: `Bearer ${token}` } },
  );
};

export const DeleteSubCategory = async (token, id) => {
  return await api.delete(`categories/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const EditSubCategory = async (token, data, id) => {
  return await api.put(`categories/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Субкатегории
export const GetAllSubSubcategory = async () => {
  return await api.get("subsubcategories/");
};

export const AddSubSubCategory = async (token, data) => {
  return await api.post("categories/", { data }, { token });
};
