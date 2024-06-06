import { create } from 'zustand';
import {GetAllSubcategory} from "@/shared/services/categories/category";

const useGetSubCategoriesStore = create((set) => ({
    subCategoryData: {} || null,
    isLoading: false,
    errors: [],
    fetchSubCategories: async () => {
        set({ isLoading: true });
        try {
            const res = await GetAllSubcategory();
            if (res) {
                set({ subCategoryData: res.data, isLoading: false, errors: [] });
            } else {
                set({ subCategoryData: {}, isLoading: false, errors: ['Data is not defined'] });
            }
        } catch (error) {
            set({ subCategoryData: {}, isLoading: false, errors: [error.message] });
        }
    },
}));

export default useGetSubCategoriesStore;
