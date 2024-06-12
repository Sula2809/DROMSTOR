"use client";
import catalogItems from "./catalogItems";
import FavoriteButton from "@/components/shared/Buttons/FavoriteButton/FavoriteButton";
import { CartButton } from "@/components/shared/Buttons/CartButton/CartButton";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const CatalogContent = ({ name = "Все категории" }) => {
  const router = useRouter();
  const product = useTranslations("Product");
  const handleProductInfo = (item) => {
    localStorage.setItem("product", JSON.stringify(item));
    router.push(`/catalog/${name}/${item.name}`);
  };

  return (
    <div className="catalog flex justify-center items-center flex-wrap gap-2 md:gap-4 mt-5 md:mt-0">
      {catalogItems.map((el, index) => (
        <div
          key={index}
          className={`shadow cursor-pointer`}
          onClick={() => handleProductInfo(el)}
        >
          <div
            className={`relative w-[180px] h-[200px] md:w-[268px] md:h-[388px]`}
          >
            <img
              src={el.img[0]}
              alt={`image${index}`}
              className={`object-fill size-full`}
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
            <h1 className={` text-body3 md:text-body2 font-medium text-button`}>
              {el.name + index}
            </h1>
            <p className={`text-body4 md:text-body3 font-normal text-button`}>
              {el.price} {product("currency")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
