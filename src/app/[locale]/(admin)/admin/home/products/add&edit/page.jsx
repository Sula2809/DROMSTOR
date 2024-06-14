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

export default function AddEditProduct() {
  const [name, setName] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedAction = localStorage.getItem("buttonAction");

    setName(storedName);
    setAction(storedAction);
  }, []);

  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>
        {action === "add" ? "Добавить продукт" : "Изменить продукт"}
      </h2>
      <div className={`space-y-5`}>
        <SelectName label="Название (на русском):" />
        <SelectName label="Название (на английском):" />
        <SelectDescription label="Описание (на русском):" />
        <SelectDescription label="Описание (на английском):" />
        <SelectColor label="Цвет:" />
        <SelectMaterial label="Материал:" />
        <SelectCategory label="Категория:" />
        <SelectSubCategory label="Подкатегория:" />
        <SelectSubSubCategory label="Субподкатегория:" />
        <SelectPrice label="Цена:" />
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
