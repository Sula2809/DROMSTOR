"use client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import { useEffect, useState } from "react";
import { GetNewProducts } from "@/shared/services/product/product";
import { useRouter } from "next/navigation";

export const NewProductsContent = () => {
  const router = useRouter();
  const [newProducts, setNewProducts] = useState([]);

  const handleNewProduct = (id, catalogName) => {
    router.push(`/catalog/${catalogName}/${id}`);
  };

  useEffect(() => {
    const fetchNewProducts = async () => {
      const res = await GetNewProducts();
      if (res) {
        setNewProducts(res.data);
      }
    };
    fetchNewProducts();
  }, []);
  return (
    <CarouselContent className="gap-0 sm:gap-4 md:gap-6 lg:gap-8">
      {newProducts?.map((item, index) => (
        <CarouselItem key={index} className=" pl-1 md:pl-20 basis-1/3">
          <div
            className={`relative cursor-pointer overflow-hidden max-w-[100px] max-h-[100px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[456px] md:max-h-[456px]`}
          >
            {item.images && item.images.length > 0 ? (
              <img
                className={`size-full`}
                src={item.images[0].image}
                alt="img"
              />
            ) : (
              <div className="size-full flex items-center justify-center bg-gray-200">
                No Image
              </div>
            )}
            <TextOnHover item={item} handleProduct={handleNewProduct} />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};
