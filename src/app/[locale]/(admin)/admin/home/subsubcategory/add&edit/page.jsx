"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";

export default function AddEditSubSubCategory() {
  const [action, setAction] = useState("");

  const { categoryData, fetchCategories } = useGetAllCategoriesStore();
  const { subCategoryData, fetchSubCategories } = useGetSubCategoriesStore();

  useEffect(() => {
    const storedAction = localStorage.getItem("buttonAction");
    setAction(storedAction);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchCategories();
        await fetchSubCategories();
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData().catch((error) =>
      console.error("Failed to execute fetchData", error),
    );
  }, [fetchCategories, fetchSubCategories]);

  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>
        {action === "edit"
          ? "Изменить субкатегорию"
          : action === "add"
            ? "Добавить субкатегорию"
            : "Ошибка"}
      </h2>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold w-1/5`}>Название субкатегории:</p>{" "}
        <input
          className={`bg-inherit rounded-sm border border-white px-3 py-1`}
          type="text"
        />
      </div>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold w-1/5`}>Категория:</p>{" "}
        <Select>
          <SelectTrigger className="w-96 bg-inherit">
            <SelectValue placeholder="выберите категорию" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categoryData?.results?.map((item, index) => (
                <SelectItem key={index} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold w-1/5`}>Подкатегория:</p>{" "}
        <Select>
          <SelectTrigger className="w-96 bg-inherit">
            <SelectValue placeholder="выберите подкатегорию" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {subCategoryData?.results?.map((item, index) => (
                <SelectItem key={index} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div
        className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}
      >
        <div className={`flex justify-between items-center gap-5`}>
          <Button className={`bg-admin-blue md:hover:bg-admin-blue-hover`}>
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
            className={`bg-admin-red hover:bg-admin-red-hover duration-500 `}
          >
            Удалить
          </Button>
        ) : null}
      </div>
    </div>
  );
}
