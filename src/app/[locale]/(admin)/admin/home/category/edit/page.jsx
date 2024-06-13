"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function EditCategory() {
  const [value, setValue] = useState("");
  useEffect(() => {
    const storedValue = localStorage.getItem("categoryEdit");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);
  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>Добавить категорию</h2>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold`}>Имя:</p>{" "}
        <input
          className={`bg-inherit rounded-sm border border-white px-3 py-1 max-w-96 w-full`}
          type="text"
          value={value}
          readOnly
        />
      </div>
      <div
        className={`flex justify-between items-center bg-admin-grey-hover py-1 px-4`}
      >
        <div className={`flex gap-5`}>
          <Button className={`bg-admin-blue md:hover:bg-admin-blue-hover`}>
            Сохранить
          </Button>
        </div>
        <Button
          className={`bg-admin-red hover:bg-admin-red-hover duration-500 `}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}
