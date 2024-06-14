"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ImageLoad } from "@/components/admin/ImageLoad/ImageLoad";

export default function AddEditMaterial() {
  const [name, setName] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    console.log("hello");
    const storedName = localStorage.getItem("editItem");
    const storedAction = localStorage.getItem("buttonAction");
    const storedMaterial = localStorage.getItem("editMaterial");

    console.log("Stored name: ", storedName);
    console.log("Stored action: ", storedAction);
    console.log("Stored material: ", storedMaterial);

    if (storedName) setName(storedName);
    if (storedAction) setAction(storedAction);
  }, []);

  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>
        {action === "edit"
          ? "Изменить материал"
          : action === "add"
            ? "Добавить материал"
            : "Ошибка"}
      </h2>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold`}>Название:</p>{" "}
        <input
          className={`bg-inherit rounded-sm border border-white`}
          type="text"
        />
      </div>
      <ImageLoad />
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
