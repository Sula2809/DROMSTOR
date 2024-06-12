"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const CartForm = ({ favorites }) => {
  const order = useTranslations("Cart.OrderPage");
  const router = useRouter();
  const handleOrder = () => {
    router.push("/cart/order");
  };
  return (
    <div>
      <div className={`md:shadow-2xl`}>
        <div className={`space-y-4 p-3`}>
          {favorites?.map((item, index) => (
            <div key={index} className={`justify-between flex`}>
              <h3 className={`text-body3 font-normal text-button`}>
                {item.title + index}
              </h3>
              <p className={`text-body3 font-bold text-button`}>
                {item.price} {order("currency")}
              </p>
            </div>
          ))}
        </div>
        <div className={`h-[1px] w-full bg-button my-12`}></div>
        <div className={`flex justify-between p-3`}>
          <p className={`text-body3 font-bold text-button`}>{order("total")}</p>
          <p className={`text-body3 font-bold text-button`}>
            {favorites.reduce((total, item) => total + item.price, 0)}{" "}
            {order("currency")}
          </p>
        </div>
        <Button
          className={`bg-button hover:bg-button-hover duration-300 w-[97%] py-3 m-3`}
          onClick={handleOrder}
        >
          {order("goOrder")}
        </Button>
      </div>
    </div>
  );
};
