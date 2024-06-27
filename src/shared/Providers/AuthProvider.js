"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("access_token") || null);

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(Cookies.get("access_token"));
    };

    window.addEventListener("tokenChange", handleTokenChange);

    return () => {
      window.removeEventListener("tokenChange", handleTokenChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
