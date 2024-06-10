import Image from "next/image";
import { Counter } from "@/components/shared/Counter/Counter";
import { Button } from "@/components/ui/button";
import { DeliveryIcon } from "@/components/shared/Icons/DeliveryIcon";
import favorites from "@/components/shared/Cart/favorites.json";

export const CartContent = ({ isOrder = false }) => {
  return (
    <div className={`px-3`}>
      <div className={`space-y-5 mt-5`}>
        {favorites?.map((item, index) => (
          <div key={index} className={`flex justify-between gap-2`}>
            <div className={`w-1/4`}>
              <Image
                src={item.img}
                alt={`image${index}`}
                width={188}
                height={188}
              />
            </div>
            <div className={`flex justify-between w-3/4 gap-4`}>
              <div className={`flex flex-col w-3/4`}>
                <h2
                  className={`text-body3 lg:text-body2 font-normal text-button pb-2`}
                >
                  {item.title + index}
                </h2>
                <p
                  className={`text-body4 md:text-body3 font-normal text-button py-1 whitespace-nowrap overflow-hidden overflow-ellipsis w-full`}
                >
                  {item.price + " com"}
                </p>
                <div className={`mt-auto hidden lg:block`}>
                  {isOrder && (
                    <p className={`text-blue-text`}>
                      <DeliveryIcon /> Доставим в течении 10-20 дней
                    </p>
                  )}
                  <Counter defaultCount={item.count} />
                </div>
              </div>
              <Button
                className={`underline text-c1 md:text-body3 p-0 h-5 text-button hover:bg-inherit hover:text-border_brown duration-300`}
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
