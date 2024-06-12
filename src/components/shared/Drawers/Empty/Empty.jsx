"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";

export const Empty = ({ isCart = false }) => {
  const router = useRouter();
  return (
    <div className="container text-center py-72">
      <p
        className={
          "text-body4 sm:text-body3 md:text-body2 lg:text-body1 font-normal text-button mb-10 "
        }
      >
        {isCart
          ? "Ваша корзина пока пуста"
          : "Добавьте товары в избранное и они появятся тут"}
      </p>
      <SheetClose asChild>
        <Button
          className={`text-body4 text-white font-bold py-3 px-12 bg-button duration-500 hover:bg-button-hover active:bg-button-hover`}
          onClick={() => router.push(`/catalog`)}
        >
          Перейти в каталог
        </Button>
      </SheetClose>
    </div>
  );
};
