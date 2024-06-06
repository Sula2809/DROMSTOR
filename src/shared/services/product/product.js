import {api} from "@/shared/services/axios";

export const GetAllProduct = () => {
    const res = api.get('')
    console.log(res, "getAllProduct")
    return res.data
}