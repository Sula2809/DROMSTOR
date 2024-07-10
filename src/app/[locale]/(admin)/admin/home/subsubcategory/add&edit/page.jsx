"use client";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/shared/Providers/AuthProvider";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Skeleton} from "@/components/ui/skeleton";
import {Requester} from "@/components/Requester";
import {
    AddSubSubCategory,
    DeleteSubSubCategory,
    EditSubSubCategory,
    GetAllSubcategory
} from "@/shared/services/categories/category";

export default function AddEditSubSubCategory() {
    const [action, setAction] = useState("");
    const [name, setName] = useState("");
    const [nameEn, setNameEn] = useState("");
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [subCategoryId, setSubCategoryId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({name: "", name_en: "", subSubCategoryId: ""});
    const [id, setId] = useState(null);

    const router = useRouter();
    const {token, setToken} = useAuth();

    const validateSubSubCategory = () => {
        const newErrors = {name: "", name_en: "", subSubCategoryId: ""};
        if (!name) newErrors.name = "Название обязательно";
        if (!nameEn) newErrors.name_en = "Название на английском обязательно";
        if (!subCategoryId) newErrors.subCategoryId = "Под категорию обязательно надо выбрать";
        setErrors(newErrors);
        return !newErrors.name && !newErrors.name_en && !newErrors.subCategoryId;
    };

    const handleAddSubSubCategory = async (isReCall = false) => {
        setIsLoading(true);
        const data = {name, name_en: nameEn, subcategory: subCategoryId};

        try {
            const res = await Requester(AddSubSubCategory, token, setToken, data);
            if (res) {
                setIsLoading(false);
                if (isReCall) {
                    router.back();
                } else {
                    setName('');
                    setNameEn('');
                    setSubCategoryId(null);
                }
            }
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    };

    const handleEditCategory = async () => {
        setIsLoading(true);
        const data = {name, name_en: nameEn, subcategory: subCategoryId ? subCategoryId : id};

        try {
            const res = await Requester(EditSubSubCategory, token, setToken, data, id);
            if (res) {
                setIsLoading(false);
                router.back();
            }
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    };

    const handleDeleteSubSubCategory = async () => {
        setIsLoading(true);

        try {
            const res = await Requester(DeleteSubSubCategory, token, setToken, id);
            if (res) {
                router.back();
            }
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    };

    const handleSubCategoryChange = (e) => {
        setSubCategoryId(e);
    }

    useEffect(() => {
        const storedAction = localStorage.getItem("buttonAction");
        const storedID = localStorage.getItem("productID");
        if (storedAction) setAction(storedAction);
        if (storedAction === "edit") {
            const storedName = localStorage.getItem("name");
            const storedNameEn = localStorage.getItem("name_en");
            const storedsubcatID = localStorage.getItem('categoryID');
            if (storedsubcatID) setSubCategoryId(storedsubcatID);
            if (storedName) setName(storedName);
            if (storedNameEn) setNameEn(storedNameEn);
        }
        if (storedID) setId(parseInt(storedID));

        const fetchSubCategories = async () => {
            try {
                const res = await GetAllSubcategory();
                if (res) setSubCategoryData(res?.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSubCategories();
    }, []);

    useEffect(() => {
        console.log('action,', action)
        console.log('id', id)
    }, [id]);

    return (
        <div className="space-y-5">
            <h2 className="text-body1">
                {action === "edit" ? "Изменить субкатегорию" : action === "add" ? "Добавить субкатегорию" : "Ошибка"}
            </h2>
            <div className="flex gap-20 items-center">
                <p className="text-body2 font-bold w-1/5">Название субкатегории:</p>
                <input
                    className="bg-inherit rounded-sm border border-white px-3 py-1"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex gap-20 items-center">
                <p className="text-body2 font-bold w-1/5">Название субкатегории (English):</p>
                <input
                    className="bg-inherit rounded-sm border border-white px-3 py-1"
                    type="text"
                    value={nameEn}
                    onChange={(e) => setNameEn(e.target.value)}
                />
            </div>
            <div className="flex gap-20 items-center">
                <p className="text-body2 font-bold w-1/5">Подкатегория:</p>
                <Select onValueChange={handleSubCategoryChange}>
                    <SelectTrigger className="w-96 bg-inherit">
                        <SelectValue placeholder="выберите подкатегорию"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {subCategoryData?.map((item, index) => (
                                <SelectItem key={index} value={item.id}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            {subCategoryId && (
                <div className="flex gap-20 items-center">
                    <p className="text-body2 font-bold w-1/5">Выбранное :</p>
                    {subCategoryData.map((item) => (parseInt(item.id) === parseInt(subCategoryId) ?
                        <p key={item.id}>{item.name}</p> : null))}
                </div>
            )}
            <div className="bg-admin-grey-hover flex justify-between items-center py-1 px-4">
                <div className="flex justify-between items-center gap-5">
                    {isLoading ? <Skeleton className="w-28 h-10"/> : (
                        <Button className="bg-admin-blue md:hover:bg-admin-blue-hover"
                                onClick={action === 'edit' ? handleEditCategory : handleAddSubSubCategory}>
                            Сохранить
                        </Button>
                    )}
                    {action === "add" && !isLoading && (
                        <Button className="bg-admin-blue md:hover:bg-admin-blue-hover"
                                onClick={() => handleAddSubSubCategory(true)}>
                            Сохранить и добавить еще
                        </Button>
                    )}
                </div>
                {action === "edit" && (
                    <Button className="bg-admin-red hover:bg-admin-red-hover duration-500"
                            onClick={handleDeleteSubSubCategory}>
                        Удалить
                    </Button>
                )}
            </div>
        </div>
    );
}
