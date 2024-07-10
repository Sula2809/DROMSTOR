"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  AddCategory,
  DeleteCategory,
  EditCategory,
} from "@/shared/services/categories/category";
import { useAuth } from "@/shared/Providers/AuthProvider";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { refreshToken } from "@/shared/services/refreshToken/refreshtoken";

export default function AddEditCategory() {
  const { token, setToken } = useAuth();
  const router = useRouter();

  const [action, setAction] = useState("");

  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", name_en: "" });
  const [id, setId] = useState(null);

  const validateCategory = () => {
    const newErrors = { name: "", name_en: "" };
    if (!name) {
      newErrors.name = "Название обязательно";
    }
    if (!nameEn) {
      newErrors.name_en = "Название на английском обязательно";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.image;
  };

  const handleAddCategory = async (isReCall = false) => {
    if (!validateCategory()) {
      return;
    }
    setIsLoading(true);
    const data = {
      name: name,
      name_en: nameEn,
    };
    try {
      const res = await AddCategory(data, token);
      if (res) {
        setIsLoading(false);
        if (isReCall) {
          setName("");
          setNameEn("");
        } else {
          router.back();
        }
      }
    } catch (err) {
      setIsLoading(false);
      console.error("Error adding category: ", err);
      if (err.response.status === 401) {
        console.log("401");
        const newToken = await refreshToken(token);
        if (newToken) {
          setToken(newToken);
          await handleAddCategory();
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      const res = await DeleteCategory(token, id);
      if (res) {
        router.back();
      }
    } catch (err) {
      console.error("Error deleting category", err);
      if (err.response?.status === 401) {
        console.log(err.response.status);
        const newToken = await refreshToken(token);
        if (newToken) {
          setToken(newToken);
          await handleDeleteCategory();
        }
      }
    }
  };

  const handleEditCategory = async () => {
    if (!validateCategory()) {
      return;
    }
    console.log("access: ", token);
    setIsLoading(true);
    const data = { name, name_en: nameEn };
    try {
      const res = await EditCategory(token, data, id);
      if (res) {
        setIsLoading(false);
        router.back();
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      if (err?.response?.status === 401) {
        const res = await refreshToken(token);
        if (res) {
          console.log("ressss: ", res);
          setToken(res);
          handleEditCategory();
        }
      }
    }
  };

  useEffect(() => {
    const storedAction = localStorage.getItem("buttonAction");
    const storedID = localStorage.getItem("productID");
    if (storedAction) setAction(storedAction);
    if (storedAction === "edit") {
      const storedName = localStorage.getItem("name");
      const storedNameEn = localStorage.getItem("name_en");
      if (storedName) setName(storedName);
      if (storedNameEn) setNameEn(storedNameEn);
    }

    if (storedID) setId(parseInt(storedID));
  }, []);
  useEffect(() => {
    console.log("id: ", id);
  }, [id]);

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
          onChange={(e) => setName(e.target.value)}
          value={name ? name : ""}
          type="text"
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold w-1/4`}>Название (English):</p>{" "}
        <input
          className={`bg-inherit rounded-sm border border-white w-96 px-3 py-1`}
          placeholder={`Введите название категории...`}
          onChange={(e) => setNameEn(e.target.value)}
          value={nameEn ? nameEn : ""}
          type="text"
        />
        {errors.name_en && (
          <span className="text-red-500">{errors.name_en}</span>
        )}
      </div>
      <div
        className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}
      >
        <div className={`flex justify-between items-center gap-5`}>
          {isLoading ? (
            <Skeleton className={`w-[110px] h-10`} />
          ) : (
            <Button
              className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
              onClick={() => {
                action === "edit" ? handleEditCategory() : handleAddCategory();
              }}
            >
              Сохранить
            </Button>
          )}
          {action === "add" ? (
            isLoading ? (
              <Skeleton className={`w-52 h-10`} />
            ) : (
              <Button
                className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                onClick={() => handleAddCategory(true)}
              >
                Сохранить и добавить еще
              </Button>
            )
          ) : null}
        </div>
        {action === "edit" ? (
          <Button
            className={`bg-admin-red hover:bg-admin-red-hover duration-500 `}
            onClick={handleDeleteCategory}
          >
            Удалить
          </Button>
        ) : null}
      </div>
    </div>
  );
}
