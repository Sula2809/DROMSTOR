import {api} from "@/shared/services/axios";

// Категории
export const GetAllCategory = async () => {
    return await api.get("categories/");
};

export const AddCategory = async (data, token) => {
    return await api.post("categories/", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const DeleteCategory = async (token, id) => {
    return await api.delete(`categories/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const EditCategory = async (token, data, id) => {
    return await api.put(`categories/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Подкатегории
export const GetAllSubcategory = async () => {
    return await api.get("subcategories/");
};

export const AddSubCategory = async (token, data) => {
    // console.log('data; ', data)
    try {
        return await api.post("subcategories/", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (err) {
        console.error('exoxo: ', err)
    }
};

export const DeleteSubCategory = async (token, id) => {
    return await api.delete(`subcategories/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const EditSubCategory = async (token, data, id) => {
    return await api.put(`subcategories/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",
        },
    });
};

// Субкатегории
export const GetAllSubSubcategory = async () => {
    return await api.get("subsubcategories/");
};

export const AddSubSubCategory = async (token, data) => {
    console.log('token: ', token)
    return await api.post("subsubcategories/", data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
};

export const DeleteSubSubCategory = async (token, id) => {
    return await api.delete(`subsubcategories/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const EditSubSubCategory = async (token, data, id) => {
    return await api.put(`subsubcategories/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
};