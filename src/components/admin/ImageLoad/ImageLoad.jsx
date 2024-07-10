"use client";
import {useEffect, useState} from "react";

export const ImageLoad = ({setFunction, reset}) => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setFunction(file); // Передача файла в родительский компонент
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
            setFunction(null); // Сброс файла в родительском компоненте
        }
    };

    useEffect(() => {
        if (reset) {
            setPreviewImage(null);
        }
    }, [reset]);

    useEffect(() => {
        const storedAction = localStorage.getItem("buttonAction");
        if (storedAction === "edit") {
            const img = localStorage.getItem("img");
            if (img) setPreviewImage(img);
        } else {
            setPreviewImage(null);
        }
    }, []);

    return (
        <div className={`flex gap-20 items-center`}>
            <p className={`text-body2 font-bold`}>Изображение:</p>{" "}
            <input type="file" onChange={handleFileChange} accept="image/*"/>
            {previewImage && (
                <img
                    src={previewImage}
                    alt="Preview"
                    className={`size-32 object-cover object-center border-2 border-white`}
                />
            )}
        </div>
    );
};
