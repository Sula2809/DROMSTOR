"use client";
import {AddButton} from "@/components/admin/Buttons/AddButton";
import {SearchIcon} from "@/components/admin/icons/SearchIcon";
import {Button} from "@/components/ui/button";
import {TrashIconWhite} from "@/components/admin/icons/TrashIconWhite";
import {EditButtonOutline} from "@/components/admin/Buttons/EditButtonOutline";
import {useEffect, useState} from "react";
import {useAuth} from "@/shared/Providers/AuthProvider";
import {refreshToken} from "@/shared/services/refreshToken/refreshtoken";
import {DeleteSubCategory, GetAllSubcategory,} from "@/shared/services/categories/category";

export default function Subcategories() {
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const {token, setToken} = useAuth();

    const fetchSubCategories = async () => {
        try {
            const res = await GetAllSubcategory();
            if (res) {
                console.log("fetch sub", res.data);
                setSubCategoryData(res.data);
            }
        } catch (error) {
            console.error("Error fetching subcategories: ", error);
        }
    };

    const handleDeleteSubCategory = async (id) => {
        try {
            await DeleteSubCategory(token, id);
            fetchSubCategories();
        } catch (err) {
            console.error("Error deleting subcategory", err);
            if (err.response?.status === 401) {
                console.log(err.response.status);
                const newToken = await refreshToken(token);
                if (newToken) {
                    setToken(newToken);
                    await handleDeleteSubCategory(id);
                }
            }
        }
    };

    const handleDeleteSelectedSubCategories = async () => {
        try {
            await Promise.all(
                selectedSubCategories.map((id) => DeleteSubCategory(token, id)),
            );
            setSelectedSubCategories([]);
            fetchSubCategories();
        } catch (err) {
            console.error("Error deleting subcategory", err);
            if (err.response?.status === 401) {
                console.log(err.response.status);
                const newToken = await refreshToken(token);
                if (newToken) {
                    setToken(newToken);
                    await handleDeleteSelectedSubCategories();
                }
            }
        }
    };

    const toggleSelectSubCategory = (id) => {
        setSelectedSubCategories((prev) =>
            prev.includes(id)
                ? prev.filter((subCategoryId) => subCategoryId !== id)
                : [...prev, id],
        );
    };

    const selectAllSubCategories = () => {
        if (selectedSubCategories.length === subCategoryData.length) {
            setSelectedSubCategories([]);
        } else {
            setSelectedSubCategories(
                subCategoryData.map((subCategory) => subCategory.id),
            );
        }
    };

    const filteredSubCategories = subCategoryData.filter((subCategory) =>
        subCategory.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    useEffect(() => {
        fetchSubCategories();
        localStorage.removeItem('productID')
        localStorage.removeItem('name')
        localStorage.removeItem('name_en')
        localStorage.removeItem('categoryID')
        localStorage.removeItem('img')
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center my-5">
                <h2 className={`text-body1`}>Выберите подкатегорию для изменения</h2>
                <AddButton link={"subcategory"}>Добавить подкатегорию</AddButton>
            </div>
            <div className="flex items-center justify-start gap-4 my-5">
                <p className={`text-body2`}>Поиск: </p>
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit w-32 sm:w-96"
                    />
                    <SearchIcon className="absolute top-0 right-2"/>
                </div>
                <p className={`text-body4`}>
                    Выбрано {selectedSubCategories.length} из {subCategoryData.length}
                </p>
            </div>
            <table className="w-full text-left border-collapse">
                <thead className="bg-admin-grey">
                <tr>
                    <th className="p-2 text-center">
                        <input
                            type="checkbox"
                            checked={
                                selectedSubCategories.length === subCategoryData.length
                            }
                            onChange={selectAllSubCategories}
                            className={`cursor-pointer`}
                        />
                    </th>
                    <th className="px-2 text-center">ID</th>
                    <th className="px-2">Подкатегория</th>
                    <th className="px-2">Фото</th>
                    <th className="px-2 flex justify-end">
                        <Button
                            className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                            onClick={handleDeleteSelectedSubCategories}
                        >
                            <TrashIconWhite/>{" "}
                            <span className={`hidden sm:inline`}>Удалить</span>
                        </Button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredSubCategories.map((item, index) => (
                    <tr
                        key={item.id}
                        className={`border-b ${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"} py-1`}
                    >
                        <td className="px-2 w-[3%] text-center">
                            <input
                                type="checkbox"
                                checked={selectedSubCategories.includes(item.id)}
                                onChange={() => toggleSelectSubCategory(item.id)}
                                className={`cursor-pointer`}
                            />
                        </td>
                        <td className="px-2 w-[5%] text-center">{item.id}</td>
                        <td className="px-2 w-[70%]">{item.name}</td>
                        <td className="px-2 w-[10%]">
                            <img src={item.image} className={`size-28 object-center object-cover`} alt={item.name}/>
                        </td>
                        <td className="px-2 flex items-center gap-2 w-[40%] pt-3">
                            <EditButtonOutline
                                name={item.name}
                                name_en={item.name_en}
                                categoryID={item.category}
                                img={item.image}
                                productID={item.id}
                                link={"subcategory"}
                            >
                                Изменить
                            </EditButtonOutline>
                            <Button
                                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                                onClick={() => handleDeleteSubCategory(item.id)}
                            >
                                <TrashIconWhite/>{" "}
                                <span className={`hidden sm:inline`}>Удалить</span>
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={`my-5`}>Категорий: {filteredSubCategories.length}</div>
        </div>
    );
}
