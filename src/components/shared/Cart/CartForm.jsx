"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const CartForm = ({ favorites }) => {
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
                {item.price} сом
              </p>
            </div>
          ))}
        </div>
        <div className={`h-[1px] w-full bg-button my-12`}></div>
        <div className={`flex justify-between p-3`}>
          <p className={`text-body3 font-bold text-button`}>Итого</p>
          <p className={`text-body3 font-bold text-button`}>
            {favorites.reduce((total, item) => total + item.price, 0)} сом
          </p>
        </div>
        <Button
          className={`bg-button hover:bg-button-hover duration-300 w-[97%] py-3 m-3`}
          onClick={handleOrder}
        >
          Перейти к оформлению заказа
        </Button>
      </div>
    </div>
  );
};
