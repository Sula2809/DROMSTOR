"use client"
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import {useRouter} from "next/navigation";
import {AddSubCategory, DeleteSubCategory, EditSubCategory} from "@/shared/services/categories/category";
import {useAuth} from "@/shared/Providers/AuthProvider";
import {ImageLoad} from "@/components/admin/ImageLoad/ImageLoad";
import {Skeleton} from "@/components/ui/skeleton";
import {Requester} from "@/components/Requester";

export default function AddEditSubCategory() {
    const {categoryData, fetchCategories} = useGetAllCategoriesStore();
    const [isLoading, setIsLoading] = useState(false);
    const [action, setAction] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [subCategory, setSubCategory] = useState("");
    const [categoryId, setCategoryId] = useState(null);
    const [subCategoryEn, setSubCategoryEn] = useState("");
    const [image, setImage] = useState(null);
    const [id, setId] = useState(0);
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    const router = useRouter();
    const {token, setToken} = useAuth();

    useEffect(() => {
        const storedAction = localStorage.getItem("buttonAction");
        const storedName = localStorage.getItem("name");
        const storedNameEn = localStorage.getItem("name_en");
        const storedID = localStorage.getItem("productID");
        const storedImage = localStorage.getItem("img");
        const storedCategoryID = localStorage.getItem("categoryID");

        if (storedAction) setAction(storedAction);
        if (storedName) setSubCategory(storedName);
        if (storedNameEn) setSubCategoryEn(storedNameEn);
        if (storedID) setId(storedID);
        if (storedImage) setImage(storedImage);
        if (storedCategoryID) setCategoryId(storedCategoryID);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchCategories();
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };

        fetchData().catch((error) => console.error("Failed to execute fetchData", error));
    }, [fetchCategories]);

    const validateForm = () => {
        const newErrors = {};
        if (!subCategory) newErrors.subCategory = "Введите название подкатегории";
        if (!image) newErrors.file = "Выберите фотографию подкатегории";

        // Если categoryId не задан, то проверяем выбранную категорию
        if (!categoryId && !selectedCategory) {
            newErrors.selectedCategory = "Выберите категорию";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddSubCategory = async (isReCall = false) => {
        if (!validateForm()) return;
        const data = new FormData();
        data.append('name', subCategory);
        data.append('name_en', subCategoryEn);
        data.append('category', selectedCategory ? selectedCategory : categoryId);
        data.append('image', image);
        setIsLoading(true);
        setErrorMessage(null); // Reset error message

        try {
            const res = await Requester(AddSubCategory, token, setToken, data)
            if (res) {
                setIsLoading(false);
                if (isReCall) {
                    router.back();
                } else {
                    setSelectedCategory(null);
                    setSubCategory('');
                    setSubCategoryEn('')
                    setImage(null);
                }
            }
        } catch (err) {
            setIsLoading(false);
            if (err) {
                const largeError = {}
                largeError.largeImg = 'файл слишком большой'
                setErrors(largeError)
            }
            console.error("Error adding category: ", err);

        } finally {
            setIsLoading(false);
        }
    };

    const handleEditSubCategory = async () => {
        if (!validateForm()) return;
        setIsLoading(true);
        setErrorMessage(""); // Reset error message
        const data = new FormData();
        data.append('name', subCategory);
        data.append('name_en', subCategoryEn);
        data.append('category', selectedCategory ? selectedCategory : categoryId);
        data.append('image', image);
        try {
            const res = await Requester(EditSubCategory, token, setToken, data, id)
            if (res) {
                setIsLoading(false)
                router.back()
            }
        } catch (error) {
            setIsLoading(false)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteSubCategory = async () => {
        try {
            const res = await Requester(DeleteSubCategory, token, setToken, id);
            if (res) router.back()
        } catch (err) {
            console.error("Error deleting subcategory", err);
        }
    };

    const onSelectChange = (e) => {
        setSelectedCategory(Number(e));
        setErrors((prevErrors) => ({...prevErrors, selectedCategory: ""}));
    };

    return (
        <div className={`space-y-5`}>
            <h2 className={`text-body1`}>
                {action === "edit" ? "Изменить подкатегорию" : action === "add" ? "Добавить подкатегорию" : "Ошибка"}
            </h2>
            <div className={`flex gap-20 items-center`}>
                <p className={`text-body2 font-bold w-1/5`}>Название:</p>
                <input
                    className={`bg-inherit rounded-sm border border-white px-3 py-1 text-body3 w-96`}
                    placeholder={`Введите название подкатегории`}
                    onChange={(e) => {
                        setSubCategory(e.target.value);
                        setErrors((prevErrors) => ({...prevErrors, subCategory: ""}));
                    }}
                    value={subCategory}
                    type="text"
                />
                {errors.subCategory && <span className="text-red-500">{errors.subCategory}</span>}
            </div>
            <div className={`flex gap-20 items-center`}>
                <p className={`text-body2 font-bold w-1/5`}>Название (English):</p>
                <input
                    className={`bg-inherit rounded-sm border border-white px-3 py-1 text-body3 w-96`}
                    placeholder={`Введите название подкатегории`}
                    onChange={(e) => {
                        setSubCategoryEn(e.target.value);
                        setErrors((prevErrors) => ({...prevErrors, subCategory: ""}));
                    }}
                    value={subCategoryEn}
                    type="text"
                />
                {errors.subCategory && <span className="text-red-500">{errors.subCategory}</span>}
            </div>
            <div className={`flex gap-20 items-center`}>
                <p className={`text-body2 font-bold w-1/5`}>Категория:</p>
                <div>
                    <Select onValueChange={onSelectChange}>
                        <SelectTrigger className="w-96 bg-inherit">
                            <SelectValue placeholder="выберите категорию"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {categoryData?.map((item) => (
                                    <SelectItem key={item.id} value={item.id}>
                                        {item.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>


                        </SelectContent>
                    </Select>
                    {errors.selectedCategory && <span className="text-red-500">{errors.selectedCategory}</span>}
                </div>
            </div>
            {categoryId && (
                <div className={`flex gap-20 items-center`}>
                    <p className={`text-body2 font-bold w-1/5`}>Выбранное :</p>
                    {categoryData.map((item) => (
                        parseInt(item.id) === parseInt(categoryId) ? <p key={item.id}>{item.name}</p> : null
                    ))}
                </div>
            )}
            <div className={`flex gap-5 items-center`}>
                {errors.largeImg && <span className="text-red-500">{errors.largeImg}</span>}
                <ImageLoad setFunction={setImage} reset={image === null}/>
            </div>
            <div className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}>
                <div className={`flex justify-between items-center gap-5`}>
                    {isLoading ? <Skeleton className={`w-28 h-10`}/> : <Button
                        className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                        onClick={action === 'edit' ? handleEditSubCategory : handleAddSubCategory}
                    >
                        Сохранить
                    </Button>}
                    {action === "add" ?
                        isLoading ? <Skeleton className={`w-56 h-10`}/> : <Button
                            className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                            onClick={() => {
                                if (validateForm()) handleAddSubCategory(false);
                            }}
                        >
                            Сохранить и добавить еще
                        </Button>
                        : null}
                </div>
                {action === "edit" ? (
                    <Button className={`bg-admin-red hover:bg-admin-red-hover duration-500 `}
                            onClick={handleDeleteSubCategory}>
                        Удалить
                    </Button>
                ) : null}
            </div>
        </div>
    );
}
