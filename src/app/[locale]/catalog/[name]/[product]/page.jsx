"use client";
import { decodeURL } from "@/shared/services/decodeURL";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { ProductImages } from "@/components/shared/Product/ProductImages/ProductImages";
import { useEffect } from "react";
import { ProductContent } from "@/components/shared/Product/ProductContent/ProductContent";

export default function ProductPage({ params }) {
  const productName = decodeURL(params.product);
  const categoryName = decodeURL(params.name);
  const product = JSON.parse(localStorage.getItem("product"));
  const productBreadCrumbs = [
    { name: "Главная", link: "/" },
    { name: "Каталог", link: "/catalog" },
    {
      name: categoryName,
      link: `/catalog/${categoryName}`,
    },
    {
      name: productName,
      link: `/catalog/${categoryName}/${productName}`,
    },
  ];
  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <div className={`container py-6`}>
      <BreadCrumb items={productBreadCrumbs} className={`hidden md:block `} />
      <div className={`pt-8 flex flex-col md:flex-row gap-12`}>
        <div className={`w-full md:w-[45%]`}>
          <ProductImages images={product.img} />
        </div>
        <div className={`w-full md:w-[65%]`}>
          <ProductContent product={product} />
        </div>
      </div>
    </div>
  );
}
