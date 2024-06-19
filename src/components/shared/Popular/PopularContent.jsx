"use client";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import { useEffect, useState } from "react";
import { GetPopularProducts } from "@/shared/services/product/product";
import { useRouter } from "next/navigation";

export const PopularContent = () => {
  const [popular, setPopular] = useState(null);
  const router = useRouter();

  const handlePopularProduct = (id, catalogName) => {
    router.push(`/catalog/${catalogName}/${id}`);
  };

  useEffect(() => {
    const fetchPopular = async () => {
      const res = await GetPopularProducts();
      setPopular(res.data);
    };
    fetchPopular();
  }, []);
  return (
    <CarouselContent className="gap-1 md:gap-10">
      {popular?.map((item, index) => (
        <CarouselItem
          key={index}
          className="basis-1/4 md:basis-1/5 relative cursor-pointer m-0 p-0 max-w-[100px] max-h-[100px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[360px] md:max-h-[360px]"
        >
          {item.images && item.images.length > 0 ? (
            <img className={`size-full`} src={item.images[0].image} alt="img" />
          ) : (
            <div className="size-full flex items-center justify-center bg-gray-200">
              No Image
            </div>
          )}
          <TextOnHover item={item} handleProduct={handlePopularProduct} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};
