import {api} from "@/shared/services/axios";

export const GetUsersList = async (token) => {
    const res = await api.get('users/', {headers: {'Authorization': `Bearer ${token}`}});
}