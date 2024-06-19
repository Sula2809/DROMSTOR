"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Стул",
  },
  {
    id: 2,
    name: "Доска",
  },
  {
    id: 3,
    name: "Плитка",
  },
];

const productImages = [
  {
    id: 21,
    productID: 1,
    images: [
      "/productImages/image1.png",
      "/productImages/image2.png",
      "/productImages/image3.png",
      "/productImages/image4.jpg",
      "/productImages/image5.png",
    ],
  },
  {
    id: 22,
    productID: 2,
    images: [
      "/productImages/image5.png",
      "/productImages/image3.png",
      "/productImages/image2.png",
      "/productImages/image4.jpg",
      "/productImages/image1.png",
    ],
  },
  {
    id: 23,
    productID: 3,
    images: [
      "/productImages/image5.png",
      "/productImages/image1.png",
      "/productImages/image2.png",
      "/productImages/image4.jpg",
      "/productImages/image3.png",
    ],
  },
];

export default function AddEditCategory() {
  const [previewImages, setPreviewImages] = useState([]);
  const [action, setAction] = useState("");
  const [product, setProduct] = useState("");
  const [productName, setProductName] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });
    Promise.all(imagePreviews).then((images) => {
      setPreviewImages((prevImages) => [...prevImages, ...images]);
    });
  };

  useEffect(() => {
    const storedAction = localStorage.getItem("buttonAction");
    const storedProductID = localStorage.getItem("productID");
    const storedProductName = localStorage.getItem("productName");

    setAction(storedAction);
    setProduct(storedProductID || "");
    setProductName(storedProductName || "");
  }, []);

  const handleProductChange = (value) => {
    setProduct(value);
  };

  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>
        {action === "edit"
          ? "Изменить изображения"
          : action === "add"
            ? "Добавить изображения"
            : "Загрузка..."}
      </h2>
      <div className={`flex gap-20 items-center`}>
        {action === "add" ? (
          <Select onValueChange={handleProductChange}>
            <SelectTrigger className="w-96 bg-inherit">
              <SelectValue placeholder="Выберите продукт..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {products.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ) : action === "edit" ? (
          <p className={`text-body2 font-bold`}>{productName}</p>
        ) : (
          <p>Неизвестная ошибка</p>
        )}
      </div>
      <div>
        {action === "edit" ? (
          <div className="flex flex-wrap gap-2 mt-5">
            {productImages
              .filter((img) => img.productID.toString() === product)
              .flatMap((img) => img.images)
              .map((imgSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgSrc}
                  alt={`Изображение ${imgIndex + 1}`}
                  className="size-40 object-cover"
                />
              ))}
          </div>
        ) : action === "add" ? (
          <div className={`flex flex-col gap-5 items-center`}>
            <div className={`flex gap-20 items-center`}>
              <p className={`text-body2 font-bold`}>Изображения:</p>{" "}
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                multiple
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {previewImages.map((imgSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgSrc}
                  alt={`Preview ${imgIndex + 1}`}
                  className={`size-20 object-cover object-center border-2 border-white`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>Неизвестная ошибка</p>
        )}
      </div>
      <div
        className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4 mt-5`}
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
