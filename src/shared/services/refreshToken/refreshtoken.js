import { api } from "@/shared/services/axios";
import Cookies from "js-cookie";

export const refreshToken = async (token) => {
  const refresh_token = { refresh: Cookies.get("refresh_token") };

  const res = await api.post(`api/token/refresh/`, refresh_token, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res) {
    console.log("res: ", res);
    Cookies.set("access_token", res?.data?.access);
    return res?.data?.access;
  }
};
