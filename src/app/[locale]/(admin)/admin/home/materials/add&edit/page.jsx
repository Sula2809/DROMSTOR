"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ImageLoad } from "@/components/admin/ImageLoad/ImageLoad";
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/Providers/AuthProvider";
import {
  AddColors,
  DeleteColors,
  EditColors,
  GetColors,
} from "@/shared/services/colors/colors";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AddMaterials,
  DeleteMaterial,
  DeleteMaterials,
  EditMaterial,
  GetMaterials,
} from "@/shared/services/materials/materials";

export default function AddEditMaterial() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [action, setAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(0);
  const [errors, setErrors] = useState({ name: "", image: "" });

  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    const storedName = localStorage.getItem("productName");
    const storedAction = localStorage.getItem("buttonAction");
    const storedID = localStorage.getItem("productID");
    if (storedName) {
      console.log(storedName);
      setName(storedName);
    } else {
      console.log("no name");
      setName("");
    }
    if (storedAction) setAction(storedAction);
    if (storedID) setId(parseInt(storedID));
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

  const handleAddMaterials = async (isReCall = false) => {
    if (!validate()) {
      return;
    }
    setIsLoading(true);
    const data = new FormData();
    data.append("name", name);
    data.append("name_en", name);
    data.append("image", image);

    try {
      const res = await AddMaterials(token, data);
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

  const handleDeleteMaterials = async () => {
    try {
      await DeleteMaterials(token, id);
      router.back();
    } catch (err) {
      console.error("Error delete color", err);
    }
  };

  const EditMaterials = async () => {
    if (!validate()) {
      return;
    }
    setIsLoading(true);
    const data = new FormData();
    data.append("image", image);
    try {
      const res = await EditMaterial(token, data, id);
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
          className={`bg-inherit rounded-sm border border-white px-2`}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>
      <ImageLoad setFunction={setImage} reset={image === null} />
      <div
        className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}
      >
        <div className={`flex justify-between items-center gap-5`}>
          {isLoading ? (
            <Skeleton className="h-10 w-[105px]" />
          ) : (
            <Button
              className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
              onClick={() => {
                action === "edit" ? EditMaterials() : handleAddMaterials(false);
              }}
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
                onClick={() => handleAddMaterials(true)}
              >
                Сохранить и добавить еще
              </Button>
            )
          ) : null}
        </div>
        {action === "edit" ? (
          <Button
            className={`bg-admin-red hover:bg-admin-red-hover duration-500 `}
            onClick={handleDeleteMaterials}
          >
            Удалить
          </Button>
        ) : null}
      </div>
    </div>
  );
}
