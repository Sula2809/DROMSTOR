import { Empty } from "@/components/shared/Drawers/Empty/Empty";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { CartContent } from "@/components/shared/Cart/CartContent";
import { CartForm } from "@/components/shared/Cart/CartForm";
import favorites from "@/components/shared/Cart/favorites.json";
import { useTranslations } from "next-intl";

export default function Cart() {
  const breadCrumbs = useTranslations("BreadCrumbs");
  const order = useTranslations("Cart.OrderPage");

  if (!favorites) {
    return <Empty isCart={false} />;
  }

  const cartBreadCrumbs = [
    { name: breadCrumbs("home"), link: "/" },
    { name: breadCrumbs("cart"), link: "/cart" },
  ];

  return (
    <main className={`container px-4 md:px-20 md:py-5`}>
      <BreadCrumb items={cartBreadCrumbs} className={`hidden md:block `} />
      <div className={`flex justify-between items-center mt-5 mb-1`}>
        <h3 className={`text-body-3 md:text-h4 font-bold text-button`}>
          {order("cart")}
        </h3>
        <div
          className={`text-end text-body4 md:text-body2 font-normal text-button pr-4`}
        >
          {order("product")}: {favorites.length}
        </div>
      </div>
      <div className={`flex flex-col md:flex-row gap-10`}>
        <div className={`w-full md:w-3/5`}>
          <CartContent favorites={favorites} />
        </div>
        <div className={`w-full md:w-2/5 pb-10`}>
          <CartForm favorites={favorites} />
        </div>
      </div>
    </main>
  );
}
