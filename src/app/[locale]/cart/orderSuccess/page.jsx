"use client";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const orderSuccessBreadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Корзина", link: "/cart" },
  { name: "Оформление заказа", link: "/cart/order" },
];

export default function OrderSuccessPage() {
  const router = useRouter();
  return (
    <div className={`container py-5`}>
      <BreadCrumb items={orderSuccessBreadCrumbs} />
      <div
        className={`mt-5 h-[800px] flex justify-center items-center size-full`}
      >
        <div className={`flex justify-center flex-col items-center gap-5`}>
          <h1 className={`text-h1 font-bold text-button`}>Ваш заказ принят!</h1>
          <p className={`text-blue-text text-body1 font-normal`}>
            С вами свяжутся в течении 1-3 дней
          </p>
          <Button
            className={
              "bg-button-hover hover:bg-button duration-500 text-white font-bold"
            }
            onClick={() => router.replace(`/catalog`)}
          >
            Перейти в каталог
          </Button>
        </div>
      </div>
    </div>
  );
}
