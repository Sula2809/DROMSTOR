import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { NewProductsContent } from "@/components/shared/NewProducts/NewProductsContent";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GetPopularProducts } from "@/shared/services/product/product";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";

export const NewProducts = () => {
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
    <section className={`py-10`}>
      <div className={`container`}>
        <h4
          className={` text-body3 md:text-h4 text-button font-bold uppercase mb-5`}
        >
          Новые товары
        </h4>
        {/*<Carousel*/}
        {/*  className="w-[95%] mx-auto "*/}
        {/*  plugins={[Autoplay({ delay: 3000 })]}*/}
        {/*  opts={{ loop: true }}*/}
        {/*>*/}
        {/*  <NewProductsContent />*/}
        {/*  <CarouselPrevious*/}
        {/*    className={`hidden md:flex bg-button hover:bg-button-hover text-black border-none justify-center size-7`}*/}
        {/*    isBlack={false}*/}
        {/*  />*/}
        {/*  <CarouselNext*/}
        {/*    className={`hidden md:flex bg-button hover:bg-button-hover text-black border-none justify-center size-7`}*/}
        {/*    isBlack={false}*/}
        {/*  />*/}
        {/*</Carousel>*/}
        <Carousel className="mx-auto max-w-screen-3xl w-[90%]">
          <CarouselContent className={``}>
            {popular?.map((item, index) => (
              <CarouselItem
                key={index}
                className={`pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-[456px] max-h-[456px]`}
              >
                {item.images && item.images.length > 0 ? (
                  <>
                    <img
                      className={`size-full object-contain`}
                      src={item.images[0].image}
                      alt="img"
                    />
                    <TextOnHover
                      item={item}
                      handleProduct={handlePopularProduct}
                    />
                  </>
                ) : (
                  <div className="size-full flex items-center justify-center bg-gray-200">
                    No Image
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
