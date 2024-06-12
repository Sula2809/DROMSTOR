import { FavoriteIcon } from "@/components/shared/Icons/FavoriteIcon";
import { CartButton } from "@/components/shared/Buttons/CartButton/CartButton";
import { useTranslations } from "next-intl";

export const FavoritesContent = () => {
  const t = useTranslations("Drawers");
  const favorites = [
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 2000,
    },
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 1200,
    },
    {
      img: "/cart/cart1.png",
      isInCart: true,
      title: "Product #",
      price: 3333,
    },
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 2660,
    },
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 2560,
    },
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 2320,
    },
    {
      img: "/cart/cart1.png",
      isInCart: true,
      title: "Product #",
      price: 2310,
    },
    {
      img: "/cart/cart1.png",
      isInCart: true,
      title: "Product #",
      price: 20,
    },
    {
      img: "/cart/cart1.png",
      isInCart: true,
      title: "Product #",
      price: 22000,
    },
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 1200,
    },
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 4500,
    },
    {
      img: "/cart/cart1.png",
      isInCart: false,
      title: "Product #",
      price: 3000,
    },
  ];
  return (
    <div className={`py-2 md:py-10`}>
      <h1
        className={`text-body3 sm:text-body2 md:text-body1 lg:text-h4 font-bold text-button mb-8`}
      >
        {t("favorites")}
      </h1>
      <div className="flex flex-wrap justify-start gap-2 md:gap-8 items-center">
        {favorites.map((item, index) => (
          <div key={index} className={`shadow space-y-3 pb-3 cursor-pointer`}>
            <div
              className={`relative h-[200px] w-[195px] md:w-[316px] md:h-[388px]`}
            >
              <img
                src={item.img}
                alt="logo"
                className={`w-full h-full object-cover`}
              />
              <span
                className={`absolute top-2 right-2 max-w-[60px] max-h-[34px] bg-background rounded-2xl flex justify-center size-full cursor-pointer`}
              >
                <FavoriteIcon
                  isStroke={true}
                  stroke={"red"}
                  fill={"red"}
                  isFill={true}
                />
              </span>
              <CartButton item={item.isInCart} />
            </div>
            <h1
              className={`px-3 text-body-4 m-0 md:text-body2 font-normal text-button`}
            >{`${item.title}${index}`}</h1>
            <p
              className={`px-3 text-body-c1 md:text-body3 font-normal text-button m-0`}
            >
              {item.price + " " + t("currency")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
