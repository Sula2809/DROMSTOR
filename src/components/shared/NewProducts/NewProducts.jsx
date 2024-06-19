import data from "./data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import Autoplay from "embla-carousel-autoplay";
import { NewProductsContent } from "@/components/shared/NewProducts/NewProductsContent";
export const NewProducts = () => {
  return (
    <section className={`py-10`}>
      <div className={`container`}>
        <h4
          className={` text-body3 md:text-h4 text-button font-bold uppercase mb-5`}
        >
          Новые товары
        </h4>
        <Carousel
          className="w-[95%] mx-auto "
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ loop: true }}
        >
          <NewProductsContent />
          <CarouselPrevious
            className={`hidden md:flex bg-button hover:bg-button-hover text-black border-none justify-center size-7`}
            isBlack={false}
          />
          <CarouselNext
            className={`hidden md:flex bg-button hover:bg-button-hover text-black border-none justify-center size-7`}
            isBlack={false}
          />
        </Carousel>
      </div>
    </section>
  );
};
