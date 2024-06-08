import Image from "next/image";
import { Counter } from "@/components/shared/Counter/Counter";
import { Button } from "@/components/ui/button";
import { DeliveryIcon } from "@/components/shared/Icons/DeliveryIcon";
import favorites from "@/components/shared/Cart/favorites.json";

export const CartContent = ({ isOrder = false }) => {
  return (
    <div>
      <div className={`flex justify-between`}>
        <h3 className={`text-h4 font-bold text-button`}>
          {isOrder ? "Ваши заказы" : "Корзина"}
        </h3>
        {isOrder && (
          <Button
            className={`underline border-none hover:bg-inherit bg-inherit text-button hover:text-border_brown p-0 text-[21px] font-normal`}
          >
            Удалить все
          </Button>
        )}
      </div>
      <div className={`space-y-5 mt-5`}>
        {favorites?.map((item, index) => (
          <div key={index} className={`flex justify-between`}>
            <div className={`w-[30%]`}>
              <Image
                src={item.img}
                alt={`image${index}`}
                width={188}
                height={188}
              />
            </div>
            <div className={`flex justify-between w-full`}>
              <div className={`flex flex-col w-1/2`}>
                <h2 className={`text-body2 font-normal text-button pb-2`}>
                  {item.title + index}
                </h2>
                <p className={`text-body3 font-normal text-button py-1`}>
                  {item.price + " com"}
                </p>
                <div className={`mt-auto`}>
                  {isOrder && (
                    <p className={`text-blue-text`}>
                      <DeliveryIcon /> Доставим в течении 10-20 дней
                    </p>
                  )}
                  <Counter defaultCount={item.count} />
                </div>
              </div>
              <Button
                className={`underline p-0 h-5 text-button hover:bg-inherit hover:text-border_brown duration-300`}
                variant={"ghost"}
              >
                Удалить
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
