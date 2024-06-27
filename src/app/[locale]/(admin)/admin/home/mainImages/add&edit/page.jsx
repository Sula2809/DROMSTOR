"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AddMainImages } from "@/shared/services/HomepageSwiperImages/mainImages";
import { useAuth } from "@/shared/Providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function AddEditMainImages() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);
  const { token } = useAuth(); // Получаем токен

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setError(null); // Сбрасываем ошибку при выборе файла
    } else {
      setPreviewUrl(null);
    }
  };

  const AddImages = async () => {
    if (!selectedFile) {
      setError("Вы не загрузили файл!"); // Устанавливаем сообщение об ошибке
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await AddMainImages(formData, token);
      if (res) {
        router.back();
      } else {
        console.log("no image");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="text-body1">Добавить фотографию на главную страницу</h2>
      {error && <h4 className={`text-h1 text-red-500 font-bold`}>{error}</h4>}
      <div className="flex gap-20 items-center">
        <p className="text-body2 font-bold w-1/4">Название:</p>{" "}
        <input
          className="bg-inherit rounded-sm border border-white w-96 px-3 py-1"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      {previewUrl && (
        <div className="flex gap-20 items-center">
          <p className="text-body2 font-bold w-1/4">
            Предварительный просмотр:
          </p>
          <img
            src={previewUrl}
            alt="Preview"
            className="w-64 h-64 object-cover"
          />
        </div>
      )}
      <div className="bg-admin-grey-hover flex justify-between items-center py-1 px-4">
        <div className="flex justify-between items-center gap-5">
          <Button
            className="bg-admin-blue md:hover:bg-admin-blue-hover"
            onClick={AddImages}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}
