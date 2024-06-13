"use client";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function OrderSuccessPage() {
  const router = useRouter();
  const breadCrumbs = useTranslations("BreadCrumbs");
  const t = useTranslations("Cart.OrderSuccess");

  const orderSuccessBreadCrumbs = [
    { name: breadCrumbs("home"), link: "/" },
    { name: breadCrumbs("cart"), link: "/cart" },
    { name: breadCrumbs("makeOrder"), link: "/cart/order" },
  ];

  return (
    <div className={`container py-5`}>
      <BreadCrumb
        items={orderSuccessBreadCrumbs}
        className={`hidden md:block `}
      />
      <div
        className={`mt-5 h-[550px] flex justify-center items-center size-full`}
      >
        <div className={`flex justify-center flex-col items-center gap-5`}>
          <h1
            className={`text-body1 sm:text-h3 md:text-h2 lg:text-h1 font-normal md:font-bold text-button`}
          >
            {t("title")}
          </h1>
          <p
            className={`text-blue-text text-body-4 sm:text-body3 md:text-body2 lg:text-body1 font-normal`}
          >
            {t("feedBack")}
          </p>
          <Button
            className={
              "bg-button-hover hover:bg-button duration-500 text-white font-bold"
            }
            onClick={() => router.replace(`/catalog`)}
          >
            {t("toCatalog")}
          </Button>
        </div>
      </div>
    </div>
  );
}
