"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function AddEditCategory() {
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
        {action === "edit"
          ? "Изменить категорию"
          : action === "add"
            ? "Добавить категорию"
            : "Ошибка"}
      </h2>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold w-1/4`}>Название:</p>{" "}
        <input
          className={`bg-inherit rounded-sm border border-white w-96 px-3 py-1`}
          placeholder={`Введите название категории...`}
          type="text"
        />
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
