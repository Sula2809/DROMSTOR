"use client";
import {Button} from "@/components/ui/button";
import {SelectName} from "@/components/admin/AddProduct/SelectName/SelectName";
import {SelectDescription} from "@/components/admin/AddProduct/SelectDescription/SelectDescription";
import {SelectColor} from "@/components/admin/AddProduct/SelectColor/SelectColor";
import {SelectMaterial} from "@/components/admin/AddProduct/SelectMaterial/SelectMaterial";
import {SelectCategory} from "@/components/admin/AddProduct/SelectCategory/SelectCategory";
import {SelectSubCategory} from "@/components/admin/AddProduct/SelectSubCategory/SelectSubCategory";
import {SelectSubSubCategory} from "@/components/admin/AddProduct/SelectSubSubCategory/SelectSubSubCategory";
import {SelectPrice} from "@/components/admin/AddProduct/SelectPrice/SelectPrice";
import {useEffect, useState} from "react";
import productsStore from "@/shared/services/store/Products.store";
import {GetColors} from "@/shared/services/colors/colors";
import {GetMaterials} from "@/shared/services/materials/materials";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";
import useGetSubSubCategoriesStore from "@/shared/services/store/SubSubCategories.store";
import {Requester} from "@/components/Requester";
import {AddProducts, DeleteProduct, EditProduct} from "@/shared/services/product/product";
import {useAuth} from "@/shared/Providers/AuthProvider";
import {useRouter} from "next/navigation";
import {SelectImages} from "@/components/admin/AddProduct/SelectImages/SelectImage";

export default function AddEditProduct() {
    const [isLoading, setIsLoading] = useState(false);
    const [action, setAction] = useState("");
    const [id, setID] = useState(null);

    const [name, setName] = useState("");
    const [nameEn, setNameEn] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [images, setImages] = useState(null);
    const [selectedColorsID, setSelectedColorsID] = useState([]);
    const [selectedMaterialsID, setSelectedMaterialsID] = useState([]);
    const [category, setCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
    const [price, setPrice] = useState(null);

    const [localMaterials, setLocalMaterials] = useState([]);
    const [localColors, setLocalColors] = useState([]);
    const [localCategory, setLocalCategory] = useState(null);
    const [localSubCategory, setLocalSubCategory] = useState(null);
    const [localSubSubCategory, setLocalSubSubCategory] = useState(null);

    const [colorsData, setColorsData] = useState([]);
    const [materialsData, setMaterialsData] = useState([]);

    const {productItem, isLoadingItem, fetchSingleProduct} = productsStore.useGetSingleProductStore();
    const {categoryData, fetchCategories} = useGetAllCategoriesStore();
    const {subCategoryData, fetchSubCategories} = useGetSubCategoriesStore();
    const {subSubCategoryData, fetchSubSubCategories} = useGetSubSubCategoriesStore();

    const {token, setToken} = useAuth();
    const router = useRouter();

    const handleAddProduct = async (isReCall = false) => {
        const formData = new FormData();
        formData.append('title', name);
        formData.append('title_en', nameEn);
        formData.append('description', description);
        formData.append('description_en', descriptionEn);

        images.forEach((image, index) => {
            formData.append(`images${index}`, JSON.stringify(image)); // Если изображения являются объектами
        });

        selectedColorsID.forEach((color, index) => {
            formData.append(`colors[${index}]`, color);
        });

        selectedMaterialsID.forEach((fabric, index) => {
            formData.append(`fabrics[${index}]`, fabric);
        });

        formData.append('category', category);

        selectedSubCategory.forEach((sub, index) => {
            formData.append(`subcategory[${index}]`, sub);
        });

        selectedSubSubCategory.forEach((subSub, index) => {
            formData.append(`subsubcategory[${index}]`, subSub);
        });

        formData.append('price', price);
        formData.append('discount', 0);

        console.log(...formData);

        setIsLoading(true);
        try {
            const res = await Requester(AddProducts, token, setToken, formData);
            if (res) {
                setIsLoading(false);
                if (!isReCall) {
                    setName('');
                    setNameEn('');
                    setDescription('');
                    setDescriptionEn('');
                    setPrice('');
                    setCategory(0);
                    setSelectedSubCategory([]);
                    setSelectedSubSubCategory([]);
                    setLocalColors([]);
                    setLocalMaterials([]);
                } else {
                    router.back();
                }
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };

    const handleEditProduct = async () => {
        setIsLoading(true);
        try {
            const data = {
                title: name,
                title_en: nameEn,
                description,
                description_en: descriptionEn,
                colors: selectedColorsID,
                fabrics: selectedMaterialsID,
                category,
                subcategory: selectedSubCategory,
                subsubcategory: selectedSubSubCategory,
                price,
                discount: 0
            };
            const res = await Requester(EditProduct, token, setToken, id, data);
            if (res) {
                setIsLoading(false);
                router.back();
            }
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    };

    const handleDeleteProduct = async () => {
        setIsLoading(true);
        try {
            const res = await Requester(DeleteProduct, token, setToken, id);
            if (res) {
                setIsLoading(false);
                router.back();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchDatas = async () => {
        const colors = await GetColors();
        const materials = await GetMaterials();
        if (colors) setColorsData(colors);
        if (materials) setMaterialsData(materials);
        fetchCategories();
        fetchSubCategories();
        fetchSubSubCategories();
    };

    useEffect(() => {
        fetchDatas();
        const storedAction = localStorage.getItem("buttonAction");
        const storedID = localStorage.getItem("productID");

        if (storedAction === 'edit') {
            const storedName = localStorage.getItem("name");
            const storedNameEn = localStorage.getItem("name_en");
            const storedDescription = localStorage.getItem("description");
            const storedDescriptionEN = localStorage.getItem("description_en");
            const storedColors = localStorage.getItem("colors");
            const storedMaterials = localStorage.getItem("materials");
            const storedCategoryID = localStorage.getItem("categoryID");
            const storedSubCategoryID = localStorage.getItem("subcategoryID");
            const storedSubSubCategoryID = localStorage.getItem("subsubcategoryID");
            const storedPrice = localStorage.getItem("price");
            const storedImages = localStorage.getItem('images')

            if (storedID) setID(storedID);
            if (storedImages) {
                const imagesArray = JSON.parse(storedImages);
                console.log('images22: ', imagesArray);
            }
            if (storedColors) console.log('coloes3342:', storedColors);

            setName(storedName);
            setNameEn(storedNameEn);
            setDescription(storedDescription);
            setDescriptionEn(storedDescriptionEN);
            setLocalCategory(storedCategoryID);
            setLocalSubCategory(storedSubCategoryID);
            setLocalSubSubCategory(storedSubSubCategoryID);
            setPrice(storedPrice);
            setLocalMaterials(storedMaterials);
            setLocalColors(storedColors);
        }
        if (storedAction) setAction(storedAction);
        if (storedID) fetchSingleProduct(storedID);

    }, []);

    useEffect(() => {
        if (productItem) {
            setName(productItem.title || "");
            setNameEn(productItem.title_en || "");
            setDescription(productItem.description || "");
            setDescriptionEn(productItem.description_en || "");
            setLocalColors(productItem.colors || []);
            setSelectedMaterialsID(productItem.materials || []);
            setCategory(productItem.category || "");
            setSelectedSubCategory(productItem.subCategory || "");
            setSelectedSubSubCategory(productItem.subSubCategory || "");
            setPrice(productItem.price || 0);
        }
    }, [productItem]);

    useEffect(() => {
        console.log(categoryData)
    }, [categoryData]);

    return (
        <div className={`space-y-5`}>
            <h2 className={`text-body1`}>
                {action === "add" ? "Добавить продукт" : "Изменить продукт"}
            </h2>
            <div className={`space-y-5`}>
                <SelectName
                    label="Название (на русском):"
                    title={name}
                    setName={setName}
                />
                <SelectName
                    label="Название (на английском):"
                    title={nameEn}
                    setName={setNameEn}
                />
                <SelectDescription
                    label="Описание (на русском):"
                    description={description}
                    setDescription={setDescription}
                />
                <SelectDescription
                    label="Описание (на английском):"
                    description={descriptionEn}
                    setDescription={setDescriptionEn}
                />
                <SelectImages label={'Изображения'} images={images} setImages={setImages}/>
                <SelectColor
                    label="Цвет:"
                    setSelectedColor={setSelectedColorsID}
                    selectedColor={selectedColorsID}
                    colors={localColors}
                    data={colorsData}
                />
                <SelectMaterial
                    label="Материал:"
                    setSelectedMaterial={setSelectedMaterialsID}
                    selectedMaterials={selectedMaterialsID}
                    materials={localMaterials}
                    data={materialsData}
                />
                <div className=" border-b border-b-admin-grey-hover pb-5">
                    <SelectCategory label="Категория:" setCategory={setCategory} selectedCat={localCategory}
                                    data={categoryData}/>
                    <div>Выбранное: <span>{categoryData.filter(item => item.id === localCategory).map(item => item.name)}</span>
                    </div>
                </div>
                {(category || localSubCategory) && (
                    <SelectSubCategory
                        label="Подкатегория:"
                        setSubCategory={setSelectedSubCategory}
                        data={subCategoryData}
                        selectedCategory={category}
                        localCat={localSubCategory}
                    />
                )}
                {(selectedSubCategory || localSubSubCategory) && (
                    <SelectSubSubCategory
                        label="Подподкатегория:"
                        setSubSubCategory={setSelectedSubSubCategory}
                        data={subSubCategoryData}
                        selectedSubCategory={selectedSubCategory}
                        localCat={localSubSubCategory}
                    />
                )}
                <SelectPrice label="Цена:" price={price} setPrice={setPrice}/>
            </div>
            <div className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}>
                <div className={`flex justify-between items-center gap-5`}>
                    <Button
                        disabled={isLoading}
                        className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                        onClick={action === "add" ? handleAddProduct : handleEditProduct
                        }
                    >
                        {action === "add" ? "Добавить" : "Сохранить"}
                    </Button>
                    {action === 'add' ?
                        <Button disabled={isLoading} className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                                onClick={() => handleAddProduct(true)}>Сохранить и добавить
                            еще</Button> : null}
                </div>
                {action === "edit" && (
                    <Button className={`bg-admin-red hover:bg-admin-red-hover duration-500 `} disabled={isLoading}
                            onClick={handleDeleteProduct}>
                        Удалить
                    </Button>
                )}
            </div>
        </div>
    );
}
