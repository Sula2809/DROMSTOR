"use client";
import FavoriteButton from "@/components/shared/Buttons/FavoriteButton/FavoriteButton";
import { CartButton } from "@/components/shared/Buttons/CartButton/CartButton";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import productStores from "@/shared/services/store/Products.store";
import { AddFavoriteItem } from "@/shared/services/favorites/favorites";
import { error } from "next/dist/build/output/log";
import { useAuth } from "@/shared/Providers/AuthProvider";
import { FavoriteIcon } from "@/components/shared/Icons/FavoriteIcon";
import { GetAllProducts } from "@/shared/services/product/product";

export const CatalogContent = ({ name = "Все категории" }) => {
  const router = useRouter();
  const params = useParams();
  const product = useTranslations("Product");
  const { productsData, fetchAllProducts, isLoadingProducts } =
    productStores.useGetAllProductsStore();
  const { token } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToFavorite = (e, id) => {
    e.stopPropagation();
    console.log("click");
    if (!token) {
      localStorage.setItem("message", "Для начала нужно войти в систему");
      const event = new Event("showLogin");
      window.dispatchEvent(event);
    } else {
      const addFavorite = async (id) => {
        const response = await AddFavoriteItem(token, id);
        if (response) {
          console.log("added");
        } else {
          error();
        }
      };
      addFavorite();
    }
  };

  const handleProductInfo = (id) => {
    router.push(`/catalog/${name}/${id}`);
  };

  const fetchData = async (category, subCat, subSubCat, productName) => {
    await GetAllProducts(null, null, null, null, category, subCat);
  };
  useEffect(() => {
    const category = localStorage.getItem("category");
    const subCategory = localStorage.getItem("subCategory");
    const subSubCategory = localStorage.getItem("subSubCategory");
    const productName = localStorage.getItem("productName");
    if (category || subCategory || subSubCategory) {
      fetchData(null, null, null, category).catch((error) =>
        console.error("Failed to execute fetchData", error),
      );
    }

    fetchData().catch((error) =>
      console.error("Failed to execute fetchData", error),
    );
  }, [fetchAllProducts]);

  useEffect(() => {
    console.log("prpds", productsData);
    console.log(params);
  }, [productsData]);

  return (
    <div className="catalog flex justify-center items-start flex-wrap gap-2 md:gap-4 mt-5 md:mt-0">
      {productsData.length > 1 ? (
        productsData?.results?.map((el, index) => (
          <div
            key={index}
            className={`shadow cursor-pointer max-w-[270px]`}
            onClick={() => handleProductInfo(el.id)}
          >
            <div
              className={`relative w-[180px] h-[200px] md:w-[268px] md:h-[350px]`}
            >
              <img
                src={el.images?.[0]?.image || ""}
                alt={`image${index}`}
                className={`object-cover size-full`}
              />
              <span
                className={`border border-black top-4 right-2 max-w-[60px] max-h-[34px] rounded-2xl flex justify-center items-center size-full cursor-pointer hover:bg-button duration-300 active:scale-[0.9] bg-white absolute`}
                onClick={(e) => handleAddToFavorite(e, el.id)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/*{item.is_in_favorite ? (*/}
                {/*  <FavoriteIcon isStroke={true} stroke="red" fill="red" isFill={true} />*/}
                {/*) : (*/}
                {/*  <FavoriteIcon stroke={isHovered ? "white" : "black"} />*/}
                {/*)}*/}
                <FavoriteIcon
                  isStroke={true}
                  stroke="red"
                  fill="red"
                  isFill={true}
                />
              </span>
              <CartButton item={el.isInCart} />
              {el.new && (
                <span
                  className={`absolute bottom-3 justify-center left-4 p-3 rounded-2xl max-h-[30px] md:max-h-[44px] max-w-[90px] flex items-center md:max-w-[105px] size-full bg-button text-white text-body3 md:text-body2 font-normal`}
                >
                  {product("new")}
                </span>
              )}
              {el.recommendation && (
                <span
                  className={`absolute bottom-3 justify-center left-1/2 -translate-x-1/2 md:translate-x-0 md:left-4 p-3 flex items-center rounded-2xl max-h-[30px] md:max-h-[44px] max-w-[140px] md:max-w-[155px] size-full bg-white text-button text-body3 md:text-body2 font-normal ${el.new ? "bottom-20" : ""}`}
                >
                  {product("recommended")}
                </span>
              )}
            </div>
            <div className={`p-1 space-y-3`}>
              <h1
                className={`text-body3 md:text-body2 font-medium text-button break-words whitespace-normal`}
              >
                {el.title}
              </h1>
              <p className={`text-body4 md:text-body3 font-normal text-button`}>
                {el.price
                  ? `${el.price}  ${product("currency")}`
                  : "цена не указана"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className={`text-body1`}>Товары не найдены</div>
      )}
    </div>
  );
};
