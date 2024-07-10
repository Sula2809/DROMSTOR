import { create } from "zustand";
import {
  GetAllProducts,
  GetSingleProduct,
} from "@/shared/services/product/product";

const useGetAllProductsStore = create((set) => ({
  productsData: [],
  isLoadingProducts: false,
  errorsProducts: [],
  fetchAllProducts: async (
    title = null,
    colors = null,
    min_price = null,
    max_price = null,
    category = null,
    subcategory = null,
    page = null,
  ) => {
    set({ isLoadingProducts: true });
    try {
      const res = await GetAllProducts(
        title,
        colors,
        min_price,
        max_price,
        category,
        subcategory,
        page,
      );
      if (res || res.status === 200) {
        set({
          productsData: res.data ? res.data : res.results ? res : res,
          isLoadingProducts: false,
          errorsProducts: [],
        });
      } else {
        set({
          productsData: {},
          isLoadingProducts: false,
          errorsProducts: ["Data is not defined"],
        });
      }
    } catch (error) {
      set({
        productsData: {},
        isLoadingProducts: false,
        errorsProducts: [error.message],
      });
    }
  },
}));

const useGetSingleProductStore = create((set) => ({
  productItem: null,
  isLoadingItem: false,
  errorsItem: [],
  fetchSingleProduct: async (id) => {
    set({ isLoadingItem: true });
    try {
      const res = await GetSingleProduct(id);
      if (res.status === 200) {
        set({
          productItem: res.data,
          isLoadingItem: false,
          errorsItem: [],
        });
      } else {
        set({
          productItem: {},
          isLoadingItem: false,
          errorsItem: ["Data is not defined"],
        });
      }
    } catch (error) {
      set({
        productItem: {},
        isLoadingItem: false,
        errorsItem: [error.message],
      });
    }
  },
}));

const productStores = { useGetAllProductsStore, useGetSingleProductStore };

export default productStores;
