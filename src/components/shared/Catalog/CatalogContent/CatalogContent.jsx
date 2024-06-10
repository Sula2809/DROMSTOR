"use client";
import catalogItems from "./catalogItems";
import FavoriteButton from "@/components/shared/Buttons/FavoriteButton/FavoriteButton";
import { CartButton } from "@/components/shared/Buttons/CartButton/CartButton";
import { useRouter } from "next/navigation";

export const CatalogContent = ({ name = "Все категории" }) => {
  const router = useRouter();
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
                className={`absolute bottom-3 left-4 p-3 rounded-2xl max-h-[44px] max-w-[105px] size-full bg-button text-white text-body2 font-normal`}
              >
                Новинка
              </span>
            )}
            {el.recommendation && (
              <span
                className={`absolute bottom-3 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-4 p-3 rounded-2xl max-h-[44px] max-w-[155px] size-full bg-white text-button text-body2 font-normal ${el.new ? "bottom-20" : ""}`}
              >
                Рекомендуем
              </span>
            )}
          </div>
          <div className={`p-1 space-y-3`}>
            <h1 className={`text-body2 font-medium text-button`}>
              {el.name + index}
            </h1>
            <p className={`text-body3 font-normal text-button`}>
              {el.price} com
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
