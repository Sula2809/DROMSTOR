import {api} from "@/shared/services/axios";
import axios from "axios";
import Cookies from 'js-cookie';

export const register = async (data) => {
    try {
        const response = await api.post(`signup/`, data)
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error)
        }
    }
}

export const login = async (data) => {
    try {
        const response = await api.post(`login/`, data)
        const { access_token, refresh_token } = response.data;
        Cookies.set('access_token', access_token, { httpOnly: false });
        Cookies.set('refresh_token', refresh_token, { httpOnly: false });
        const token = Cookies.get('access_token')
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error)
        }
    }
}