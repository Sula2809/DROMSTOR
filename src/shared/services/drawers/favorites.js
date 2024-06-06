import {api} from "@/shared/services/axios";

export const GetFavorites = async () => {
    return await api.get('favorite/my_favorites/')
}