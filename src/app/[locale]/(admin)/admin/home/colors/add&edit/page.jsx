"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ImageLoad } from "@/components/admin/ImageLoad/ImageLoad";
import {
  AddColors,
  DeleteColors,
  EditColors,
  GetColors,
} from "@/shared/services/colors/colors";
import { useAuth } from "@/shared/Providers/AuthProvider";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { log } from "next/dist/server/typescript/utils";

export default function AddEditColors() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [action, setAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(0);
  const [errors, setErrors] = useState({ name: "", image: "" });

  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    console.log("colors edit adding useEffect");
    const storedName = localStorage.getItem("productName");
    const storedAction = localStorage.getItem("buttonAction");
    const storedID = localStorage.getItem("productID");
    const storedImg = localStorage.getItem("img");
    if (storedName) {
      setName(storedName);
    } else {
      setName("");
    }
    if (storedAction) setAction(storedAction);
    if (storedID) setId(parseInt(storedID));
    if (storedImg) {
      console.log(storedImg);
      setImage(storedImg);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const validate = () => {
    const newErrors = { name: "", image: "" };
    if (!name) {
      newErrors.name = "Название обязательно";
    }
    if (!image) {
      newErrors.image = "Изображение обязательно";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.image;
  };

  const handleAddColor = async (isReCall = false) => {
    if (!validate()) {
      return;
    }
    setIsLoading(true);
    const data = new FormData();
    data.append("name", name);
    data.append("name_en", name);
    data.append("image", image);

    try {
      const res = await AddColors(token, data);
      if (res) {
        if (isReCall) {
          setName("");
          setImage(null);
        } else {
          router.back();
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditColor = async () => {
    if (!validate()) {
      return;
    }
    setIsLoading(true);
    const data = new FormData();
    data.append("image", image);
    try {
      const res = await EditColors(token, data, id);
      if (res) {
        setName("");
        setImage(null);
        router.back();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteColor = async () => {
    try {
      await DeleteColors(token, id);
      router.back();
    } catch (err) {
      console.error("Error delete color", err);
    }
  };

  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>
        {action === "edit"
          ? "Изменить цвет"
          : action === "add"
            ? "Добавить цвет"
            : "Ошибка"}
      </h2>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold`}>Название:</p>
        <div className="flex flex-col">
          <input
            className={`bg-inherit rounded-sm border border-white px-2`}
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
      </div>
      <div className="flex flex-col">
        <ImageLoad setFunction={setImage} reset={image === null} />
        {errors.image && <span className="text-red-500">{errors.image}</span>}
      </div>
      <div
        className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}
      >
        <div className={`flex justify-between items-center gap-5`}>
          {isLoading ? (
            <Skeleton className="h-10 w-[105px]" />
          ) : (
            <Button
              className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
              onClick={() =>
                action === "edit" ? handleEditColor() : handleAddColor(false)
              }
            >
              Сохранить
            </Button>
          )}
          {action === "add" ? (
            isLoading ? (
              <Skeleton className={"h-10 w-28"} />
            ) : (
              <Button
                className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                onClick={() => handleAddColor(true)}
              >
                Сохранить и добавить еще
              </Button>
            )
          ) : null}
        </div>
        {action === "edit" ? (
          <Button
            className={`bg-admin-red hover:bg-admin-red-hover duration-500 `}
            onClick={handleDeleteColor}
          >
            Удалить
          </Button>
        ) : null}
      </div>
    </div>
  );
}
