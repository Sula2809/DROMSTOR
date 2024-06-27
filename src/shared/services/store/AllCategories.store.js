import { create } from "zustand";
import { GetAllCategory } from "@/shared/services/categories/category";

const useGetAllCategoriesStore = create((set) => ({
  categoryData: [],
  isLoading: false,
  errors: [],
  fetchCategories: async () => {
    set({ isLoading: true });
    try {
      const res = await GetAllCategory();
      if (res) {
        set({ categoryData: res.data, isLoading: false, errors: [] });
      } else {
        set({
          categoryData: {},
          isLoading: false,
          errors: ["Data is not defined"],
        });
      }
    } catch (error) {
      set({ categoryData: {}, isLoading: false, errors: [error.message] });
    }
  },
}));

export default useGetAllCategoriesStore;
