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

export default function AddEditCategory() {
  const { categoryData, fetchCategories } = useGetAllCategoriesStore();
  const [action, setAction] = useState("");

  useEffect(() => {
    const storedAction = localStorage.getItem("buttonAction");
    setAction(storedAction);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchCategories();
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData().catch((error) =>
      console.error("Failed to execute fetchData", error),
    );
  }, [fetchCategories]);

  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>
        {action === "edit"
          ? "Изменить подкатегорию"
          : action === "add"
            ? "Добавить подкатегорию"
            : "Ошибка"}
      </h2>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold w-1/5`}>Название:</p>{" "}
        <input
          className={`bg-inherit rounded-sm border border-white px-3 py-1 text-body3 w-96`}
          placeholder={`Введите название подкатегории`}
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
