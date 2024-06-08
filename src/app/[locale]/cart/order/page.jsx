import { CartContent } from "@/components/shared/Cart/CartContent";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { OrderForm } from "@/components/shared/Cart/OrderForm";

const orderBreadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Корзина", link: "/cart" },
  { name: "Оформление заказа", link: "/cart/order" },
];

export default function OrderPage() {
  return (
    <div className={`container px-20 py-5`}>
      <BreadCrumb items={orderBreadCrumbs} />
      <div className={`flex gap-10 mt-5`}>
        <div className={`w-3/5`}>
          <CartContent isOrder={true} />
        </div>
        <div className={`w-2/5`}>
          <OrderForm />
        </div>
      </div>
    </div>
  );
}
