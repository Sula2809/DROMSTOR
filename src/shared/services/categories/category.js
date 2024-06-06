import {api} from "@/shared/services/axios";

export const GetAllCategory = async () => {
    return await api.get('categories/')

}

export const GetAllSubcategory = async () => {
    return await api.get('subcategories/')
}