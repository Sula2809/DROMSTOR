import {api} from "@/shared/services/axios";

export const GetColors = async () => {
    try {
        const responseColors = await api.get("colors/");
        if (responseColors.status === 200) {
            return responseColors.data;
        } else {
            console.warn("Unexpected response status:", responseColors.status);
            return null;
        }
    } catch (error) {
        console.error("Failed to fetch colors:", error);
        throw error;
    }
};

export const AddColors = async (token, data) => {
    console.log('data; ', data)
    return await api.post("colors/", data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
};

export const DeleteColors = async (token, id) => {
    return await api.delete(`colors/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const EditColors = async (token, data, id) => {
    return await api.patch(`colors/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
};
