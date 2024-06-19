"use client";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/shared/Counter/Counter";
import { Empty } from "@/components/shared/Drawers/Empty/Empty";
import { useRouter } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { GetCartItems } from "@/shared/services/cart/cart";
import { GetFavoritesItems } from "@/shared/services/favorites/favorites";
import Cookie from "js-cookie";
import { NotAuth } from "@/components/shared/Drawers/NotAuth/NotAuth";

export const DrawerContent = ({ isCart = false }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const router = useRouter();
  const t = useTranslations();

  const token = Cookie.get("access_token");

  const fetchDrawersData = async () => {
    const cartData = await GetCartItems(token);
    const favoritesData = await GetFavoritesItems(token);
    if (cartData === 200) {
      setCartItems(cartData);
    }
    if (favoritesData === 200) {
      setFavoritesItems(favoritesData);
    }
  };

  useEffect(() => {
    if (token) {
      setIsAuth(true);
      fetchDrawersData();
    }
  }, []);

  if (!isAuth) {
    return <NotAuth />;
  }
  return (
    <div className={`w-full h-full space-y-5`}>
      <h2
        className={`text-body2 md:text-body1 lg:text-h4 font-normal text-button`}
      >
        {isCart ? t("Drawers.cart") : t("Drawers.favorites")}
      </h2>
      {cartItems.length < 1 ? (
        <Empty isCart={isCart} />
      ) : (
        <div className={`h-full`}>
          <div
            className={`h-[580px] md:h-[690px] lg:h-[720px] overflow-y-scroll pr-10`}
          >
            <div className={`space-y-5`}>
              {cartItems.map((item, index) => (
                <div key={index} className={`flex justify-between`}>
                  <div className={`w-1/5 md:w-[30%]`}>
                    <img src={item.img} alt={`image${index}`} />
                  </div>
                  <div className={`flex flex-col w-1/2`}>
                    <h2
                      className={`text-body3 md:text-body2 font-normal text-button pb-2`}
                    >
                      {item.title + index}
                    </h2>
                    <div className={`flex md:flex-col justify-between gap-4`}>
                      <p
                        className={`text-body4 md:text-body3 font-normal text-button py-1`}
                      >
                        {item.price + " " + t("Currency")}
                      </p>
                      <Counter
                        defaultCount={item.count}
                        classname={`mt-auto`}
                      />
                    </div>
                  </div>
                  <Button
                    className={`underline p-0 h-5 text-button hover:bg-inherit hover:text-border_brown duration-300`}
                    variant={"ghost"}
                  >
                    {t("Buttons.delete")}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`my-4 flex justify-end border-t border-border_brown pt-5`}
          >
            <Button
              variant={"ghost"}
              className={`underline px-2 md:p-4 text-button hover:bg-inherit hover:text-border_brown duration-300`}
            >
              {t("Buttons.deleteAll")}
            </Button>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                onClick={() => {
                  isCart
                    ? router.replace(`/cart`)
                    : router.replace(`/favorites`);
                }}
                className={`underline px-2 md:p-4 text-button hover:bg-inherit hover:text-border_brown duration-300`}
              >
                {isCart ? t("Buttons.seeCart") : t("Buttons.seeFavorites")}
              </Button>
            </SheetClose>
            {isCart ? (
              <SheetClose asChild>
                <Button
                  className={`bg-button hover:bg-border_brown active:bg-border_brown text-white`}
                  onClick={() => router.replace(`/cart/order`)}
                >
                  {t("Buttons.makeOrder")}
                </Button>
              </SheetClose>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
