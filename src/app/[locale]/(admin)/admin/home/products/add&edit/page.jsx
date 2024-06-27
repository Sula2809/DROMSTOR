"use client";
import { Button } from "@/components/ui/button";
import { SelectName } from "@/components/admin/AddProduct/SelectName/SelectName";
import { SelectDescription } from "@/components/admin/AddProduct/SelectDescription/SelectDescription";
import { SelectColor } from "@/components/admin/AddProduct/SelectColor/SelectColor";
import { SelectMaterial } from "@/components/admin/AddProduct/SelectMaterial/SelectMaterial";
import { SelectCategory } from "@/components/admin/AddProduct/SelectCategory/SelectCategory";
import { SelectSubCategory } from "@/components/admin/AddProduct/SelectSubCategory/SelectSubCategory";
import { SelectSubSubCategory } from "@/components/admin/AddProduct/SelectSubSubCategory/SelectSubSubCategory";
import { SelectPrice } from "@/components/admin/AddProduct/SelectPrice/SelectPrice";
import { useEffect, useState } from "react";
import productsStore from "@/shared/services/store/Products.store";
import { GetColors } from "@/shared/services/colors/colors";
import { GetMaterials } from "@/shared/services/materials/materials";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";
import useGetSubSubCategoriesStore from "@/shared/services/store/SubSubCategories.store";

export default function AddEditProduct() {
  const [action, setAction] = useState("");
  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [colorsID, setColorsID] = useState([]);
  const [materialsID, setMaterialsID] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState("");
  const [price, setPrice] = useState(0);

  const [colorsData, setColorsData] = useState([]);
  const [materialsData, setMaterialsData] = useState([]);

  const { productItem, isLoadingItem, fetchSingleProduct } =
    productsStore.useGetSingleProductStore();
  const { categoryData, fetchCategories } = useGetAllCategoriesStore();
  const { subCategoryData, fetchSubCategories } = useGetSubCategoriesStore();
  const { subSubCategoryData, fetchSubSubCategories } =
    useGetSubSubCategoriesStore();

  const handleAddProduct = () => {
    const data = {
      name,
      nameEn,
      description,
      descriptionEn,
      colorsID,
      materialsID,
      category,
      selectedSubCategory,
      selectedSubSubCategory,
      price,
    };
    console.log(data);
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
    if (storedAction) setAction(storedAction);
    if (storedID) fetchSingleProduct(storedID);
  }, []);

  useEffect(() => {
    if (productItem) {
      setName(productItem.title || "");
      setNameEn(productItem.title_en || "");
      setDescription(productItem.description || "");
      setDescriptionEn(productItem.description_en || "");
      setColorsID(productItem.colors || []);
      setMaterialsID(productItem.materials || []);
      setCategory(productItem.category || "");
      setSelectedSubCategory(productItem.subCategory || "");
      setSelectedSubSubCategory(productItem.subSubCategory || "");
      setPrice(productItem.price || 0);
    }
  }, [productItem]);

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
        <SelectColor
          label="Цвет:"
          setColors={setColorsID}
          colors={colorsID}
          data={colorsData}
        />
        <SelectMaterial
          label="Материал:"
          setMaterial={setMaterialsID}
          materials={materialsID}
          data={materialsData}
        />
        <SelectCategory
          label="Категория:"
          setCategory={setCategory}
          data={categoryData}
        />
        {/*<SelectSubCategory*/}
        {/*  label="Подкатегория:"*/}
        {/*  setSubCategory={setSelectedSubCategory}*/}
        {/*  data={subCategoryData}*/}
        {/*/>*/}
        <SelectSubSubCategory
          label="Субподкатегория:"
          setSubSubCategory={setSelectedSubSubCategory}
          data={subSubCategoryData}
        />
        <SelectPrice label="Цена:" setPrice={setPrice} price={price} />
      </div>
      <div
        className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}
      >
        <div className={`flex justify-between items-center gap-5`}>
          <Button
            className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
            onClick={handleAddProduct}
          >
            Сохранить
          </Button>
          {action === "add" ? (
            <Button className={`bg-admin-blue md:hover:bg-admin-blue-hover`}>
              Сохранить и добавить еще
            </Button>
          ) : null}
        </div>
        {action === "edit" ? (
          <Button
            className={`bg-admin-red hover:bg-admin-red-hover duration-500`}
          >
            Удалить
          </Button>
        ) : null}
      </div>
    </div>
  );
}
