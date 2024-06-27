"use client";
import { decodeURL } from "@/shared/services/decodeURL";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { ProductImages } from "@/components/shared/Product/ProductImages/ProductImages";
import { useEffect } from "react";
import { ProductContent } from "@/components/shared/Product/ProductContent/ProductContent";
import { useTranslations } from "next-intl";
import productStores, {
  useGetSingleProductStore,
} from "@/shared/services/store/Products.store";

export default function ProductPage({ params }) {
  const { productItem, fetchSingleProduct, isLoadingItem } =
    productStores.useGetSingleProductStore();
  const breadCrumbs = useTranslations("BreadCrumbs");
  const productID = decodeURL(params.product);
  const categoryName = decodeURL(params.name);

  const productBreadCrumbs = [
    { name: breadCrumbs("home"), link: "/" },
    { name: breadCrumbs("catalog"), link: "/catalog" },
    {
      name: categoryName,
      link: `/catalog/${categoryName}`,
    },
    {
      name: productID,
      link: `/catalog/${categoryName}/${productID}`,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSingleProduct(productID);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData().catch((error) =>
      console.error("Failed to execute fetchData", error),
    );
  }, [fetchSingleProduct, productID]);

  useEffect(() => {
    console.log("data: ", productItem);
  }, [productItem]);

  return (
    <div className={`container py-6`}>
      <BreadCrumb items={productBreadCrumbs} className={`hidden md:block `} />
      <div className={`pt-8 flex flex-col md:flex-row gap-12`}>
        <div className={`w-full md:w-[45%]`}>
          {productItem && <ProductImages images={productItem.images} />}
        </div>
        <div className={`w-full md:w-[65%]`}>
          {productItem && <ProductContent product={productItem} />}
        </div>
      </div>
    </div>
  );
}
