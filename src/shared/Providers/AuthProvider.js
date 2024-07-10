"use client";
import {createContext, useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import {refreshToken} from "@/shared/services/refreshToken/refreshtoken";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(Cookies.get("access_token") || null);

    const handleTokenRefresh = async () => {
        const currentToken = Cookies.get("access_token");
        const newToken = await refreshToken(currentToken);
        if (newToken) {
            setToken(newToken);
            Cookies.set("access_token", newToken); // Обновляем токен в куках
        }
    };

    useEffect(() => {
        const handleTokenChange = () => {
            handleTokenRefresh();
        };

        window.addEventListener("tokenChange", handleTokenChange);

        return () => {
            window.removeEventListener("tokenChange", handleTokenChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
