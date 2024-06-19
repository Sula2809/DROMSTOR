"use client";
import FavoriteButton from "@/components/shared/Buttons/FavoriteButton/FavoriteButton";
import { CartButton } from "@/components/shared/Buttons/CartButton/CartButton";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import productStores from "@/shared/services/store/Products.store";

export const CatalogContent = ({ name = "Все категории" }) => {
  const router = useRouter();
  const product = useTranslations("Product");
  const { productsData, fetchAllProducts, isLoadingProducts } =
    productStores.useGetAllProductsStore();
  const [currentData, setCurrentData] = useState(null);

  const handleProductInfo = (id) => {
    router.push(`/catalog/${name}/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAllProducts();
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData().catch((error) =>
      console.error("Failed to execute fetchData", error),
    );
  }, [fetchAllProducts]);

  return (
    <div className="catalog flex justify-center items-center flex-wrap gap-2 md:gap-4 mt-5 md:mt-0">
      {productsData?.results?.map((el, index) => (
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
            <FavoriteButton item={el.isInFavorite} />
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
      ))}
    </div>
  );
};
