import { Empty } from "@/components/shared/Drawers/Empty/Empty";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { CartContent } from "@/components/shared/Cart/CartContent";
import { CartForm } from "@/components/shared/Cart/CartForm";
import favorites from "@/components/shared/Cart/favorites.json";

export default function Cart() {
  if (!favorites) {
    return <Empty isCart={false} />;
  }

  const cartBreadCrumbs = [
    { name: "Главная", link: "/" },
    { name: "Корзина", link: "/cart" },
  ];

  return (
    <main className={`container px-20 py-5`}>
      <BreadCrumb items={cartBreadCrumbs} />
      <div className={`flex mt-5 gap-10`}>
        <div className={`w-3/5`}>
          <CartContent favorites={favorites} />
        </div>
        <div className={`w-2/5`}>
          <CartForm favorites={favorites} />
        </div>
      </div>
    </main>
  );
}
