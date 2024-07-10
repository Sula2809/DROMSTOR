import { create } from "zustand";
import { GetAllSubSubcategory } from "@/shared/services/categories/category";

const useGetSubSubCategoriesStore = create((set) => ({
  subSubCategoryData: undefined,
  isLoadingSubSub: false,
  errorsSubSub: [],
  fetchSubSubCategories: async () => {
    set({ isLoadingSubSub: true });
    try {
      const res = await GetAllSubSubcategory();
      if (res) {
        set({
          subSubCategoryData: res.data,
          isLoadingSubSub: false,
          errorsSubSub: [],
        });
      } else {
        set({
          subSubCategoryData: {},
          isLoadingSubSub: false,
          errorsSubSub: ["Data is not defined"],
        });
      }
    } catch (error) {
      set({
        subSubCategoryData: {},
        isLoadingSubSub: false,
        errorsSubSub: [error.message],
      });
    }
  },
}));

export default useGetSubSubCategoriesStore;
