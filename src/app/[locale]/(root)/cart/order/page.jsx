import { CartContent } from "@/components/shared/Cart/CartContent";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { OrderForm } from "@/components/shared/Cart/OrderForm";
import { Button } from "@/components/ui/button";
import favorites from "@/components/shared/Cart/favorites.json";
import { BackToOrder } from "@/components/shared/BackToOrder/BackToOrder";
import { useTranslations } from "next-intl";

export default function OrderPage() {
  const t = useTranslations("BreadCrumbs");
  const order = useTranslations("Cart.OrderPage");

  const orderBreadCrumbs = [
    { name: t("home"), link: "/" },
    { name: t("cart"), link: "/cart" },
    { name: t("makeOrder"), link: "/cart/order" },
  ];

  return (
    <div className={`container px-4 md:px-8 lg:px-20 lg:py-5`}>
      <BreadCrumb items={orderBreadCrumbs} className={`hidden md:block `} />
      <div className={`flex justify-between items-center mt-5`}>
        <BackToOrder />
        <h3
          className={`hidden lg:block text-body-3 md:text-h4 font-bold text-button`}
        >
          {order("title")}
        </h3>
        <Button
          className={`hidden lg:block underline border-none hover:bg-inherit bg-inherit text-button hover:text-border_brown p-0 text-[21px] font-normal`}
        >
          {order("deleteAll")}
        </Button>
        <div
          className={`text-end text-body4 md:text-body2 font-normal text-button pr-4`}
        >
          {order("total")}: {favorites.length}
        </div>
      </div>
      <div className={`flex flex-col md:flex-row gap-8 md:gap-10`}>
        <div className={`md:w-3/5`}>
          <CartContent isOrder={true} />
        </div>
        <div className={`md:w-2/5 pb-10`}>
          <OrderForm />
        </div>
      </div>
    </div>
  );
}
