"use client";
import FavoriteButton from "@/components/shared/Buttons/FavoriteButton/FavoriteButton";
import Image from "next/image";
import { Counter } from "@/components/shared/Counter/Counter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AddCartItems } from "@/shared/services/cart/cart";
import Cookies from "js-cookie";

export const ProductContent = ({ product }) => {
  const productT = useTranslations("Product");
  const token = Cookies.get("access_token");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleMaterialClick = (index) => {
    setSelectedMaterial(index);
  };
  const handleColorClick = (index) => {
    setSelectedColor(index);
  };
  const handleAddCart = (id) => {
    const addCArt = async (id) => {
      const res = await AddCartItems(id, token);
    };
    addCArt(id);
  };

  useEffect(() => {
    localStorage.setItem("access_token", product);
  }, [product]);

  return (
    <div>
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="w-full justify-between items-center flex relative">
            <h1 className="text-h4 font-bold text-button">{product.name}</h1>
            <FavoriteButton
              item={product.isInFavorite}
              classname="border border-button"
            />
          </div>
          <p className="text-body1 font-normal text-button">
            {product.price} {productT("currency")}
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-body2 font-bold text-button">
            {productT("material")}
          </h3>
          <div className="w-full justify-start items-center flex gap-3 relative">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`item relative w-14 h-14 hover:border-4 hover:border-button cursor-pointer duration-500 ${
                  selectedMaterial === index ? "border-4 border-black" : ""
                }`}
                onClick={() => handleMaterialClick(index)}
              >
                <img
                  src={item.image}
                  alt={item}
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-body2 font-bold text-button">
            {productT("color")}
          </h3>
          <div className="flex items-center justify-start gap-3 w-full">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`item relative w-14 h-14 hover:border-4 hover:border-button cursor-pointer duration-500 ${
                  selectedColor === index ? "border-4 border-black" : ""
                }`}
                onClick={() => handleColorClick(index)}
              >
                <img
                  src={item.image}
                  alt={item}
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Counter classname="mt-0" />
          <Button
            className="bg-button rounded-sm hover:bg-border_brown active:scale-[0.95]"
            onClick={() => handleAddCart(product.id)}
          >
            {productT("addCart")}
          </Button>
        </div>
      </div>
      <div
        className={`w-full mt-10 md:mt-24 bg-background_section md:bg-inherit py-3 px-1`}
      >
        <h2 className="text-body3 md:text-body1 font-bold text-button mb-5">
          {productT("description")}
        </h2>
        <div className="space-y-5 md:space-y-12 ">
          <p className="text-body4 md:text-body1 font-normal text-button">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};
