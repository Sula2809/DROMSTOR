import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import data from "./recomendationCarousel.json";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import Autoplay from "embla-carousel-autoplay";

export const Recommendations = () => {
  return (
    <section className="p-2 lg:py-10">
      <div className="container">
        <h4 className="uppercase text-body3 text-button md:text-h4 font-normal md:font-bold w-full mb-3 md:mb-10">
          Рекомендации
        </h4>
        <Carousel
          className="mx-auto w-[100%]"
          opts={{
            loop: true,
          }}
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent className="gap-1 md:gap-10">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 md:basis-1/5 relative cursor-pointer m-0 p-0 max-w-[100px] max-h-[100px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[360px] md:max-h-[360px]"
              >
                <img
                  className="size-full object-cover"
                  src={item.img}
                  alt="img"
                />
                <TextOnHover />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center absolute gap-0 right-10 md:top-[-60px] -top-5">
            <CarouselPrevious
              className="text-black bg-button hover:bg-button-hover size-4 md:size-8"
              isBlack={false}
            />
            <CarouselNext
              className="text-black bg-button hover:bg-button-hover size-4 md:size-8"
              isBlack={false}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
