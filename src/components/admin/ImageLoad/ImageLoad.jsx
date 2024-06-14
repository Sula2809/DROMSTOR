"use client";
import { useEffect, useState } from "react";

export const ImageLoad = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  useEffect(() => {
    const material = localStorage.getItem("editMaterial"); // Updated key to "editMaterial"
    if (material) {
      setPreviewImage(material);
      console.log();
    }
  }, []);

  return (
    <div className={`flex gap-20 items-center`}>
      <p className={`text-body2 font-bold`}>Изображение:</p>{" "}
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          className={`size-20 object-cover object-center border-2 border-white`}
        />
      )}
    </div>
  );
};
