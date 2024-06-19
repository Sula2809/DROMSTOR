import { api } from "@/shared/services/axios";
import axios from "axios";
import Cookies from "js-cookie";

export const register = async (data) => {
  try {
    return await api.post(`signup/`, data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error);
    }
  }
};

export const login = async (data) => {
  try {
    const response = await api.post(`login/`, data);
    const { access_token, refresh_token, role } = response.data;
    Cookies.set("access_token", access_token, { httpOnly: false });
    Cookies.set("refresh_token", refresh_token, { httpOnly: false });
    Cookies.set("role", role, { httpOnly: false });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error);
    }
  }
};
