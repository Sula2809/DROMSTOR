import { api } from "@/shared/services/axios";

export const GetAllProducts = async (
  title,
  colors,
  min_price,
  max_price,
  category,
  subcategory,
  page,
) => {
  const params = new URLSearchParams();
  console.log(colors, min_price, max_price, category, subcategory);
  if (title) params.append("title", title);
  if (colors) params.append("colors", colors);
  if (min_price) params.append("min_price", min_price);
  if (max_price) params.append("max_price", max_price);
  if (category) params.append("category", category);
  if (subcategory) params.append("subcategory", subcategory);
  if (page) params.append("page", page);

  let url = "products/";

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    throw error; // Перебрасываем ошибку, чтобы ее можно было обработать в вызывающем коде
  }
};

export const GetSingleProduct = (id) => {
  return api.get(`products/${id}/`);
};

export const AddProducts = () => {
  return api.post(`products/`);
};

export const GetNewProducts = () => {
  return api.get(`products/new/`);
};

export const GetPopularProducts = () => {
  return api.get(`products/popular/`);
};
