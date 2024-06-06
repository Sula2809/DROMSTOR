import { create } from 'zustand';
import {GetFavorites} from "@/shared/services/drawers/favorites";

const useFavoritesStore = create((set) => ({
    favoritesData: {} || null,
    isLoading: false,
    errors: [],
    fetchFavorites: async () => {
        set({ isLoading: true });
        try {
            const res = await GetFavorites();
            if (res) {
                set({ favoritesData: res.data, isLoading: false, errors: [] });
            } else {
                set({ favoritesData: {}, isLoading: false, errors: ['Data is not defined'] });
            }
        } catch (error) {
            set({ favoritesData: {}, isLoading: false, errors: [error.message] });
        }
    },
}));

export default useFavoritesStore;
