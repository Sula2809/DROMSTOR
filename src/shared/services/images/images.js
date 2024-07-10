import {api} from "@/shared/services/axios";

export const GetImagesByID = async (id) => {
    try {
        const res = await api.get(`image/list/${id}/`);
        if (res) {
            return res.data;
        } else {
            console.warn("Unexpected response status:", res.status);
            return null;
        }
    } catch (error) {
        console.error("Failed to fetch colors:", error);
        throw error;
    }
};

export const CreateImages = async (token, data) => {
    try {
        return await api.post("image/create/", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (error) {
        console.error(error)
    }
}
