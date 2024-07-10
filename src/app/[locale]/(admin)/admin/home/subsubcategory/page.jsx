'use client'
import {AddButton} from "@/components/admin/Buttons/AddButton";
import {SearchIcon} from "@/components/admin/icons/SearchIcon";
import {Button} from "@/components/ui/button";
import {TrashIconWhite} from "@/components/admin/icons/TrashIconWhite";
import {EditButtonOutline} from "@/components/admin/Buttons/EditButtonOutline";
import {useEffect, useState} from "react";
import {useAuth} from "@/shared/Providers/AuthProvider";
import {refreshToken} from "@/shared/services/refreshToken/refreshtoken";
import {DeleteSubSubCategory, GetAllSubSubcategory} from "@/shared/services/categories/category";

export default function SubsubcategoriesPage() {
    const [subsubcategories, setSubsubcategories] = useState([]);
    const [selectedSubsubcategories, setSelectedSubsubcategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const {token, setToken} = useAuth(); // Добавляем setToken

    const fetchSubsubcategories = async () => {
        try {
            const res = await GetAllSubSubcategory();
            if (res) {
                console.log(res)
                setSubsubcategories(res.data);
            }
        } catch (error) {
            console.error("Error fetching subsubcategories: ", error);
        }
    };

    const handleDeleteSubsubcategory = async (id) => {
        try {
            await DeleteSubSubCategory(token, id);
            fetchSubsubcategories();
        } catch (err) {
            console.error("Error deleting subsubcategory", err);
            if (err.response?.status === 401) {
                console.log(err.response.status);
                const newToken = await refreshToken(token);
                if (newToken) {
                    setToken(newToken);
                    console.log(token)
                    console.log(newToken)
                    // await handleDeleteSubsubcategory(id);
                }
            }
        }
    };

    const handleDeleteSelectedSubsubcategories = async () => {
        try {
            await Promise.all(
                selectedSubsubcategories.map((id) => DeleteSubSubCategory(token, id)),
            );
            setSelectedSubsubcategories([]);
            fetchSubsubcategories();
        } catch (err) {
            console.error("Error deleting subsubcategory", err);
            if (err.response?.status === 401) {
                console.log(err.response.status);
                const newToken = await refreshToken(token);
                if (newToken) {
                    setToken(newToken);
                    await handleDeleteSelectedSubsubcategories();
                }
            }
        }
    };

    const toggleSelectSubsubcategory = (id) => {
        setSelectedSubsubcategories((prev) =>
            prev.includes(id)
                ? prev.filter((subsubcategoryId) => subsubcategoryId !== id)
                : [...prev, id],
        );
    };

    const selectAllSubsubcategories = () => {
        if (selectedSubsubcategories.length === subsubcategories.length) {
            setSelectedSubsubcategories([]);
        } else {
            setSelectedSubsubcategories(subsubcategories.map((subsubcategory) => subsubcategory.id));
        }
    };

    const filteredSubsubcategories = subsubcategories.filter((subsubcategory) =>
        subsubcategory.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    useEffect(() => {
        fetchSubsubcategories();
        localStorage.removeItem("name");
        localStorage.removeItem("name_en");
        localStorage.removeItem("productID");
        localStorage.removeItem("buttonAction");
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center my-5">
                <h2 className={`text-body3 md:text-body1`}>Выберите подкатегорию для изменения</h2>
                <AddButton link={"subsubcategory"}>Добавить подкатегорию</AddButton>
            </div>
            <div className="flex items-center justify-start gap-4 my-5">
                <p className={`text-body3 md:text-body2`}>Поиск: </p>
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit w-56 md:w-96"
                    />
                    <SearchIcon className="absolute top-0 right-2"/>
                </div>
                <p className={`text-body4`}>Выбрано {selectedSubsubcategories.length} из {subsubcategories.length}</p>
            </div>
            <table className="w-full text-left border-collapse">
                <thead className="bg-admin-grey">
                <tr>
                    <th className="p-2 text-center">
                        <input
                            type="checkbox"
                            checked={selectedSubsubcategories.length === subsubcategories.length}
                            onChange={selectAllSubsubcategories}
                        />
                    </th>
                    <th className="px-2">ID</th>
                    <th className="px-2">Подкатегория</th>
                    <th className="px-2 flex justify-end">
                        <Button
                            className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                            onClick={handleDeleteSelectedSubsubcategories}>
                            <TrashIconWhite/> Удалить
                        </Button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredSubsubcategories.map((item, index) => (
                    <tr
                        key={item.id}
                        className={`border-b ${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"} py-1`}
                    >
                        <td className="px-2 w-[3%] text-center">
                            <input
                                type="checkbox"
                                checked={selectedSubsubcategories.includes(item.id)}
                                onChange={() => toggleSelectSubsubcategory(item.id)}
                            />
                        </td>
                        <td className="px-2 w-[15%]">{item.id}</td>
                        <td className="px-2 w-[70%]">{item.name}</td>
                        <td className="px-2 flex gap-2 w-[12%]">
                            <EditButtonOutline link={"subsubcategory"} name={item.name} name_en={item.name_en}
                                               productID={item.id} categoryID={item.category}>
                                Изменить
                            </EditButtonOutline>
                            <Button
                                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                                onClick={() => handleDeleteSubsubcategory(item.id)}>
                                <TrashIconWhite/> <p className={`hidden sm:block`}>Удалить</p>
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={`my-5`}>Подкатегорий: {filteredSubsubcategories.length}</div>
        </div>
    );
}
