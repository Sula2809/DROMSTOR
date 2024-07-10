'use client'
import Cookies from "js-cookie";
import {refreshToken} from "@/shared/services/refreshToken/refreshtoken";

export const Requester = async (apiCall, token, setToken, ...args) => {

    try {
        return await apiCall(token, ...args);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Обновление токена
            const newToken = await refreshToken(token);
            if (newToken) {
                setToken(newToken);
                Cookies.set("access_token", newToken);

                // Повторный вызов API с новым токеном
                return await apiCall(newToken, ...args);
            }
        } else {
            throw error; // Если ошибка не 401, выбрасываем её дальше
        }
    }
};
